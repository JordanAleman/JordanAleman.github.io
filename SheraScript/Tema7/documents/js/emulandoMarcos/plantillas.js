// Emulando marcos
const informacionEmulandoMarcosCollapse = document.querySelector("#informacionEmulandoMarcosCollapse");

informacionEmulandoMarcosCollapse.innerHTML =
    `
        <div class="collapse mt-4 text-dark" id="informacionEmulandoMarcos">
            <div class="card card-body">
                <p>
                    Diseñar una página con tres contenedores de acuerdo al diseño de la figura, con el contenedor izquierdo igual que el derecho. 
                    El botón <b>ESCRIBIR</b> visualizará en el contenedor señalado en el grupo de radiobotones <b><i>(input type=”radio”)</i></b>
                    el texto escrito en el control de edición <b><i>(input type=”text”)</i></b>.
                </p>
                <p>
                    El botón del contenedor derecho <b>COMO SE LLAMAN LOS MARCOS</b> visualizará en una ventana alert los nombres de los tres contenedores.
                </p>
            </div>
        </div>
    `;
