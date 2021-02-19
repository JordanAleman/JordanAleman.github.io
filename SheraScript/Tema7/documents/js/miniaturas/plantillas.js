// Miniaturas
const informacionMiniaturasCollapse = document.querySelector("#informacionMiniaturasCollapse");

informacionMiniaturasCollapse.innerHTML =
    `
        <div class="collapse mt-4 text-dark" id="informacionMiniaturas">
            <div class="card card-body">
                <p>Diseñar una web con imágenes de baja resolución de cuadros de pintores grancanarios.</p>
                <p>
                    Al pulsar sobre uno de ellos se llamará a la página Miniaturas2.htm pasándole el nombre del archivo 
                    de alta resolución del cuadro pulsado que se visualizará en la segunda página con el formato mostrado en la figura.
                </p>
            </div>
        </div>
    `;
