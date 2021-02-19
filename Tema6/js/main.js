// Ejercicio 1
const selectVideoclub = document.querySelector("#selectVideoclub");
const contenedorResultado = document.querySelector("#contenedorResultado");

let selectGenero;

const textareaGenero = document.querySelector("#textareaGenero");

let arrayVideos = ['Género del vídeo', 'Humor', 'Drama', 'Ficción', 'Otros'];
let arrayDiscos = ['Género del disco', 'Pop', 'Rock', 'Latino', 'Otros'];
let arrayJuegos = ['Género del juego', 'Simulador', 'Rol', 'Medieval', 'Otros'];

let arrayOpciones = [arrayVideos, arrayDiscos, arrayJuegos];

selectVideoclub.addEventListener('change', () => {
    let opcionSeleccionada = selectVideoclub.options[selectVideoclub.selectedIndex].value;

    let opciones = "";
    for (let index = 1; index < arrayOpciones[opcionSeleccionada].length; index++) {
        opciones += 
        `
            <option value="${index - 1}">${arrayOpciones[opcionSeleccionada][index]}</option>
        `;
        
    }
    
    contenedorResultado.innerHTML = 
    `
        <label for="selectGenero" class="col-sm-4 col-form-label">${arrayOpciones[opcionSeleccionada][0]}</label>
        <div class="col-sm-8">
            <select class="custom-select mr-sm-2" id="selectGenero">
                <option disabled selected>Escoja un género...</option>
                ${opciones}
            </select>
        </div>
    `;

    selectGenero = document.querySelector("#selectGenero");
    mostrarTextoGenero(selectGenero);
});   
 
let mostrarTextoGenero = (selectGenero) => {
    selectGenero.addEventListener('change', () => {

    textareaGenero.innerHTML = 
    `
        <label for="muestraTextoGenero" class="col-sm-4 col-form-label">Descripción del género</label>
        <div class="col-sm-8">
            <textarea class="form-control" id="muestraTextoGenero" rows="1">Texto de ${selectVideoclub.options[selectVideoclub.selectedIndex].text} ༼ つ ◕_◕ ༽つ ${selectGenero.options[selectGenero.selectedIndex].text}</textarea>
        </div>
    `
    })
};



// Ejercicio 2
const contenidoBotonInaccesible = document.querySelector("#contenido-botonInaccesible");
const botonInaccesible = document.querySelector("#botonInaccesible");
const atrapado = document.querySelector("#atrapado");

botonInaccesible.addEventListener("mouseover", () => {
    function controlLimite(caja, boton) {
        let random =  Math.random() * caja, result;
        (random > caja - boton) ? result = caja - boton : result = random;
        return result;
    };

    let topRandom = controlLimite(contenidoBotonInaccesible.getBoundingClientRect().height, botonInaccesible.getBoundingClientRect().height);
    let leftRandom = controlLimite(contenidoBotonInaccesible.getBoundingClientRect().width, botonInaccesible.getBoundingClientRect().width);

    botonInaccesible.style.top = `${topRandom}px`;
    botonInaccesible.style.left = `${leftRandom}px`;

    botonInaccesible.src = `./img/Woman${Math.round((Math.random() * 5) + 1)}.png`;

});

botonInaccesible.addEventListener("click", () => {
    atrapado.innerHTML = mensajeAtrapado;
    botonInaccesible.src = `./img/WomanCatched.png`;
});



// Ejercicio 3
const usarBotonesHistoria = document.getElementsByName("botonHistoria");
const cajasHistoria = document.querySelectorAll("[name='cajasHistoria']");


usarBotonesHistoria.forEach((valor, index) => {
    function controlColor(color) {
        if (valor.style.backgroundColor != "red") {
            valor.style.backgroundColor = color;
        }
    }

    valor.addEventListener('mouseover', () => controlColor("skyblue"));
    valor.addEventListener('click', () => controlColor("orchid"));

    valor.addEventListener('dblclick', () => {
        valor.style.backgroundColor = "red";

        cajasHistoria[index].classList.add("aparecer");
        cajasHistoria[index].innerHTML = arrayHistoria[index];
    });

})

