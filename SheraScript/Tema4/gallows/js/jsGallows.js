const campoCasillas = document.querySelector("#campoCasillas");
const palabraAhorcado = document.querySelector("#palabraAhorcado");
const botonPista = document.querySelector("#botonPista");

const contadorIntentos = document.querySelector("#contadorIntentos");

const botonJugarAhorcado = document.querySelector('#botonJugarAhorcado');
const botonesLetras = document.getElementsByName("botonLetra");

// Esta variable se encargará de controlar cuando el ejercicio ha finalizado
let controlTamanioPalabraAhorcado = 0;

// Esta variable la creamos en el ámbito global ya que su valor será puesto dentro de un evento.
let casillasLetras;

// Usaremos esta variable para transformar la palabra en un array y poder trabajar con sus índices.
let palabraAhorcadoArray;



/*
    ? Se interpretará que una vocal sigue siendo la misma vocal sea mayúscula, minúscula, lleve tilde o no.
    ? Por ello, a lo largo de la programación se tendrá en varias ocasiones esta consideración.
*/
function generadoCasillas(valor = ""){

}
// Botón generador de casillas iniciales de palabra a adivinar
botonJugarAhorcado.addEventListener('click', () => {
    console.log(palabraAhorcado.value)

    campoCasillas.innerHTML = 
    `
        <div class="btn-group">
    `;

    for (const letra of palabraAhorcado.value) {
        console.log(letra)
        campoCasillas.innerHTML += 
        `
            </div>
            <div class="btn-group">
        `;
        if (letra.match(/[a-zA-ZÀ-ÄÉ-ÏÒ-ÖÚ-Üà-äè-ïò-öù-ü\u00f1\u00d1]/)) {
            console.log('%c⧭ Letra con RegExp: ', 'color: #f2ceb6', letra);
            
            campoCasillas.innerHTML += 
            `
                <button type="button" class="btn btn-light casillaLetra" value="${letra}" name="casillaLetra"></button>
            `;
        } else if (letra.match(/\s/g)) {
            console.log('%c⧭ Espacio con RegExp: ', 'color: #139237', letra);

            controlTamanioPalabraAhorcado++;

            campoCasillas.innerHTML += 
            `
                <button type="button" class="btn btn-dark casillaLetra" value="" name="casillaLetra"></button>
            `;
        } else {
            console.log('%c⧭ Caracter con RegExp: ', 'color: #bb2669', letra);

            controlTamanioPalabraAhorcado++;

            campoCasillas.innerHTML += 
            `
                <button type="button" class="btn btn-info casillaLetra" value="" name="casillaLetra">${letra}</button>
            `;
        }

    }

    campoCasillas.innerHTML += 
    `
        </div>
    `;


    // Le damos valor a esta variable que creamos antes para poder trabajar con ella fuera de este evento.
    casillasLetras = document.getElementsByName("casillaLetra");
    palabraAhorcadoArray = (palabraAhorcado.value).split("");
    console.log('%c⧭ Array de palabra ahorcado', 'color: #f2ceb6', palabraAhorcadoArray);
})


