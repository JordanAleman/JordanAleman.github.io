window.addEventListener("load", () => {
    let cookiesArray = ((document.cookie).replace(/ /g, "")).split(";");

    let controlWindow = false;

    /**
     * Las cookies se cargan en el navegador después de la resolución de todo el evento, no durante la ejecución del evento.
     * Por eso se controlará el momento en que cualquier ventana se haya abierto, al haber tan solo una ventana abierta y actualizar 
     * esa ventana por el motivo que sea, las cookies sigan comportándose correctamente.
     * 
     * Ya que el actualizar se recoge con el evento "unload" que tengo creado más abajo, está indicado que si la cookie "contador" tiene como valor '1'
     * que borre todas las cookies. Y como lo que está haciendo es actualizar la página, al cargarla de nuevo, la cookie "windowOpen=true" que se creaba
     * gracias a una función que está en "openWindow.js" ya no existiría y por tanto la cookie "contador=?" ya no funcionaría como debiera y caos.
     * 
     * Por ello creo el siguiente 'if'. Dice que la cookie "windowOpen=true" debe existir.
     * 
     * En la función llamada "countWindowCookie()" que está en "openWindow.js" línea 35, comprobará si existe "windowOpen=true" y en el caso de que sí será
     * el encargado de aumentar el valor de "contador=?".
     */
    if (window.name != "") {
        document.cookie = "windowOpen=true";
        controlWindow = true;
    }

    if (cookiesArray.indexOf("windowOpen=true") != -1 || controlWindow) {
        /**
         * Si aún no existe el cookie "contador" que llevará la cuenta del número de ventanas abiertas, primero lo crea.
         * Si existe, aumenta su valor porque significa que se ha creado una nueva.
         * 
         * El control de estas cookies se realiza aquí ya que controlará que se abra una nueva ventana, se actualice o se cierre.
         */
        if (!cookiesArray.find(valor => valor.match(/contador=(\d)/))) {
            document.cookie = "contador=1";
        } else {
            contador = (cookiesArray.find(valor => valor.match(/contador=(\d)/))).split("=")[1];
            document.cookie = `contador=${++contador}`;
        }   
    }

});

window.addEventListener("unload", () => {
    let contador = 0;
    let cookiesArray = ((document.cookie).replace(/ /g, "")).split(";");

    if (cookiesArray.find(valor => valor.match(/contador=(\d)/))) {
        contador = parseInt((cookiesArray.find(valor => valor.match(/contador=(\d)/))).split("=")[1]);
    }

    /**
     * Mientras el valor de la cookie del contador sea mayor que 1, el contador se irá decrementando al cerrar o actualizar la página.
     * Si el contador es 1 y la página se actualiza o cierra, todas las cookies se eliminarán.
     * 
     * Si no queremos que todas las cookies se eliminen porque la página se actualizó en lugar de cerrarse, todo eso se controla
     * en el evento de "load" escrito más arriba.
     */
    if (contador > 1) {
        document.cookie = `contador=${--contador}`;
    } else {
        document.cookie = "contador=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/documents;";
        document.cookie = "windowOpen=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/documents;";
    }
});


const datosBotonesVentanaAbierta = document.querySelector("#datosBotonesVentanaAbierta");
const buttonsWindowsOpened = document.querySelectorAll(".botonVentanaAbierta");

buttonsWindowsOpened[0].addEventListener("click", () => {
    let creator;

    ((window.name).indexOf(":") != -1)
    ?   creator = (window.name).slice(0, (window.name).indexOf(":"))
    :   creator = window.name;

    switch (creator) {
        case "WindowOpenedOnceTime":
            creator = "ABRIR VENTANA SIN CARACTERÍSTICAS UNA SOLA VEZ";
            break;
    
        case "WindowOpenedManyTimes":
            creator = "ABRIR VENTANA SIN CARACTERÍSTICAS VARIAS VECES";
            break;

        case "WindowOpenedWithFeatures":
            creator = "ABRIR VENTANA CON CARACTERÍSTICAS";
            break;

        case "WindowOpenedWithMoreFeatures":
            creator = "ABRIR VENTANA CON MÁS CARACTERÍSTICAS";
            break;
        
        case "WindowOpenedFullScreen":
            creator = "ABRIR VENTANA A PANTALLA COMPLETA";
            break;
    }

    datosBotonesVentanaAbierta.innerHTML = 
        `
            <div class="modal fade" id="modalCreadorVentanaAbierta" tabindex="-1" role="dialog" aria-labelledby="contenidoModalCreadorVentanaAbierta" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header tituloModal">
                            <h1 class="modal-title" id="contenidoModalCreadorVentanaAbierta">Creador</h1>
                        </div>
                        <div class="modal-body cuerpoModal">
                            ${creator}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger btn-block" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
});


buttonsWindowsOpened[1].addEventListener("click", () => {
    datosBotonesVentanaAbierta.innerHTML = 
        `
            <div class="modal fade" id="modalNombreVentanaAbierta" tabindex="-1" role="dialog" aria-labelledby="contenidoModalNombreVentanaAbierta" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header tituloModal">
                            <h1 class="modal-title" id="contenidoModalNombreVentanaAbierta">Nombre</h1>
                        </div>
                        <div class="modal-body cuerpoModal">
                            ${window.name}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger btn-block" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
});


buttonsWindowsOpened[2].addEventListener("click", () => window.close());
