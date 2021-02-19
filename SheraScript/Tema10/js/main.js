// Ejercicio 1
const imagenesPosicionamiento = document.querySelectorAll(".contenedorImagenesEjercicio1 img");

let dimensionesVentana = 
    `
        height=${screen.availHeight / 1.3},
        width=${screen.availWidth / 1.3}
    `

imagenesPosicionamiento.forEach((valor) => valor.addEventListener("click", () => window.open(`documents/imagenesCompletas.html?imagen=${valor.src}`, "imagenCompleta", dimensionesVentana)));


// Ejercicio 2
const botonActivarEjercicio2 = document.querySelector("#botonActivarEjercicio2");
const botonDesactivarEjercicio2 = document.querySelector("#botonDesactivarEjercicio2");

const efectoMarquesine = document.querySelector("#efectoMarquesine");
const pEjercicio2 = document.querySelector("#pEjercicio2");
const productosEjercicio2 = document.querySelectorAll(".productosEjercicio2 p");

let marquesineActivo = false;

botonActivarEjercicio2.addEventListener("click", () => {
    botonActivarEjercicio2.setAttribute("disabled", "");
    botonActivarEjercicio2.classList.remove("btn-outline-primary");
    botonActivarEjercicio2.classList.add("btn-primary");

    botonDesactivarEjercicio2.removeAttribute("disabled", "");
    botonDesactivarEjercicio2.classList.remove("btn-secondary");
    botonDesactivarEjercicio2.classList.add("btn-outline-secondary");

    pEjercicio2.classList.add("marquesine");
    marquesineActivo = true;
});

botonDesactivarEjercicio2.addEventListener("click", () => {
    botonDesactivarEjercicio2.setAttribute("disabled", "");
    botonDesactivarEjercicio2.classList.remove("btn-outline-secondary");
    botonDesactivarEjercicio2.classList.add("btn-secondary");

    botonActivarEjercicio2.removeAttribute("disabled", "");
    botonActivarEjercicio2.classList.remove("btn-primary");
    botonActivarEjercicio2.classList.add("btn-outline-primary");

    pEjercicio2.classList.remove("marquesine");
    marquesineActivo = false;
});


let textoAlternativo = [
    "Este producto es el mejor de la línea",
    "Este producto es de la mejor calidad",
    "Este producto es barato, barato, barato"
];

productosEjercicio2.forEach((texto, index) => {
    texto.addEventListener("mouseover", () => {
        if (marquesineActivo) {
            efectoMarquesine.classList.add("aparecer");
            setTimeout(() => efectoMarquesine.classList.remove("aparecer"), 500);
    
            pEjercicio2.innerHTML = `${textoAlternativo[index]}`;
        }
    });

    texto.addEventListener("mouseout", () => {
        if (marquesineActivo) {
            efectoMarquesine.classList.add("aparecer");
            setTimeout(() => efectoMarquesine.classList.remove("aparecer"), 500);
            pEjercicio2.innerHTML = `¡Queremos que compre!`;  
        }     
    });

});



// Ejercicio 3
const botonActivarEjercicio3 = document.querySelector("#botonActivarEjercicio3");
const botonReiniciarEjercicio3 = document.querySelector("#botonReiniciarEjercicio3");

const efectoMovimiento = document.querySelector("#efectoMovimiento");

const botonMasVelocidadEjercicio3 = document.querySelector("#botonMasVelocidadEjercicio3");
const botonMenosVelocidadEjercicio3 = document.querySelector("#botonMenosVelocidadEjercicio3");

const botonesVelocidad = [botonMasVelocidadEjercicio3, botonMenosVelocidadEjercicio3];


botonActivarEjercicio3.addEventListener("click", () => {
    botonActivarEjercicio3.setAttribute("disabled", "");
    botonActivarEjercicio3.classList.remove("btn-outline-primary");
    botonActivarEjercicio3.classList.add("btn-primary");

    botonReiniciarEjercicio3.removeAttribute("disabled", "");
    botonReiniciarEjercicio3.classList.remove("btn-secondary");
    botonReiniciarEjercicio3.classList.add("btn-outline-secondary");

    botonesVelocidad.forEach(boton => boton.removeAttribute("disabled", ""));

    efectoMovimiento.classList.add("movimiento");
});

botonReiniciarEjercicio3.addEventListener("click", () => {
    botonReiniciarEjercicio3.setAttribute("disabled", "");
    botonReiniciarEjercicio3.classList.remove("btn-outline-secondary");
    botonReiniciarEjercicio3.classList.add("btn-secondary");

    botonActivarEjercicio3.removeAttribute("disabled", "");
    botonActivarEjercicio3.classList.remove("btn-primary");
    botonActivarEjercicio3.classList.add("btn-outline-primary");

    botonesVelocidad.forEach(boton => boton.setAttribute("disabled", ""));

    efectoMovimiento.classList.remove("movimiento");
});


/* Botones para regular la velocidad de movimiento de la imagen */
let velocidadMovimiento = 8;

botonMasVelocidadEjercicio3.addEventListener("click", () => {
    if (velocidadMovimiento > 1) {
        velocidadMovimiento--;
        console.log('%c⧭', 'color: #43c25e', velocidadMovimiento);
    }

    if (velocidadMovimiento == 1) {
        botonMasVelocidadEjercicio3.setAttribute("disabled", "");
        botonMasVelocidadEjercicio3.classList.remove("btn-outline-success");
        botonMasVelocidadEjercicio3.classList.add("btn-success");
    }

    if (botonMenosVelocidadEjercicio3.disabled) {
        botonMenosVelocidadEjercicio3.removeAttribute("disabled", "");
        botonMenosVelocidadEjercicio3.classList.remove("btn-danger");
        botonMenosVelocidadEjercicio3.classList.add("btn-outline-danger");
    }

    efectoMovimiento.style.animationDuration = `${velocidadMovimiento}s`;

});

botonMenosVelocidadEjercicio3.addEventListener("click", () => {
    if (velocidadMovimiento < 10) {
        velocidadMovimiento++;
        console.log('%c⧭', 'color: #f14713', velocidadMovimiento);
    }

    if (velocidadMovimiento == 10) {
        botonMenosVelocidadEjercicio3.setAttribute("disabled", "");
        botonMenosVelocidadEjercicio3.classList.remove("btn-outline-danger");
        botonMenosVelocidadEjercicio3.classList.add("btn-danger");
    }

    if (botonMasVelocidadEjercicio3.disabled) {
        botonMasVelocidadEjercicio3.removeAttribute("disabled", "");
        botonMasVelocidadEjercicio3.classList.remove("btn-success");
        botonMasVelocidadEjercicio3.classList.add("btn-outline-success");
    }

    efectoMovimiento.style.animationDuration = `${velocidadMovimiento}s`;

});