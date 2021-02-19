const verPalabraSinFormatoPassword = document.querySelector('#verPalabraSinFormatoPassword');
const inputPalabra = document.querySelector("#palabraAhorcado");
const controlInputPalabra = document.querySelector("#controlInputPalabra");

const contenedorComienzo = document.querySelector('#contenedorComienzo');
const contenedorJuego = document.querySelector('#contenedorJuego');

const descripcionJuegoAhorcado = document.querySelector("#descripcionJuegoAhorcado");

const jugarAhorcado = document.querySelector("#botonJugarAhorcado");
const botonReiniciar = document.querySelector("#botonReiniciar");

const selectorVerdugo = document.querySelector("#selectorVerdugo");
const cartelAhorcado = document.querySelector("#cartelAhorcado");
const contenedorDibujos = document.querySelector("#contenedorDibujos");

verPalabraSinFormatoPassword.addEventListener('click', () => {
    (verPalabraSinFormatoPassword.checked == true)
    ? inputPalabra.type = "text"
    : inputPalabra.type = "password";
});


descripcionJuegoAhorcado.innerHTML = 
    `
        <div class="card card-body">
            <a href="../index.html"><button class="btn btn-primary botonVolverInicio" type="button">Volver</button><a>
            <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Juego para realizar entre dos usuarios. El primer usuario escribirá la palabra a adivinar en un control tipo password <i>(input type="password")</i>. <br> 
                Cuando dicho control pierda el foco, el programa visualizará una letra de ayuda escogida aleatoriamente entre las letras de la palabra elegida. <br><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Si la letra se repite se presentará tantas veces como esté presente. El resto de las letras se marcará con guiones bajos, por ejemplo <b>_A_A__A</b>, 
                suponiendo que se haya escrito <b>PALABRA</b> y que haya salido elegida la letra <b>A</b>. <br>
                A continuación el otro usuario comenzará su elección en otro control de edición <i>(input type="text")</i> que solo acepte una letra. <br><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dicha letra se presentará en mayúsculas aunque haya sido tecleada en minúsculas. <br>
                El programa irá sustituyendo los guiones por las letras acertadas o bien irá visualizando las correspondientes imágenes de error hasta que se acierte la palabra o se completen los errores admitidos.
            </p>
        </div>
    `;


// Campo donde el usuario introducirá una palabra y se generará la zona del juego

jugarAhorcado.addEventListener('click', () => {
    // Cambiamos la pantalla de introducir palabra por la pantalla de adivinarla.

    if (inputPalabra.value == "") {
        controlInputPalabra.innerHTML = "Tiene que introducir algo para continuar 🤗"
    } else {
        contenedorComienzo.classList.remove("aparecer")
        contenedorJuego.classList.remove("desaparecer");

        setTimeout(() => {
            contenedorComienzo.style.display = "none";
            contenedorJuego.style.display = "inherit";
            contenedorJuego.classList.add("aparecer");
        }, 900);
        contenedorComienzo.classList.add("desaparecer");
    }
    
});


// Generador de boton de letras para jugar al Ahorcado
const contenedorLetras = document.querySelector('#contenedorLetras');
let abecedario = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

abecedario.forEach((valor, index) => {
    contenedorLetras.innerHTML += 
        `
        <div class="col-xs-2 col-sm-2 col-md-1 col-lg-1 contenedorBotonLetra">
            <button type="button" class="btn botonLetra" name="botonLetra" value=${index}>${valor}</button>
        </div>
        `;
});


// Trabajaremos con esta variable en js/jsGallows.js
let verdugoEscogido = selectorVerdugo.options[selectorVerdugo.selectedIndex].value;
contenedorDibujos.style.backgroundImage =  `url(img/${verdugoEscogido}6.png)`; 

selectorVerdugo.addEventListener('change', () => {
    verdugoEscogido = selectorVerdugo.options[selectorVerdugo.selectedIndex].value
    contenedorDibujos.style.backgroundImage =  `url(img/${verdugoEscogido}6.png)`;

    cartelAhorcado.src = `img/${verdugoEscogido}Logo.png`;

    (verdugoEscogido == "Tradicional") 
    ? cartelAhorcado.classList.remove("noTradicional")
    : cartelAhorcado.classList.add("noTradicional");
});


botonReiniciar.addEventListener('click', () => {
    contenedorComienzo.classList.remove("desaparecer")
    contenedorJuego.classList.remove("aparecer");
    
    setTimeout(() => {
        contenedorComienzo.style.display = "inherit";
        contenedorJuego.style.display = "none";
        contenedorComienzo.classList.add("aparecer");
        controlInputPalabra.innerHTML = "";
        inputPalabra.value = "";

        botonesLetras.forEach((botonLetra) => {
            botonLetra.removeAttribute("disabled", "")
            botonLetra.style.backgroundColor = "#06DCB8";
        });

        contenedorDibujos.style.backgroundImage =  `url(img/${verdugoEscogido}6.png)`; 

        contadorIntentos.innerHTML = "Intentos restantes: 6";
        contadorIntentos.style.backgroundColor = "#0476AA";

        intentosRestantes = 6;
        controlTamanioPalabraAhorcado = 0;

        botonPista.style.display = "unset";
    }, 900);

    contenedorJuego.classList.add("desaparecer");
    

});