// Este botón dará todas las repeticiones de una letra aleatoria. Está hecho de tal manera que sólo pueda ser usado una vez, pero en cualquier momento.
botonPista.addEventListener('click', () => {
    let controlLetra = false;

    /* 
        ! Este while se encargará de controlar que sólo se podrá salir de aquí si cumple las siguientes condiciones.
        
            ? Letra aleatoria: Que la letra aleatoria que vamos a obtener sea de un caracter válido de nuestro array palabraAhorcadoArray, es decir,
            ? que en la posición del array que pueda salir 'letra aleatoria' no sea un espacio o un caracter como una coma o un punto.

            ? casillasLetras[letraAleatoria].textContent: Que en la posición de la casilla donde ha salido el número aleatorio de 'letraAleatoria'
            ? no tenga ya contenido.
    */
    while (controlLetra != true) {
        let letraAleatoria = Math.round(Math.random() * (palabraAhorcadoArray.length - 1));
        
        if (palabraAhorcadoArray[letraAleatoria].match(/[a-zA-ZÀ-ÄÉ-ÏÒ-ÖÚ-Üà-äè-ïò-öù-ü\u00f1\u00d1]/) && casillasLetras[letraAleatoria].textContent == "") {

            /*
                ! Una vez ha entrado por este if quiere decir que la letra aleatoria que va a ser mostrada como pista es una letra válida
                ! y que aún no está escrita. 

                    ? Recorremos el array 'palabraAhorcadoArray' para comparar cada uno de sus valores con el valor de este mismo array en la 
                    ? posición dada por la letra aleatoria.

                    ? Luego preguntamos si esas letras son iguales. Puesto que una vocal seguirá siendo la misma vocal lleve tilde o no, le haremos
                    ? un pequeño formateo a la vocal dentro de la condición del 'if' para que se puedan ver como iguales.

                    ? Si las letras coinciden entonces, puesto que la posición de las letras que tienen que ir en las casillas de las letras
                    ? son las mismas que las del array 'palabraAhorcadoArray', en las posiciones donde esas letras coinciden pondremos
                    ? dichas letras en las casillas correspondientes

                    ? Además aumentaremos el valor de la variable que se encarga de controlar la cantidad de letras adivinadas
            */
            palabraAhorcadoArray.forEach((letra, posicionLetra) => {
                if (formatearLetra(letra.toUpperCase()) == formatearLetra(palabraAhorcadoArray[letraAleatoria].toUpperCase())) {
                    audioCorrecto(document.body, controlTamanioPalabraAhorcado, palabraAhorcadoArray.length);

                    casillasLetras[posicionLetra].classList.add("voltearCasilla");
                    setTimeout(() => {
                        casillasLetras[posicionLetra].textContent = letra;
                    }, 1000);
                    

                    /*
                        ! Esta pista nos habrá descubierto una letra. Por ello querremos que nuestro botón de letra que coincida
                        ! con la letra descubierta por la pista, se ponga en verde y deshabilitado.

                            ? Para conseguirlo recorreremos cada uno de nuestros botones de letras. Podemos hacerlo fácilmente porque todos los
                            ? botones tienen el mismo nombre y se puede manejar como un array.

                            ? Al recorrerlo, preguntamos si contenido del boton coincide con la letra formateada de la letra aleatoria.
                            ? En cuantro encuentra la coincidencia (siempre habrá una coincidencia), lo pondrá en verde y deshabilitará
                    */
                    botonesLetras.forEach((botonLetra) => {
                        if (botonLetra.textContent == formatearLetra(palabraAhorcadoArray[letraAleatoria].toUpperCase())) {
                            botonLetra.style.backgroundColor = "green";
                            botonLetra.setAttribute("disabled", "");
                        }                       
                    });

                    if (++controlTamanioPalabraAhorcado == (palabraAhorcado.value).length) {
                        console.log('%c⧭ Tamaño letras: ', 'color: #e50000', controlTamanioPalabraAhorcado);
                        victoria();
                    }

                }
            })
            
            botonPista.style.display = "none";
            controlLetra = true;
        }
    }
});


