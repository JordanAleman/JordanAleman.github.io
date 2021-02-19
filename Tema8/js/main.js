const botonVentanaColores = document.querySelector("#botonVentanaColores");

let dimensionesVentana = 
    `
        height=${screen.availHeight / 1.5},
        width=${screen.availWidth / 1.5}
    `

botonVentanaColores.addEventListener("click", () => window.open("documents/colores.html", "colorPicker", dimensionesVentana));





// Ejercicio 2
const cambioImagen = document.querySelector("#cambioImagen");
const transiciones = document.querySelector("#transiciones");
const imagenSustitucion = document.querySelectorAll(".imagenSustitucion");


function cambioTransiciones(img1, img2) {
    transiciones.classList.remove("aparecer");
    transiciones.classList.add("desvanecer");

    setTimeout(() => {
        transiciones.classList.remove("desvanecer");
        transiciones.classList.add("aparecer");

        imagenSustitucion[0].src = img1;
        imagenSustitucion[1].src = img2;
    }, 400);
}


cambioImagen.addEventListener("mouseover", () => cambioTransiciones("./img/secun-dir.gif", "./img/secun-indir.gif"));
cambioImagen.addEventListener("mouseout", () => cambioTransiciones("./img/prim-dir.gif", "./img/prim-indir.gif"));


const imagenIntentoCerrarVentana = document.querySelector("#imagenIntentoCerrarVentana");
cambioImagen.addEventListener("click", () => {
    imagenIntentoCerrarVentana.innerHTML =
        `
            <div class="alert alert-info alert-dismissible fade show mt-5" role="alert">
                <p><strong>¡Habrías cerrado esta ventana 😫!</strong> Con hacer un "window.close()" se habría cerrado todo, pero quiero vivir 😭🥴.</p>
                <p>Aunque si es lo que quieres... Con doble click si que me cerrarías 😪😇</p>.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        `;
});


cambioImagen.addEventListener("dblclick", () => {
    transiciones.innerHTML =
        `
            <div class="alert alert-danger alert-dismissible fade show mt-5" role="alert">
                <strong style="font-size: 200px">┗( T﹏T )┛</strong>
            </div>
        `;
    setTimeout(() => window.close(), 1500);    
    
});




/**
 * Esta función se encargará de evaluar el color que tiene asignado una propiedad mediante las cookies.
 * Cada vez que cambiemos de color de una propiedad de la página por medio de "colores.html", ese nuevo color se quedará almacenado en una cookie
 * y esta función averiguará qué color es. Así, al cargar la página, cada propiedad seguirá con el último color que se le había asignado.
 * 
 */
function obtenerColorCookie(propiedad) {
    // Esta creación de variable será creada de la misma forma en varios lugares. Obtiene un array sin espacios de todas las cookies.
    let cookiesArray = ((document.cookie).replace(/ /g, "")).split(";");
    console.log('%c⧭ Cookies Array: ', 'color: #f2ceb6', cookiesArray);

    let control = false;


    cookiesArray.forEach(valor => {
        /**
         * Evaluamos cada una de las cookies y cuando se encuentra la coincidencia de que la propiedad que se paso por parámetro 
         * es una de las que ya existen en las cookies, se obtendrá el color asignado a esa propiedad indicado en la cookie.
         */
        if (valor.search(`${propiedad}=#`) != -1) {
            console.log('%c⧭ Propiedad: ', 'color: #733d00', propiedad);
            console.log('%c⧭Valor color: ', 'color: #00e600', valor.split("=")[1]);
            return control = valor.split("=")[1]
        }
    });

    return control;
}


const saludoBienvenidaCookies = document.querySelector("#saludoBienvenidaCookies");
const imagenCookie = document.querySelector("#imagenCookie");


/**
 * Lo primero que sucederá al cargar la página es que evaluará si las propiedades que pueden cambiar de color habían sido ya cambiadas.
 * Si ha sido así, sus nuevos colores habrán sido guardados en cookies y este evento se encargará de asignarles el color que les corresponde.
 */
window.addEventListener("load", () => {
    let cookiesArray = ((document.cookie).replace(/ /g, "")).split(";");

    if (!cookiesArray.find(valor => valor.match(/contadorBienvenida=(\d)/))) {
        document.cookie = "contadorBienvenida=1";
        saludoBienvenidaCookies.innerHTML =
            `
                <div class="alert alert-dismissible fade show text-center" role="alert" style="background-color: #5B442B; color: white">
                    ¡🍪 Bienvenido a la página de las cookies 🍪!
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>  
            `;
    } else {
        contador = (cookiesArray.find(valor => valor.match(/contadorBienvenida=(\d)/))).split("=")[1];
        document.cookie = `contadorBienvenida=${++contador}`;

        saludoBienvenidaCookies.innerHTML =
            `
                <div class="alert alert-dismissible fade show text-center" role="alert" style="background-color: #5B442B; color: white">
                    ¡🍪 Esta es su visita número ${contador} 🍪!
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>  
            `;
    }

    let propiedadesConColores = ["cabecera", "colorCabeceraUsuario", "fondoPrincipal", "titulosPrincipales", "pie", "tituloPie"]

    propiedadesConColores.forEach((valor, index) => {
        console.log('\n%c⧭ Propiedades: ', 'color: #aa00ff', valor);

        if (obtenerColorCookie(valor)) {
            (index % 2 == 0)
            ? document.querySelectorAll(`.${valor}`).forEach(subValor => subValor.style.backgroundColor = obtenerColorCookie(valor))
            : document.querySelectorAll(`.${valor}`).forEach(subValor => subValor.style.color = obtenerColorCookie(valor));
        }
    });
});


imagenCookie.addEventListener("click", () => {
    let cookiesArray = ((document.cookie).replace(/ /g, "")).split(";");

    cookiesArray.forEach(valor => {
        (window.location.pathname.lastIndexOf("/") == 0) 
        ?   document.cookie = `${valor.substring(0, valor.indexOf("=") + 1)}; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
        :   document.cookie = `${valor.substring(0, valor.indexOf("=") + 1)}; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/"))};`;
    });
    
    location.reload();
});
