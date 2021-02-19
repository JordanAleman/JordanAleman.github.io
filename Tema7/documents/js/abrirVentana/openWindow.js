const buttonsOpenWindow = document.querySelectorAll(".botonAbrirVentanas");

let cookiesArray;
let ventana = [];

setInterval(() => {
    cookiesArray = ((document.cookie).replace(/ /g, "")).split(";");
    if (cookiesArray.indexOf("windowOpen=true") != -1) {
        buttonsOpenWindow[0].setAttribute("disabled", "");
        buttonsOpenWindow[0].classList.remove("bg-outline-secondary");
        buttonsOpenWindow[0].classList.add("bg-secondary");
    } else {
        buttonsOpenWindow[0].removeAttribute("disabled", "");
        buttonsOpenWindow[0].classList.remove("bg-secondary");
        buttonsOpenWindow[0].classList.add("bg-outline-secondary");
    }

    if (cookiesArray.find(valor => valor.match(/contador=(\d)/))) {
        console.log('%c⧭ Contador: ', 'color: #219b5e', (cookiesArray.find(valor => valor.match(/contador=(\d)/))).split("=")[1]);
    }
    

}, 1);


let contador = 1; // Cuenta del número de ventanas abiertas.
function countWindowCookie() {
    if (cookiesArray.indexOf("windowOpen=true") != -1) {
        /**
         * La siguiente instrucción se explicara mejor por medio de un ejemplo:
         * Si tenemos en "document.cookie" algo como 'windowOpen=true; contador=5', gracias a 
         * la instrucción que hicimos arriba en el setInterval siempre tendremos en la variable 'cookiesArray'
         * cookiesArray = ["windowOpen=true", "contador=5"].
         * 
         * La siguiente instrucción sería:
         * cookiesArray.find(valor => valor.match(/contador=(\d)/))                                 // "contador=5";
         * (cookiesArray.find(valor => valor.match(/contador=(\d)/))).split("=")                    // ["contador", "5"];
         * (cookiesArray.find(valor => valor.match(/contador=(\d)/))).split("=")[1];                // "5";
         * parseInt((cookiesArray.find(valor => valor.match(/contador=(\d)/))).split("=")[1]) + 1   // 6;
         */
        contador = parseInt((cookiesArray.find(valor => valor.match(/contador=(\d)/))).split("=")[1]) + 1;
    }

    console.log('%c⧭ Ventanas abiertas: ', 'color: #f2ceb6', `contador=${contador}`);
}



// ABRIR VENTANA SIN CARACTERÍSTICAS UNA SOLA VEZ
buttonsOpenWindow[0].addEventListener("click", () => {
    countWindowCookie();
    ventana.push(window.open("ventana.html", "WindowOpenedOnceTime"));
});


// ABRIR VENTANA SIN CARACTERÍSTICAS VARIAS VECES
buttonsOpenWindow[1].addEventListener("click", () => {
    countWindowCookie();
    ventana.push(window.open("ventana.html", `WindowOpenedManyTimes:${contador}`));
});


// ABRIR VENTANA CON CARACTERÍSTICAS
buttonsOpenWindow[2].addEventListener("click", () => {
    countWindowCookie();
    let dimensiones_ventana = 
        `
            height=430,
            width=420,
            menubar=no,
            status=yes,
            resizable=yes
        `
    ventana.push(window.open("ventana.html", `WindowOpenedWithFeatures:${contador}`, dimensiones_ventana));
});


// ABRIR VENTANA CON MÁS CARACTERÍSTICAS
buttonsOpenWindow[3].addEventListener("click", () => {
    countWindowCookie();
    let dimensiones_ventana = 
        `
            height=300,
            width=600,
            menubar=no,
            status=no,
            left=150,
            scrollbars=no,
            directories=no,
            location=no,
            titlebar=no,
            toolbar=no
        `
    ventana.push(window.open("ventana.html", `WindowOpenedWithMoreFeatures:${contador}`, dimensiones_ventana));
});


// ABRIR VENTANA A PANTALLA COMPLETA
buttonsOpenWindow[4].addEventListener("click", () => {
    countWindowCookie();
    let dimensiones_ventana = 
        `
            height=${screen.availHeight},
            width=${screen.availWidth},
            left=0,
            top=0
        `
    ventana.push(window.open("ventana.html", `WindowOpenedFullScreen:${contador}`, dimensiones_ventana));
});


// CERRAR VENTANAS
buttonsOpenWindow[5].addEventListener("click", () => {
    ventana.forEach(valor => valor.close());
    ventana = [];
});