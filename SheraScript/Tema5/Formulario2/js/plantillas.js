const informacionJumbotron = document.querySelector("#visualizarInformacionJumbotron");

informacionJumbotron.innerHTML = 
    `
        <div class="collapse" id="mostrarInformacionJumbotron">
            <div class="card card-body">
                <p style="font-size: smaller; padding: 10px;">
                    Se diseñará un formulario como el de la imagen y al pulsarse el botón VALIDA FORMULARIO se realizarán las siguientes comprobaciones:
                </p>
                <ul>
                    <li>Ningún cuadro de texto (input type=”text”) quedará vacío</li>
                    <li>En nombre y apellidos solo se admitirán caracteres alfabéticos tanto en mayúsculas como en minúsculas</li>
                    <li>El expediente será un número natural en el rango 340000000000 a 349999999999</li>
                    <li>La edad otro número natural en el rango 18 a 120</li>
                    <li>Fecha de permiso una fecha válida sin especificar rango</li>
                    <li>La matrícula responderá al patrón "NNNN[BCDFGHJKLMNPQRSTVWXYZ][BCDFGHJKLMNPQRSTVWXYZ] [BCDFGHJKLMNPORSTVWXYZ]"</li>
                    <li>Importe entero o real sin signo</li>
                    <li>Mes de expiración entero en el rango 1 a 12</li>
                    <li>Año de expiración entero en el rango 2001 a 2100</li>
                    <li>Se realizará la validación de la tarjeta para las opciones a) Genérica. b) American Express. c) Diner’s Club. e) Master Card y f) Visa.</li>
                </ul>
            </div>
        </div>
    `;



const visualizarResultadoValidacion = document.querySelector("#visualizarResultadoValidacion");

visualizarResultadoValidacion.innerHTML = 
    `
        <div class="modal fade" id="modalDatos" tabindex="-1" role="dialog" aria-labelledby="modalDeValidacion" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalDeValidacion">Validación de formulario</h5>
                    </div>
                    <div class="modal-body" id="modalBodyDatosUsuarios">
                        ¡Correcto!
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    `;
