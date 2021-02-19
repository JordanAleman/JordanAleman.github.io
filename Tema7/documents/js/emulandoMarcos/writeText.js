const textoMarcos = document.querySelector("#textoMarcos");
const radioButtonsContenedores = document.querySelectorAll("input[name='radioButtonsContenedores']");

const buttonEscribirEnContenedor = document.querySelector("#buttonEscribirEnContenedor");
const buttonReiniciarContenedores = document.querySelector("#buttonReiniciarContenedores");

let contenedoresIframesArray = frames;


buttonEscribirEnContenedor.addEventListener("click", () => {
    if (textoMarcos.value != "") {
        radioButtonsContenedores.forEach((valor, index) => {
            if (valor.checked) {
                contenedoresIframesArray[index].document.querySelector("#contenedorPrincipal").innerHTML = textoMarcos.value;
            }
        });
    }
});


buttonReiniciarContenedores.addEventListener("click", () => {
    document.querySelector("#mostrarNombreIframe").innerHTML = "";

    contenedoresIframesArray[0].document.querySelector("#contenedorReiniciarContenido").innerHTML = 
        `
            <div id="contenedorPrincipal">
                <h2>Contenedor izquierdo</h2>
                <p>
                    Soy un iframe. Mi nombre lo podrás averiguar si le das al botón correspondiente. Es el que está en el otro iframe. Prueba y dale para revelarnos 😁.
                </p>
            </div>
            
            <div class="container-fluid fixed-bottom" id="mostrarNombreIframe"><!-- Generado en js/emulandoMarcos/writeText.js --></div>
        `;
    contenedoresIframesArray[1].document.querySelector("#contenedorReiniciarContenido").innerHTML = 
        `
            <div id="contenedorPrincipal">
                <h2>Contenedor derecho</h2>
            </div>

            <div class="container-fluid fixed-bottom" id="mostrarNombreIframe"><!-- Generado en js/emulandoMarcos/writeText.js --></div>
        `;

    textoMarcos.value = "";
    radioButtonsContenedores[0].checked = true;
});




// contenedoresIframesArray[1].document.querySelector("#buttonNombreContenedores").addEventListener("click")
