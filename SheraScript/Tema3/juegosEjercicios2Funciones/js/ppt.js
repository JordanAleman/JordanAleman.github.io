const piedra =  document.querySelector('#eleccionPiedra');
const papel =  document.querySelector('#eleccionPapel');
const tijeras =  document.querySelector('#eleccionTijeras');

const selectorJugador = document.querySelector('#selectorJugador');
const selectorOponente = document.querySelector('#selectorOponente');

const jugadorAreaJuego = document.querySelector('#jugadorAreaJuego');
const maquinaAreaJuego = document.querySelector('#maquinaAreaJuego');

const botonJugar = document.querySelector('#botonJugar');

const marcadorEscondido = document.querySelector('#marcadorEscondido');
const mensajeResultadoPuntos = document.querySelector('#mensajeResultadoPuntos');
const resultadoPuntos = document.querySelector('#resultadoPuntos');
const puntosJugador = document.querySelector('#puntosJugador');
const puntosMaquina = document.querySelector('#puntosMaquina');
const ganadorActual = document.querySelector('#ganadorActual');


// Piedra = 0; Papel = 1; Tijeras = 2;
let eleccionHumana;

// El bontón de jugar está en un principio deshabilitado. En cuanto el usuario eliga piedra, papel o tijeras, el botón ya estará disponible
let habilitarBoton = () => {
    if (piedra.classList.value == "botonEleccion" && papel.classList.value == "botonEleccion"  && tijeras.classList.value == "botonEleccion") {
        botonJugar.setAttribute("disabled", "");
    } else {
        botonJugar.removeAttribute("disabled", "");
    }
};

let seleccionarOpcion = (seleccionada, noS1, noS2, valor) => {
    if (seleccionada.classList.value == "botonEleccion") {
        seleccionada.classList.remove("botonEleccion");    
        seleccionada.classList.add("botonSeleccionado");
        eleccionHumana = valor;
    } else {
        seleccionada.classList.remove("botonSeleccionado");    
        seleccionada.classList.add("botonEleccion");
    }
    noS1.classList.remove("botonSeleccionado");    
    noS1.classList.add("botonEleccion");

    noS2.classList.remove("botonSeleccionado");    
    noS2.classList.add("botonEleccion");
};

piedra.addEventListener('click', () => {
    seleccionarOpcion(piedra, papel, tijeras, 0);
    habilitarBoton();
});

papel.addEventListener('click', () => {
    seleccionarOpcion(papel, piedra, tijeras, 1);
    habilitarBoton();
});

tijeras.addEventListener('click', () => {
    seleccionarOpcion(tijeras, papel, piedra, 2);
    habilitarBoton();
});



selectorJugador.addEventListener('click', () => {
    jugadorAreaJuego.style.backgroundImage = `url(img/ppt/${selectorJugador.options[selectorJugador.selectedIndex].value}Cara.png)`;
});

// Cada vez que escogemos un oponente nos sale el rostro de nuestro oponente para poder ver bien a quién vamos a machacar xD
selectorOponente.addEventListener('click', () => {
    maquinaAreaJuego.style.backgroundImage = `url(img/ppt/${selectorOponente.options[selectorOponente.selectedIndex].value}Cara.png)`;
});



let marcadorJugador = 0;
let marcadorMaquina = 0;


