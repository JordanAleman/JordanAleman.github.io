const grande = document.querySelector("#grande");
const mediana = document.querySelector("#mediana");
const pequenia = document.querySelector("#pequenia");

const botonesTamanios = document.querySelectorAll(".botonTamanio");
const botonesIngredientes = document.querySelectorAll(".botonIngrediente");

grande.addEventListener("click", () => {
    if (grande.classList.contains("tamanio")) {
        grande.classList.remove("tamanio");
        grande.classList.add("tamanioSeleccionado");
    } else {
        grande.classList.remove("tamanioSeleccionado");
        grande.classList.add("tamanio");
    }

    cambioSeleccionTamanios(mediana);
    cambioSeleccionTamanios(pequenia);
});

mediana.addEventListener("click", () => {
    if (mediana.classList.contains("tamanio")) {
        mediana.classList.remove("tamanio");
        mediana.classList.add("tamanioSeleccionado");
    } else {
        mediana.classList.remove("tamanioSeleccionado");
        mediana.classList.add("tamanio");
    }

    cambioSeleccionTamanios(grande);
    cambioSeleccionTamanios(pequenia);
});

pequenia.addEventListener("click", () => {
    if (pequenia.classList.contains("tamanio")) {
        pequenia.classList.remove("tamanio");
        pequenia.classList.add("tamanioSeleccionado");
    } else {
        pequenia.classList.remove("tamanioSeleccionado");
        pequenia.classList.add("tamanio");
    }

    cambioSeleccionTamanios(grande);
    cambioSeleccionTamanios(mediana);
});


function cambioSeleccionTamanios(boton) {
    if (boton.classList.contains("tamanioSeleccionado")) {
        boton.classList.remove("tamanioSeleccionado");
        boton.classList.add("tamanio");
    }
}


botonesIngredientes.forEach(boton => {
    boton.addEventListener("click", () => {
        if (boton.classList.contains("eleccion")) {
            boton.classList.remove("eleccion");
            boton.classList.add("seleccionada");
        } else {
            boton.classList.remove("seleccionada");
            boton.classList.add("eleccion");
        }
    });
});

