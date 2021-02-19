const nExpediente = document.querySelector("#nExpediente");
const nombre = document.querySelector("#nombre");
const apellido1 = document.querySelector("#apellido1");
const apellido2 = document.querySelector("#apellido2");
const edad = document.querySelector("#edad");
const matricula = document.querySelector("#matricula");
const nTarjeta = document.querySelector("#nTarjeta");
const selectTarjeta = document.querySelector("#selectTarjeta");
const importe = document.querySelector("#importe");
const fechaPermiso = document.querySelector("#fechaPermiso");
const mesExpiracion = document.querySelector("#mesExpiracion");
const anioExpiracion = document.querySelector("#anioExpiracion");

const botonValidar = document.querySelector("#botonValidar");
const inputsText = document.getElementsByName("inputText");

const mensajeFechaCorrecta = document.querySelector("#fechaCorrecta");


// En el caso de que alguno campo hubiera estado mal y se hubiera cambiado los bordes de color para indicar
// que están mal, al hacer click sobre uno de esos campos que su borde vuelva a tomar el valor por defecto.
inputsText.forEach((valor) => valor.addEventListener("click", () => valor.style.borderColor = "#ced4da"))

// Variable que confirmará si todos los datos del formulario son correctos o no.
let controlErrores;

let nombresApellidos = [nombre, apellido1, apellido2];

const nExpedienteValido = /^[\d]{10}$/;
const nombreApellidosValidos = /^[a-zA-ZÀ-ÄÉ-ÏÒ-ÖÚ-Üà-äè-ïò-öù-ü\u00f1\u00d1]+$/;
const matriculaValida = /^[\d]{4}[BCDFGHJKLMNPQRSTVWXYZ][BCDFGHJKLMNPQRSTVWXYZ][BCDFGHJKLMNPORSTVWXYZ]+$/;
const importeValido = /^[\d]+(\.[\d]+){0,1}$/;

const genericoValido = /^[\d]{16}$/;
const americanExpressValido = /^[\d]{15}$/;
const dinnersClubValido = /^[\d]{14}$/;
const mastercardValido = /^5[\d]{15}$/;
const visaValido = /^4[\d]{15}$/;

let controlTarjetas = [genericoValido, americanExpressValido, dinnersClubValido, mastercardValido, visaValido];


botonValidar.addEventListener("click", () => {
    controlErrores = false;

    botonValidar.removeAttribute("data-toggle", "modal");
    botonValidar.removeAttribute("data-target", "#modalDeValidacion");

    mensajeFechaCorrecta.innerHTML = "";


    if (!(nExpediente.value).match(nExpedienteValido)) {
        incorrecto(nExpediente);
    }


    nombresApellidos.forEach((valor) => {
        if (!(valor.value).match(nombreApellidosValidos)) {
            incorrecto(valor);
        }
    })


    if (edad.value < 18 || edad.value > 120) {
        incorrecto(edad);
    }


    fechaCorrecta(fechaPermiso);
    
    if (!(matricula.value).match(matriculaValida)) {
        incorrecto(matricula);
    }

    if (!(importe.value).match(importeValido)) {
        incorrecto(importe);
    }

    if (mesExpiracion < 1 || mesExpiracion > 12) {
        incorrecto(mesExpiracion);
    }

    if (anioExpiracion < 2001 || anioExpiracion > 2100) {
        incorrecto(anioExpiracion);
    }

    console.log('\n%c⧭ Tarjeta seleccionada', 'color: #f2ceb6', selectTarjeta.options[selectTarjeta.selectedIndex].text);
    if (!(nTarjeta.value).match(controlTarjetas[selectTarjeta.selectedIndex])) {
        incorrecto(nTarjeta);
    }




    if (!controlErrores) {
        console.log("entro")
        botonValidar.setAttribute("data-toggle", "modal");
        botonValidar.setAttribute("data-target", "#modalDatos")

    } else {

    }
});


