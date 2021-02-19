const pintoresImg = document.querySelectorAll(".contenedorBotonesMiniaturas img");

let pintoresArray = [
    "img/Felo1.jpg",
    "img/Felo2.jpg",
    "img/Lujan1.jpg",
    "img/Nestor1.jpg",
    "img/Nestor2.jpg",
    "img/Nestor3.jpg",
    "img/Nestor4.jpg",
    "img/Padron1.jpg",
    "img/Padron2.jpg",
    "img/Damaso1.jpg"
]

let dimensionesVentana = 
    `
        height=${screen.availHeight / 1.3},
        width=${screen.availWidth / 1.3}
    `

pintoresImg.forEach((valor, index) => valor.addEventListener("click", () => window.open(`imagenCompleta.html?imagen=${pintoresArray[index]}`, "imagenCompleta", dimensionesVentana)));