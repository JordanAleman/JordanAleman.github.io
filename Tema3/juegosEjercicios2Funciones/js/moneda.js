const cara = document.querySelector('#eleccionCara');
const cruz = document.querySelector('#eleccionCruz');

const eleccionMoneda = document.getElementById("selectorMonedas");
const eleccionMovimientoMoneda = document.getElementById("selectorMovimiento");
const botonMonedaAleatoria = document.getElementById("monedaAleatoria");

const botonCara = document.querySelector('#cara');
const botonCruz = document.querySelector('#cruz');

const botonLanzar = document.querySelector('#botonLanzador');
const animacionMoneda = document.querySelector('#flipCoinAnimation');

const resultadoPuntos = document.querySelector('#resultadoPuntos');
const mensajeResultadoPuntos = document.querySelector('#mensajeResultadoPuntos');
const marcadorPuntos = document.querySelector('#marcadorPuntos');
const puntosJugador = document.querySelector('#puntosJugador');
const puntosMaquina = document.querySelector('#puntosMaquina');

const imagenPrincipal = document.querySelector(".flip-card");
const imagenDelantera = document.querySelector(".flip-card-front");
const imagenTrasera = document.querySelector(".flip-card-back");

// Este objeto cambiará la selección de monedas
let imagenSeleccionada = { 
    cara: "url(img/monedas/1Cara.png)",
    cruz: "url(img/monedas/1Cruz.png)"
};

// La imagen de las monedas por defecto
botonCara.style.backgroundImage = imagenSeleccionada.cara;
botonCruz.style.backgroundImage = imagenSeleccionada.cruz;

// Esta variable guardará todos las diferentes monedas que podrá escoger el usuario
let estilosMonedas = (valor) => {
    imagenDelantera.style.backgroundImage = imagenSeleccionada.cara;
    imagenTrasera.style.backgroundImage = imagenSeleccionada.cruz;
    botonCara.style.backgroundImage = imagenSeleccionada.cara;
    botonCruz.style.backgroundImage = imagenSeleccionada.cruz;
    if (valor >= 13) {
        document.querySelectorAll(".tituloMoneda")[0].innerHTML = "";
        document.querySelectorAll(".tituloMoneda")[1].innerHTML = "";

        document.querySelectorAll(".imagenMoneda")[0].style.top = "20%";
        document.querySelectorAll(".imagenMoneda")[1].style.top = "20%";
    } else {
        document.querySelectorAll(".tituloMoneda")[0].innerHTML = "Cara";
        document.querySelectorAll(".tituloMoneda")[1].innerHTML = "Cruz";

        document.querySelectorAll(".imagenMoneda")[0].style.top = "40%";
        document.querySelectorAll(".imagenMoneda")[1].style.top = "40%";
    }


};



// Tras escoger una opción del Select, aparecerán las imágenes de la moneda escogida
eleccionMoneda.addEventListener('click', () => {
    let monedaEscogida = eleccionMoneda.options[eleccionMoneda.selectedIndex].value;
    imagenSeleccionada.cara = `url(img/monedas/${monedaEscogida}Cara.png)`;
    imagenSeleccionada.cruz = `url(img/monedas/${monedaEscogida}Cruz.png)`;
    estilosMonedas(monedaEscogida);
    
    

    console.log('monedaEscogida: ', monedaEscogida);
});

// La elección de la imagen de la moneda será aleatoria de entre las opciones disponibles
botonMonedaAleatoria.addEventListener('click', () => {
    let monedaEscogida = Math.round((Math.random() * 16) + 1);
    imagenSeleccionada.cara = `url(img/monedas/${monedaEscogida}Cara.png)`;
    imagenSeleccionada.cruz = `url(img/monedas/${monedaEscogida}Cruz.png)`;
    estilosMonedas(monedaEscogida);

    eleccionMoneda.value = monedaEscogida;
    console.log('monedaEscogida: ', monedaEscogida);
});


// El bontón de lanzar está en un principio deshabilitado. En cuanto el usuario eliga cara o cruz, el botón ya estará disponible
let habilitarBoton = () => {
    if (cara.classList.value == "monedaEleccion" && cruz.classList.value == "monedaEleccion") {
        botonLanzar.setAttribute("disabled", "");
    } else {
        botonLanzar.removeAttribute("disabled", "");
    }
};

