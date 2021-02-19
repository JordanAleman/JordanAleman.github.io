const buttonNombreContenedores = document.querySelector("#buttonNombreContenedores");


buttonNombreContenedores.addEventListener("click", () => {
    const contenedoresConNombre = parent.document.querySelectorAll(".contenedorConNombre");

    const contenedorMuestraNombreContenedorPrincipal = parent.document.querySelector("#mostrarNombreIframe");
    const contenedorMuestraNombreContenedorIzquierdo = parent.frames[0].document.querySelector("#mostrarNombreIframe");
    const contenedorMuestraNombreContenedorDerecho = document.querySelector("#mostrarNombreIframe");

    let muestraNombreContenedoresArray = [contenedorMuestraNombreContenedorPrincipal, contenedorMuestraNombreContenedorIzquierdo, contenedorMuestraNombreContenedorDerecho]


    contenedoresConNombre.forEach((valor, index) => {
        muestraNombreContenedoresArray[index].innerHTML = 
            `
                <div class="alert alert-dismissible alert-info fade show text-center pt-3" role="alert">
                    Mi nombre es ${valor.getAttribute("name")}
                </div>
            `;
    });

});


