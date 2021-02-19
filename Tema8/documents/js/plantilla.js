const visualizacionNumerica = document.querySelector("#visualizacionNumerica");
const visualizacionRueda = document.querySelector("#visualizacionRueda");


visualizacionNumerica.addEventListener("click", () => {
    colorArray.forEach(valor => valor.type="input")

    visualizacionNumerica.classList.remove("btn-outline-secondary");
    visualizacionNumerica.classList.add("btn-secondary");
    visualizacionNumerica.setAttribute("disabled", "");

    visualizacionRueda.classList.add("btn-outline-secondary");
    visualizacionRueda.classList.remove("btn-secondary");
    visualizacionRueda.removeAttribute("disabled", "");
})


visualizacionRueda.addEventListener("click", () => {
    colorArray.forEach(valor => {
        valor.type="range";
        valor.setAttribute("max", 255);
    });

    visualizacionNumerica.classList.add("btn-outline-secondary");
    visualizacionNumerica.classList.remove("btn-secondary");
    visualizacionNumerica.removeAttribute("disabled", "");

    visualizacionRueda.classList.remove("btn-outline-secondary");
    visualizacionRueda.classList.add("btn-secondary");
    visualizacionRueda.setAttribute("disabled", "");
});

