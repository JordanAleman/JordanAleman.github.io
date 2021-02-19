// Datos del formulario
const apellidos = document.querySelector("#apellidos");
const nombre = document.querySelector("#nombre");

const sexoRadio = document.getElementsByName("sexoRadio");
const email = document.querySelector("#email");
const emailCorrecto = document.querySelector("#emailCorrecto");

const inputsText = document.getElementsByName("inputText");

const selectLlegada = document.querySelector("#selectLlegada");
const checkboxTemas = document.getElementsByName("checkboxTemas");

// Botones
const botonVisualizarDatos = document.querySelector("#botonVisualizarDatos");
const botonAnadir = document.querySelector("#botonAnadir");
const botonEliminar = document.querySelector("#botonEliminar");

const selectMuestraUsuarios = document.querySelector("#selectMuestraUsuarios");

// Estos datos se encuentran en los modales creados en las plantillas de js/plantillas.js
const modalBodyDatosUsuarios = document.querySelector("#modalBodyDatosUsuarios");
const confirmarEliminarDatosUsuarios = document.querySelector("#confirmarEliminarDatosUsuarios");


/* 
    Almacenaremos todos los datos que vayamos introduciendo de los usuarios en un array para poder
    visualizarnos más adelante a medida que sea necesario.
*/
let arrayDatosUsuarios = [];


botonVisualizarDatos.addEventListener("click", () => {
    if (selectMuestraUsuarios.options.length == 0) {
        modalBodyDatosUsuarios.innerHTML = "No hay ningún dato de usuario que mostrar";
    } else {
        let usuario = arrayDatosUsuarios[selectMuestraUsuarios.selectedIndex];
        modalBodyDatosUsuarios.innerHTML = 
            `
                <ul>
                    <li><b>Nombre: </b>${usuario.nombre}</li>
                    <li><b>Apellidos: </b>${usuario.apellidos}</li>
                    <li><b>Sexo: </b>${usuario.sexo}</li>
                    <li><b>Email: </b>${usuario.correo}</li>
                    <li><b>¿Cómo llegó hasta aquí? </b>${usuario.llegada}</li>
                    <li><b>Temas: </b>${usuario.temas}</li>
                <ul>
            `;
    }
});

/* 
    Pondremos todos los inputs de tipo text con background color a blanco cada vez que le demos click porque podrían estar de otro color en
    el caso de que hubiera estado algo mal o incompleto.
*/   
inputsText.forEach((valor) => valor.addEventListener("click", () => valor.style.backgroundColor = "white")); 
// Este array almacenará datos de usuarios tan solo para comprobar si un usuario ya ha sido registrado o se trata de un nuevo usuario.
// Si se encuentra en el array se actualizarán los datos del usuario.
let arrayUsuariosRegistrados = [];

botonAnadir.addEventListener("click", () => {
    const emailMatch = /^([a-zA-Z\d]+([\.]{0,1}|[\_]{0,1}))+[a-zA-Z\d]+@([\a-zA-Z\d]+([\.]{0,1}|[\_]{0,1}))+[a-zA-Z\d]+\.[a-zA-Z]{2,4}$/

    if (apellidos.value != "" && nombre.value != "" && email.value != "") {
        if ((email.value).match(emailMatch)) {
            botonAnadir.removeAttribute("data-toggle", "modal");
            botonAnadir.removeAttribute("data-target", "#modalModificarDatos");

            let optionSexRadioChecked = ""; 
            sexoRadio.forEach((valor) => {
                if (valor.checked) {
                    optionSexRadioChecked = valor.value;
                }
            });


            let optionInformationChecked = []; 
            checkboxTemas.forEach((valor) => {
                if (valor.checked) {
                    optionInformationChecked[optionInformationChecked.length] = valor.value;
                }
            });

            if (optionInformationChecked.length == 0) {
                optionInformationChecked[optionInformationChecked.length] = "No se ha escogido ningún tema";
            }

            // Esta variable almacena todos los datos a recoger del formulario para tratar con ellos.
            let persona = { 
                apellidos: apellidos.value,
                nombre: nombre.value,
                sexo: optionSexRadioChecked,
                correo: email.value,
                llegada: selectLlegada.options[selectLlegada.selectedIndex].text,
                temas: optionInformationChecked.join(" - ")
            }

            
            // Esta variable almacena solo estos tres datos que son los que mostraremos como texto de las opciones del select de usuarios.
            let datosInputsText = `${apellidos.value} ${nombre.value} ${email.value}`;
            let controlUsuarioRepetido = controlUsuario(datosInputsText, persona); // Esta función se encuentra en js/usersControl.js

            /*
                En el caso de que no haya ningún usuario repetido, añadirá la información del nuevo usuario al array y se creará una option en el select.
            */
            if (!controlUsuarioRepetido) {
                arrayDatosUsuarios[arrayDatosUsuarios.length] = persona;
                selectMuestraUsuarios.innerHTML += `<option>${datosInputsText}</option>`;
                selectMuestraUsuarios.setAttribute("size", selectMuestraUsuarios.options.length);
                inputsText.forEach((valor) => valor.value = "");
            }

            emailCorrecto.innerHTML = "";
            email.style.borderColor = "#ced4da";

        } else {
            emailCorrecto.innerHTML = "Email incorrecto.";
            email.style.borderColor = "red";
        } 

    } else {
        inputsText.forEach((valor) => {
            if (valor.value == "") {
                console.log(valor.value);
                valor.style.backgroundColor = "#ff6666";
            }
        });
    }
});



botonEliminar.addEventListener("click", () => {
    if (selectMuestraUsuarios.options.length == 0 || selectMuestraUsuarios.selectedIndex == -1) {
        document.querySelector("#modalEliminarUsuario").innerHTML = "No hay ningún dato de usuario que eliminar";
        document.querySelector("#cancelarModalEliminarDatos").innerHTML = "Aceptar";
        confirmarEliminarDatosUsuarios.style.display = "none";

    } else {
        document.querySelector("#modalEliminarUsuario").innerHTML = "¿Está seguro o segura de eliminar los datos del usuario?";
        document.querySelector("#cancelarModalEliminarDatos").innerHTML = "Cancelar";
        confirmarEliminarDatosUsuarios.style.display = "unset";
    }
});


confirmarEliminarDatosUsuarios.addEventListener("click", () => {
    let opcionSeleccionada = selectMuestraUsuarios.selectedIndex;

    // Eliminamos los datos del usuario que hemos eliminado en el array que recoge los datos de cada usuario
    arrayDatosUsuarios.splice(opcionSeleccionada, 1);

    selectMuestraUsuarios.remove(opcionSeleccionada);
    selectMuestraUsuarios.setAttribute("size", selectMuestraUsuarios.options.length);
    confirmarEliminarDatosUsuarios.setAttribute("data-dismiss", "modal");
    
});
