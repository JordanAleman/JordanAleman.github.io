const openNav = document.querySelector("#openNav");
const closeNav = document.querySelector("#closeNav");

const jSidenav = document.querySelector("#jSidenav");
const mainPostNav = document.querySelector("#mainPostNav"); 


/**
 * La siguiente plantilla creará el menú lateral que será la misma para todas las páginas
 * Obtendremos la ruta absoluta de nuestro proyecto para poder crear todos los enlaces a todas las páginas
 * y saber a donde dirigirse sin importar en qué página se encuentre.
 */
let rutaAbsoluta;
if (window.location.hostname == "") {
    rutaAbsoluta = window.location.href.substring(0, window.location.href.lastIndexOf("SheraScript") + 11);
} else {
    rutaAbsoluta = window.location.href.substring(0, window.location.href.indexOf(window.location.pathname));
}

jSidenav.innerHTML = 
    `
        <h1>Menu</h1>
        <button class="jCloseSidenav" id="jCloseSidenav">&times;</button>
        <a href="${rutaAbsoluta}/index.html" class="homeSideNav">Inicio</a>
        <a href="${rutaAbsoluta}/Tema1/index.html" class="linkSideNav">Tema 1</a>
        <div class="jDropdown">Tema 2 <span>▼</span></div>
        <div class="jDropdown-container">
            <a href="${rutaAbsoluta}/Tema2/index.html">Parte 1</a>
            <a href="${rutaAbsoluta}/Tema2/EjerciciosJavaScript2/index.html">Parte 2</a>
        </div>
        <div class="jDropdown">Tema 3 <span>▼</span></div>
        <div class="jDropdown-container">
            <a href="${rutaAbsoluta}/Tema3/index.html">Parte 1</a>
            <a href="${rutaAbsoluta}/Tema3/Ejercicios2Funciones.html">Parte 2</a>
        </div>
        <a href="${rutaAbsoluta}/Tema4/index.html" class="linkSideNav">Tema 4</a>
        <div class="jDropdown">Tema 5 <span>▼</span></div>
        <div class="jDropdown-container">
            <a href="${rutaAbsoluta}/Tema5/index.html">Parte 1</a>
            <a href="${rutaAbsoluta}/Tema5/Formulario2/index.html">Parte 2</a>
        </div>
        <a href="${rutaAbsoluta}/Tema6/index.html" class="linkSideNav">Tema 6</a>
        <a href="${rutaAbsoluta}/Tema7/index.html" class="linkSideNav">Tema 7</a>
        <a href="${rutaAbsoluta}/Tema8/index.html" class="linkSideNav">Tema 8</a>
        <div class="jDropdown">Juegos<span>▼</span></div>
        <div class="jDropdown-container">
            <a href="${rutaAbsoluta}/Tema3/juegosEjercicios2Funciones/Moneda.html">Moneda</a>
            <a href="${rutaAbsoluta}/Tema3/juegosEjercicios2Funciones/PPT.html">PPT</a>
            <a href="${rutaAbsoluta}/Tema4/gallows/gallows.html">Ahorcado</a>
        </div>
    `;


/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
openNav.addEventListener("click", () => {
    openNav.style.zIndex = "0";
    jSidenav.style.width = "200px";
    mainPostNav.style.marginLeft = "200px";
    mainPostNav.style.opacity = "0.4";
});

const jCloseSidenav = document.querySelector("#jCloseSidenav");
let cerrarMenuArray = [jCloseSidenav, mainPostNav]

cerrarMenuArray.forEach(valor => valor.addEventListener("click", () => {
    openNav.style.zIndex = "9000";
    jSidenav.style.width = "0";
    mainPostNav.style.marginLeft = "0";
    mainPostNav.style.opacity = "1";
}));


const jDropdown = document.querySelectorAll(".jDropdown");
const jDropdownContainer = document.querySelectorAll(".jDropdown-container");

jDropdown.forEach((valor, index) => valor.addEventListener("click", () => {
    console.log(valor);
    valor.classList.toggle("jDropdownActive");
    if (jDropdownContainer[index].style.display === "block") {
        jDropdownContainer[index].style.display = "none";
    } else {
        jDropdownContainer[index].style.display = "block";
    }
}));

