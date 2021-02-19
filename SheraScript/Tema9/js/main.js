const botonCarrito = document.querySelector("#botonCarrito");
const botonArrayObjetos = document.querySelector("#botonArrayObjetos");
const botonCreacionObjetos = document.querySelector("#botonCreacionObjetos");

const inputCompras = document.querySelectorAll(".input-compra input");
const botonCompras = document.querySelectorAll(".boton-compra button");


// Añadir cantidades a las cookies
botonCompras.forEach((botonAnadir, index) => {
    botonAnadir.addEventListener("click", () => {
        let cookiesArray = ((document.cookie).replace(/ /g, "")).split(";");
        let controlCookie = false;
        let contador;

        if (inputCompras[index] != "") {
            cookiesArray.forEach(cookie => {
                if (cookie.search(`${inputCompras[index].id}`) != -1) {
                    controlCookie = true;
                    contador = parseInt(cookie.split("=")[1]);
                    document.cookie = `${inputCompras[index].id}=${contador + parseInt(inputCompras[index].value)}`;
                }
            });

            if (controlCookie == false) {
                document.cookie = `${inputCompras[index].id}=${inputCompras[index].value}`;
            }
        }

        inputCompras[index].value = "";
    });
});


// Mostrar el carrito
botonCarrito.addEventListener("click", () => window.open("carrito.html", "Carrito"));

// Mostrar array de objetos
botonArrayObjetos.addEventListener("click", () => window.open("arrayObjetos.html", "ArrayObjetos"));

// Mostrar creación de objetos
botonCreacionObjetos.addEventListener("click", () => window.open("creacionObjetos.html", "CreacionObjetos"));
