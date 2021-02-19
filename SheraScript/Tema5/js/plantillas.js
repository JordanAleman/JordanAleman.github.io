// Modal de visualización de datos
const visualizarModalDatos = document.querySelector("#visualizarModalDatos");

visualizarModalDatos.innerHTML = 
    `
        <div class="modal fade" id="modalDatos" tabindex="-1" role="dialog" aria-labelledby="modalDeDatosDeUsuarios" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalDeDatosDeUsuarios">Datos de usuarios</h5>
                    </div>
                    <div class="modal-body" id="modalBodyDatosUsuarios">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    `;

const visualizarModalModificarDatos = document.querySelector("#visualizarModalModificarDatos");

visualizarModalModificarDatos.innerHTML = 
    `
        <div class="modal fade" id="modalModificarDatos" tabindex="-1" role="dialog" aria-labelledby="modalDeDatosDeUsuarios" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalDeDatosDeUsuarios">Modificar datos del usuario</h5>
                    </div>
                    <div class="modal-body" id="modalModificarUsuario">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success" id="confirmarModificarDatosUsuariosForm1">Aceptar</button>
                        <button type="button" class="btn btn-danger" id="cancelarModalModificarDatos" data-dismiss="modal">Cancelar</button>                   
                    </div>
                </div>
            </div>
        </div>
    `;



const visualizarModaEliminarDatos = document.querySelector("#visualizarModaEliminarDatos");

visualizarModaEliminarDatos.innerHTML = 
    `
        <div class="modal fade" id="modalEliminarDatos" tabindex="-1" role="dialog" aria-labelledby="modalDeDatosDeUsuarios" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalDeDatosDeUsuarios">Modificar datos del usuario</h5>
                    </div>
                    <div class="modal-body" id="modalEliminarUsuario">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success" id="confirmarEliminarDatosUsuarios">Aceptar</button>
                        <button type="button" class="btn btn-danger" id="cancelarModalEliminarDatos" data-dismiss="modal">Cancelar</button>                   
                    </div>
                </div>
            </div>
        </div>
    `;




const informacionJumbotron = document.querySelector("#visualizarInformacionJumbotron");

informacionJumbotron.innerHTML = 
    `
        <div class="collapse" id="mostrarInformacionJumbotron">
            <div class="card card-body">
                <p style="font-size: smaller; padding: 10px;">
                    Se diseñará un formulario con los datos presentados en la
                    figura siguiente. En el combo (select) se presentarán las siguientes
                    opciones: <br> a) Al azar. b) Le indicaron la URL de la página. c) A través
                    de un buscador (opción por defecto) y d) Mediante un enlace desde
                    otra página. <br>
                    Al pulsarse el botón AÑADIR se introducirán apellidos, nombre y
                    correo electrónico en la lista y cuando se haga clic en el botón
                    VISUALIZAR DATOS se presentarán todos los datos elegidos en un
                    cuadro de diálogo alert. <br>
                    Al pulsar el botón eliminar se borra la selección de la lista.
                    ¿selección activa? ¿último elemento introducido? ¿Cómo actúo si nó
                    hay ningún elemento seleccionado? <br>
                    Validar la dirección de correo electrónico.
                </p>
            </div>
        </div>
    `;
