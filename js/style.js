const mainBoard = document.querySelector('#allBox');
const alertWin = document.querySelectorAll('.alertWin')[0];


/* -------------------------------------------------------------------------- */
/*                                 Main Board                                 */
/* -------------------------------------------------------------------------- */
for (let i = 0; i < 6; i++) mainBoard.innerHTML += `<div class="fila"></div>`;

let rows = document.querySelectorAll('.fila');
for (let j = 0; j < 7; j++) rows.forEach((divFila, index) => divFila.innerHTML += `<button type="button" class="chipBox" value="empty" name="${index}${j}"></button>`);



function alertVictory(colorChip) {
    chipBox.forEach((chip) => chip.classList.add("sizeChipBox"));
    alertWin.classList.add("alert");
    alertWin.innerHTML = 
    `
        <p>Ha ganado el jugador ${colorChip}. <strong>¡Enhorabuena!</strong></p>
    `

    if (colorChip == "yellow") {
        alertWin.style.backgroundColor = "yellow";
        alertWin.style.color = "black";
        alertWin.classList.add("alert");
        boxPlayerTwo.forEach((box) => box.classList.toggle("playerTwoTurn"));
    } else {
        alertWin.style.backgroundColor = "red";
        alertWin.classList.add("alert")
        boxPlayerOne.forEach((box) => box.classList.toggle("playerOneTurn"));
    }
}