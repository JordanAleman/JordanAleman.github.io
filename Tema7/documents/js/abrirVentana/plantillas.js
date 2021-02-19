// Abrir Ventana
const informacionAbrirVentanaCollapse = document.querySelector("#informacionAbrirVentanaCollapse");

informacionAbrirVentanaCollapse.innerHTML = 
    `
        <div class="collapse mt-4 text-dark" id="informacionAbirVentana">
            <div class="card card-body">
                <p>Diseñar el ejemplo siguiente que abrirá la página del tutorial denominada opener.htm en un popup en las siguientes condiciones:</p>
                <ul>
                    <li>Botón <b>ABRIR VENTANA SIN CARACTERÍSTICAS UNA SOLA VEZ</b>.</li>
                    <li>Botón <b>ABRIR VENTANA SIN CARACTERÍSTICAS VARIAS VECES</b>.</li>
                    <li>Botón <b>ABRIR VENTANA CON CARACTERÍSTICAS</b>. Las características solicitadas son ancho 420 px, alto 430 px, sin barra de menú pero con barra de estado y redimensionable.</li>
                    <li>
                        Botón <b>ABRIR VENTANA CON MÁS CARACTERÍSTICAS</b>. Las características solicitadas son ancho 600 px, alto 300 px, colocada en la posición fijada por las coordenadas x=150 px, 
                        y sin especificar, sin barra de menú, sin barra de estado, sin barras de scroll, ni de directorio, ni barra de dirección y sin barra de títulos ni de herramientas.
                    </li>
                    <li>Botón <b>ABRIR VENTANA A PANTALLA COMPLETA</b></li>
                    <li>Botón <b>CERRAR VENTANAS</b>, cerrará las ventanas abiertas</li>
                </ul>
            </div>
        </div>
    `;


const contenedorBotonesAbrirVentana = document.querySelector("#contenedorBotonesAbrirVentana");

const arrayBotonesAbrirVentanas = [
    "ABRIR VENTANA SIN CARACTERÍSTICAS UNA SOLA VEZ",
    "ABRIR VENTANA SIN CARACTERÍSTICAS VARIAS VECES",
    "ABRIR VENTANA CON CARACTERÍSTICAS",
    "ABRIR VENTANA CON MÁS CARACTERÍSTICAS",
    "ABRIR VENTANA A PANTALLA COMPLETA",
    "CERRAR VENTANAS"
];

for (let index = 0; index < arrayBotonesAbrirVentanas.length - 1; index++) {
    contenedorBotonesAbrirVentana.innerHTML +=
        `
            <button type="button" class="btn btn-outline-dark btn-block botonAbrirVentanas">${arrayBotonesAbrirVentanas[index]}</button>
        `;
}

contenedorBotonesAbrirVentana.innerHTML +=
    `
        <button type="button" class="btn btn-danger btn-block botonAbrirVentanas">${arrayBotonesAbrirVentanas[arrayBotonesAbrirVentanas.length - 1]}</button>
    `;