let intentosRestantes = 6;
// Llegamos al punto donde al darle a un botón de una letra realizaremos el juego.
botonesLetras.forEach((botonLetra, index) => {

    // Le damos a cada botón de letras un evento al hacerle click.
    botonLetra.addEventListener('click', () => {
        console.log("controlTamanioPalabraAhorcado: ", controlTamanioPalabraAhorcado)
        
        // Esta variable controlará si la letra pulsada es una letra a adivinar
        let controlErrorLetraEncontrada = true;      

        /*
                ? Cuando le hemos dado a un botón recorreremos todas las casillas donde mostraremos las letras correctas.
                ? Si existe alguna letra que hemos pulsado con la letra que tenemos que adivinar, nos lo mostrará en la casilla
                ? correspondiente. Para ello trabajaremos también con el array de la palabra que creamos antes, "palabraAhorcadoArray".

            ! Las letras que van en cada posición de las casillas coinciden con las posiciones del array de la palabra y por eso
            ! podemos hacer que si el botón pulsado es correcto nos muestra en la casilla correspondiente la letra que le toca.
        */
        casillasLetras.forEach((casillaLetra, index) => {
            // La función "controlBotonLetra(botonLetra, casillaLetra)" está en js/controlButtonsGallows.js
            if (controlBotonLetra(botonLetra.textContent, (casillaLetra.value).toUpperCase())) {
                audioCorrecto(document.getElementsByClassName("contenedorBotonLetra")[index], controlTamanioPalabraAhorcado, palabraAhorcadoArray.length);

                casillaLetra.classList.add("voltearCasilla");
                    setTimeout(() => {
                        casillaLetra.textContent = palabraAhorcadoArray[index];
                    }, 1000);

                controlErrorLetraEncontrada = false;

                if (++controlTamanioPalabraAhorcado == (palabraAhorcado.value).length) {
                    console.log('%c⧭ Tamaño letras: ', 'color: #e50000', controlTamanioPalabraAhorcado);
                    victoria();
                }
            }
        });

        // * Una vez le hemos dado a un botón, deshabilitaremos ese botón.
        botonLetra.setAttribute("disabled", "");


        /*
            ! Se controlara el caso en el que se haya pulsado una letra correcta o no

                ? En el caso de que no haya sido pulsado una letra correcta, la variable "controlErrorLetraEncontrada" se quedará en 'true'.
                ? Al ser así, cambiamos el estilo del botón a rojo y evaluaremos el número de intentos que nos queda.

                ? Además, según el número de intentos que nos quede y según el verdugo que escogimos al comienzo, mostraremos una imagen u otra.
        */
        if (controlErrorLetraEncontrada) {
            botonLetra.style.backgroundColor = "red";
            audioIncorrecto(document.getElementsByClassName("contenedorBotonLetra")[index], intentosRestantes, verdugoEscogido);

            contadorIntentos.innerHTML = `Intentos restantes: ${--intentosRestantes}`;

            if (intentosRestantes > 0) {
                contenedorDibujos.style.backgroundImage =  `url(img/${verdugoEscogido}${intentosRestantes}.png)`;                
            } else {
                /* 
                    ! Si el número de intentos restantes el 0, lanzaremos la función de 'derrota()' que sehabilitará todos los botones
                    ! y nos informará de que hemos perdido. 
                */
               if (verdugoEscogido == "Tradicional") {
                    contenedorDibujos.style.backgroundImage =  `url(img/${verdugoEscogido}${intentosRestantes}.png)`;
               } else if (verdugoEscogido == "Thanos"){
                    contenedorDibujos.style.backgroundImage =  `url(img/${verdugoEscogido}${intentosRestantes}.png)`;

                    let arrayDesvanecimiento = [cartelAhorcado, document.querySelector("#franjaTop"), campoCasillas, contadorIntentos, contenedorLetras, botonReiniciar, document.querySelector("#franjaBottom"), document.querySelector("#contenido-main")]
                    let posicionArrayDesvanecimiento = 0;
                    let intervaloDesvanecimiento = setInterval(() => {
                        arrayDesvanecimiento[posicionArrayDesvanecimiento].classList.add("desaparecer");
                        setTimeout(() => arrayDesvanecimiento[posicionArrayDesvanecimiento++].style.display = "none", 900);
                    }, 1500);

                    setTimeout(() => {
                        "clearInterval(" + intervaloDesvanecimiento + ")";
                        document.body.classList.add("thanos");
                        document.body.classList.add("aparecer");
                        
                    }, 13000);

               } else {
                    contenedorDibujos.style.backgroundImage =  `url(img/${verdugoEscogido}${intentosRestantes}${Math.round(Math.random() * 2)}.png)`;                
               }
               derrota();
            }

        } else {
            botonLetra.style.backgroundColor = "green";
        }
        
    });
});


