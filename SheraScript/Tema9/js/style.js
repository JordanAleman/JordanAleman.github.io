const btnDepartamentos = document.querySelector("#btn-departamentos");
const btnCerrarMenu = document.querySelector("#btn-menu-cerrar");

const grid = document.querySelector("#grid");
const contenedorEnlacesNav = document.querySelector("#menu .contenedor-enlaces-nav");
const contenedorSubCategorias = document.querySelector("#grid .contenedor-subcategorias");

const esDispositivoMovil = () => {return (window.innerWidth <= 800)?true:false};

const main = document.querySelector("main");

main.addEventListener("click", () => {
    grid.classList.remove("activo");
    document.querySelector("#contenedor-carrito").style.paddingTop = "2rem";
});


btnDepartamentos.addEventListener("click", () => {
    grid.classList.add("activo")
    document.querySelector("#contenedor-carrito").style.paddingTop = "300px";
});


const enlacesCategorias = document.querySelectorAll("#menu .categorias a");

enlacesCategorias.forEach(valor => {
    valor.addEventListener("mouseenter", (e) => {
        if (!esDispositivoMovil()) {
            document.querySelectorAll("#menu .subcategoria").forEach(categoria => {
                categoria.classList.remove("activo");
                if(categoria.dataset.categoria == e.target.dataset.categoria){
                    categoria.classList.add("activo");
                }
            });
        };

    });
});


// Eventos para dispositivos móviles
document.querySelector("#btn-menu-barras").addEventListener("click", (e) => {
    e.preventDefault();

    (contenedorEnlacesNav.classList.contains("activo"))
    ?(  contenedorEnlacesNav.classList.remove("activo"),
        document.querySelector("body").style.overflow = "visible"
    ):( contenedorEnlacesNav.classList.add("activo"),
        document.querySelector("body").style.overflow = "hidden"
    );
});


// Click en botón de todos los departamentos (Para versión móvil)
btnDepartamentos.addEventListener("click", (e) => {
    e.preventDefault();
    grid.classList.add("activo");
    btnCerrarMenu.classList.add("activo");
})


// Botón de regresar en el menú de categorías
document.querySelector("#grid .categorias .btn-regresar").addEventListener("click", (e) => {
    e.preventDefault();
    grid.classList.remove("activo");
    btnCerrarMenu.classList.add("activo");
})


document.querySelectorAll("#menu .categorias a").forEach(valor => {
    valor.addEventListener("click", (e) => {

        if(esDispositivoMovil()) {
            contenedorSubCategorias.classList.add("activo");

            document.querySelectorAll("#menu .subcategoria").forEach(categoria => {
                categoria.classList.remove("activo");

                if (categoria.dataset.categoria == e.target.dataset.categoria) {
                    categoria.classList.add("activo");
                }
            });
        }
    });
})


// Botón de regresar en el menú de categorías
document.querySelectorAll("#grid .contenedor-subcategorias .btn-regresar").forEach(boton => {
    boton.addEventListener("click", (e) => {
        e.preventDefault();
        contenedorSubCategorias.classList.remove("activo");
    })
})