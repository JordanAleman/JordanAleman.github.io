// Clase persona
function persona(dni, nombre, apellidos, direccion) {
    this.dni = dni;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.direccion = direccion;

    this.toString = function () {return (`${this.nombre} ${this.apellidos}`)};
    this.datosCompletos = function () {return (`<b>DNI:</b> ${this.dni} <br><b>Nombre:</b> ${this.nombre} <br><b>Apellidos:</b> ${this.apellidos}`)};
}

// Clase automovil
function automovil(matricula, marca, modelo, propietario) {
    this.matricula = matricula;
    this.marca = marca;
    this.modelo = modelo;
    this.propietario = propietario;

    this.estado = (function () {return (propietario == false)?"disponible":"vendido"})();
    this.obtenerPropietario = function () {return (this.propietario != false)?this.propietario.datosCompletos():"No tiene propietario"};
}


// Clase heredada de automóvil: Moto
function moto(matricula, marca, modelo, propietario, ruedas, tipo) {
    automovil.apply(this,arguments);
    this.ruedas = ruedas;
    this.tipo = tipo;
}

// Clase heredada de automóvil: Coche
function coche(matricula, marca, modelo, propietario, puertas, color) {
    automovil.apply(this,arguments);
    this.puertas = puertas;
    this.color = color;
}