cara.addEventListener('click', () => {
    if (cara.classList.value == "monedaEleccion") {
        cara.classList.remove("monedaEleccion");    
        cara.classList.add("monedaSeleccionada");
    } else {
        cara.classList.remove("monedaSeleccionada");    
        cara.classList.add("monedaEleccion");
    }
    cruz.classList.remove("monedaSeleccionada");    
    cruz.classList.add("monedaEleccion");

    habilitarBoton();

});

cruz.addEventListener('click', () => {
    if (cruz.classList.value == "monedaEleccion") {
        cruz.classList.remove("monedaEleccion");    
        cruz.classList.add("monedaSeleccionada");
    } else {
        cruz.classList.remove("monedaSeleccionada");    
        cruz.classList.add("monedaEleccion");
    }
    cara.classList.remove("monedaSeleccionada");    
    cara.classList.add("monedaEleccion");

    habilitarBoton();
});

let marcadorJugador = 0;
let marcadorMaquina = 0;

botonLanzar.addEventListener('click', () => {
    resultadoPuntos.classList.add("bg-dark");
    mensajeResultadoPuntos.innerHTML = "";
    
    if (eleccionMovimientoMoneda.options[eleccionMovimientoMoneda.selectedIndex].value == 1) {       
        animacionMoneda.classList.add("flipCoinAnimationLanzamiento");
    } else {
        animacionMoneda.classList.add("flipCoinAnimationGiro");

    }
    

    botonLanzar.setAttribute("disabled", "");
    eleccionMovimientoMoneda.setAttribute("disabled", "");
    eleccionMoneda.setAttribute("disabled", "");
    botonMonedaAleatoria.setAttribute("disabled", "");
    
    cara.setAttribute("disabled", "");
    cruz.setAttribute("disabled", "");

    let resultadoMoneda = Math.round(Math.random());

    let victoria = () => {
        resultadoPuntos.classList.remove("bg-dark");
        resultadoPuntos.classList.remove("resultadoPuntosPerdido");
        resultadoPuntos.classList.add("resultadoPuntosGanado");
        mensajeResultadoPuntos.innerHTML = "Has ganado 😊"
    }

    let derrota = () => {
        resultadoPuntos.classList.remove("bg-dark");
        resultadoPuntos.classList.remove("resultadoPuntosGanado");
        resultadoPuntos.classList.add("resultadoPuntosPerdido");
        mensajeResultadoPuntos.innerHTML = "Has perdido 😢"
    }

    let resultadoCara = () => {
        imagenDelantera.style.backgroundImage = imagenSeleccionada.cara;
        imagenTrasera.style.backgroundImage = imagenSeleccionada.cruz;
    } 

    let resultadoCruz = () => {
        imagenDelantera.style.backgroundImage = imagenSeleccionada.cruz;
        imagenTrasera.style.backgroundImage = imagenSeleccionada.cara;
    } 

    let mostrarResultados = () => {
        if (resultadoMoneda == 0) {
            console.log('%c⧭ Resultado de la moneda: ', 'color: #27da5f', "Cara");
            resultadoCara();
            if (cara.classList.value == "monedaSeleccionada") {
                puntosJugador.innerHTML = ++marcadorJugador;
                victoria();
            } else {
                puntosMaquina.innerHTML = ++marcadorMaquina;
                derrota();
            }
    
        } else {
            console.log('%c⧭ Resultado de la moneda: ', 'color: #da27b3', "Cruz");
            resultadoCruz();
            if (cruz.classList.value == "monedaSeleccionada") {
                puntosJugador.innerHTML = ++marcadorJugador;         
                victoria();
            } else {
                puntosMaquina.innerHTML = ++marcadorMaquina;
                derrota();
            }
        }
    }
    
   
    let removerEstilos = () => {
        botonLanzar.removeAttribute("disabled", "");
        marcadorPuntos.style.display = 'unset';
        cara.removeAttribute("disabled", "");
        cruz.removeAttribute("disabled", "");

        eleccionMovimientoMoneda.removeAttribute("disabled", "");
        eleccionMoneda.removeAttribute("disabled", "");
        botonMonedaAleatoria.removeAttribute("disabled", "");
    };


    if (eleccionMovimientoMoneda.options[eleccionMovimientoMoneda.selectedIndex].value == 1) {
        setTimeout(() => {
            animacionMoneda.classList.remove("flipCoinAnimationLanzamiento");
    
            removerEstilos();
    
            mostrarResultados();  
        }, 3000);
    } else {
        setTimeout(() => {
            animacionMoneda.classList.remove("flipCoinAnimationGiro");
    
            removerEstilos();
            mostrarResultados();  

        }, 5000);
    }
    
});




