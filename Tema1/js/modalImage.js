const modalActivo = document.querySelector("#modalActivo");
let imagenes = document.querySelectorAll("img");

const jSidebar = document.querySelector("#jSidebar");


imagenes.forEach(valor => valor.addEventListener("click", () => {
    modalActivo.innerHTML = 
        `
            <div id="imgModal" class="modal">
                <img class="modal-content" id="imgActual">
                <div id="caption"></div>
            </div>
        `;
    
    const imgModal = document.querySelector("#imgModal");
    const imgActual = document.querySelector("#imgActual");
    const caption = document.querySelector("#caption");

    imgModal.style.display = "block";
    imgActual.src = valor.src;
    caption.innerHTML = valor.alt;

    jSidebar.style.display = "none";

    imgModal.addEventListener("click", () => {
        caption.classList.add("alejarZoom");
        imgActual.classList.add("alejarZoom");

        setTimeout(() => {
            modalActivo.innerHTML = "";
            jSidebar.style.display = "initial";
        }, 290);
    });
}));
