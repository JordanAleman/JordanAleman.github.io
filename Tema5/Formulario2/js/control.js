function incorrecto(input) {
    controlErrores = true;
    input.style.borderColor = "red";
}

function fechaCorrecta(fecha) {
    const fechaValida = /([\d]{2}\/){2}[\d]{4}/;

    if (!(fecha.value).match(fechaValida)) {
        incorrecto(fechaPermiso);
    }

    let anioFechaPermiso = fecha.value.substring(fecha.value.length, fecha.value.length - 4);
    console.log('%c⧭ Año de permiso: ', 'color: #aa00ff', anioFechaPermiso);
    let mesFechaPermiso = Number(fecha.value.substring(3,5));
    console.log('%c⧭ Mes de permiso: ', 'color: #aa00ff', mesFechaPermiso);
    let diaFechaPermiso = Number(fecha.value.substring(0,2));
    console.log('%c⧭ Día de permiso: ', 'color: #aa00ff', diaFechaPermiso);

    let fechaPermisoExistente = new Date(anioFechaPermiso, mesFechaPermiso, diaFechaPermiso);
    console.log('\n%c⧭ Año comprobación', 'color: #0088cc', fechaPermisoExistente.getFullYear());
    console.log('%c⧭ Mes comprobación', 'color: #0088cc', fechaPermisoExistente.getMonth());
    console.log('%c⧭ Día comprobación', 'color: #0088cc', fechaPermisoExistente.getDate());


    if (anioFechaPermiso != fechaPermisoExistente.getFullYear() || mesFechaPermiso != fechaPermisoExistente.getMonth() || diaFechaPermiso != fechaPermisoExistente.getDate()) {
        incorrecto(fechaPermiso);
        mensajeFechaCorrecta.innerHTML = "Introduzca una fecha existente";
    } else {
        console.log('\n%c⧭ Fecha correcta: ', 'color: #0088cc', fechaPermisoExistente);
    }
}