botonJugar.addEventListener('click', () => {
    resultadoPuntos.classList.add("bg-dark");
    mensajeResultadoPuntos.innerHTML = "";

    // Piedra = 0; Papel = 1; Tijeras = 2;
    let resultadoMaquina = Math.round(Math.random() * 2);
    console.log('%c⧭ Resultado Máquina', 'color: #f2ceb6', resultadoMaquina);

    botonJugar.setAttribute("disabled", "");

    piedra.setAttribute("disabled", "");
    papel.setAttribute("disabled", "");
    tijeras.setAttribute("disabled", "");

    selectorJugador.setAttribute("disabled", "");
    selectorOponente.setAttribute("disabled", "");


    let victoria = () => {
        resultadoPuntos.classList.remove("bg-dark");
        resultadoPuntos.classList.remove("resultadoPuntosPerdido");
        resultadoPuntos.classList.remove("resultadoPuntosEmpate");
        resultadoPuntos.classList.add("resultadoPuntosGanado");
        mensajeResultadoPuntos.innerHTML = "Has ganado 😊";
        puntosJugador.innerHTML = ++marcadorJugador;
    }

    let derrota = () => {
        resultadoPuntos.classList.remove("bg-dark");
        resultadoPuntos.classList.remove("resultadoPuntosGanado");
        resultadoPuntos.classList.remove("resultadoPuntosEmpate");
        resultadoPuntos.classList.add("resultadoPuntosPerdido");
        mensajeResultadoPuntos.innerHTML = "Has perdido 😢";
        puntosMaquina.innerHTML = ++marcadorMaquina;
    }

    let empate = () => {
        resultadoPuntos.classList.remove("bg-dark");
        resultadoPuntos.classList.remove("resultadoPuntosGanado");
        resultadoPuntos.classList.remove("resultadoPuntosPerdido");
        resultadoPuntos.classList.add("resultadoPuntosEmpate");
        mensajeResultadoPuntos.innerHTML = "Has empatado 😋";
    }

    // Piedra = 0; Papel = 1; Tijeras = 2;
    let mostrarResultados = (eleccionMaquina) => {
        switch (eleccionMaquina) {
            case 0:
                eleccionHumana == 0
                ? empate()
                : eleccionHumana == 1 ? victoria()
                : derrota();
                break;
            case 1:
                eleccionHumana == 0
                ? derrota()
                : eleccionHumana == 1 ? empate()
                : victoria();
                break;
            case 2:
                eleccionHumana == 0
                ? victoria()
                : eleccionHumana == 1 ? derrota()
                : empate();
                break;
            
        }

        if (window.innerWidth > 900) {
            marcadorJugador > marcadorMaquina
            ? ganadorActual.innerHTML = "☜(ﾟヮﾟ☜)"
            : marcadorJugador < marcadorMaquina ? ganadorActual.innerHTML = "(☞ﾟヮﾟ)☞"
            : ganadorActual.innerHTML = "¯\\_(ツ)_/¯" ;

        } else {
            marcadorJugador > marcadorMaquina
            ? ganadorActual.innerHTML = "←"
            : marcadorJugador < marcadorMaquina ? ganadorActual.innerHTML = "→"
            : ganadorActual.innerHTML = "↔" ;
        }
    }



    let posicionImagen = 0;
    let imagenes = ["Piedra", "Papel", "Tijeras"];
    let jugadorEscogido = selectorJugador.options[selectorJugador.selectedIndex].value;
    let oponenteEscogido = selectorOponente.options[selectorOponente.selectedIndex].value;

    maquinaAreaJuego.style.backgroundImage = `url(img/ppt/${oponenteEscogido}${imagenes[posicionImagen]}.png)`;
    jugadorAreaJuego.style.backgroundImage = `url(img/ppt/${jugadorEscogido}${imagenes[posicionImagen++]}.png)`;

    let eleccionesMaquina = setInterval( () => {
        if (posicionImagen > 2) {
            posicionImagen = 0;
        }

        maquinaAreaJuego.style.backgroundImage = `url(img/ppt/${oponenteEscogido}${imagenes[posicionImagen]}.png)`;
        jugadorAreaJuego.style.backgroundImage = `url(img/ppt/${jugadorEscogido}${imagenes[posicionImagen++]}.png)`;
    }, 100);


    setTimeout("clearInterval(" + eleccionesMaquina + ")", 2000);
    setTimeout(() => {
        maquinaAreaJuego.style.backgroundImage = `url(img/ppt/${oponenteEscogido}${imagenes[resultadoMaquina]}.png)`;
        jugadorAreaJuego.style.backgroundImage = `url(img/ppt/${jugadorEscogido}${imagenes[eleccionHumana]}.png)`;

        if (marcadorEscondido.classList.value == 'marcadorEscondido') {
            marcadorEscondido.classList.remove('marcadorEscondido');
        }

        botonJugar.removeAttribute("disabled", "");

        piedra.removeAttribute("disabled", "");
        papel.removeAttribute("disabled", "");
        tijeras.removeAttribute("disabled", "");

        selectorJugador.removeAttribute("disabled", "");
        selectorOponente.removeAttribute("disabled", "");

        mostrarResultados(resultadoMaquina);
    }, 2000);
});
