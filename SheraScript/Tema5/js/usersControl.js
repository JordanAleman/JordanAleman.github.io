function controlUsuario(inputsText, persona) {
    const modalModificarUsuario = document.querySelector("#modalModificarUsuario");
    const confirmarModificarDatosUsuariosForm1 = document.querySelector("#confirmarModificarDatosUsuariosForm1");
    const cancelarModalModificarDatos = document.querySelector("#cancelarModalModificarDatos");


    for (let index = 0; index < selectMuestraUsuarios.options.length; index++) {
        if (selectMuestraUsuarios.options[index].text == inputsText) {
            
            
            // Al repetirse algún usuario activaremos el modal que nos permite modificar datos del usuario ya registrado.
            botonAnadir.setAttribute("data-toggle", "modal");
            botonAnadir.setAttribute("data-target", "#modalModificarDatos");

            modalModificarUsuario.innerHTML = "¿Está seguro o segura de modificar los datos del usuario?";
            confirmarModificarDatosUsuariosForm1.style.display = "unset";
            cancelarModalModificarDatos.innerHTML = "Cancelar";

            
            confirmarModificarDatosUsuariosForm1.addEventListener('click', () => {
                arrayDatosUsuarios[index] = persona;
                confirmarModificarDatosUsuariosForm1.setAttribute("data-dismiss", "modal");
            });

            return true;

        } else if ((arrayDatosUsuarios[index].correo == email.value && arrayDatosUsuarios[index].nombre != nombre.value) || (arrayDatosUsuarios[index].correo == email.value && arrayDatosUsuarios[index].apellidos != apellidos.value)){
            botonAnadir.setAttribute("data-toggle", "modal");
            botonAnadir.setAttribute("data-target", "#modalModificarDatos");

            modalModificarUsuario.innerHTML = "Esta cuenta de correo ya está siendo usada.";
            confirmarModificarDatosUsuariosForm1.style.display = "none";
            cancelarModalModificarDatos.innerHTML = "Aceptar";

            return true;
        }
        
    }

    return false;
}