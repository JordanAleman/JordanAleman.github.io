const flipCardHover = document.querySelectorAll(".flip-card");
const flipCardInner = document.querySelectorAll(".flip-card-inner");

flipCardHover.forEach((valor, index) => valor.addEventListener("click", () => {
    if (flipCardInner[index].style.transform != "rotateY(180deg)") {
        flipCardInner[index].style.transform = "rotateY(180deg)";
    } else {
        flipCardInner[index].style.transform = "rotateY(0deg)";
    }
}));


