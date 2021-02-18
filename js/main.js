const buttonStart = document.querySelectorAll('.buttonStart');

const chipBox = document.querySelectorAll('.chipBox');
const chipBoxFront = document.querySelectorAll('.chipBox-front');
const chipBoxBack = document.querySelectorAll('.chipBox-back');

const boxPlayer = document.querySelectorAll('.boxPlayer');
const boxPlayerOne = document.querySelectorAll('.boxPlayerOne');
const boxPlayerTwo = document.querySelectorAll('.boxPlayerTwo');
const turnPlayer = document.querySelectorAll('.turnPlayer');

buttonStart.forEach((button) => button.addEventListener('click', () => location.reload()));

/* -------------------------------------------------------------------------- */
/*                                  WhoStart                                  */
/* -------------------------------------------------------------------------- */
let counterPlayerGame = Math.floor(Math.random() * 10);

(counterPlayerGame % 2 == 0)
? (
    boxPlayerOne.forEach((box) => box.classList.toggle("playerOneTurn")),
    turnPlayer[0].style.display = "flex"
) : (
    boxPlayerTwo.forEach((box) => box.classList.toggle("playerTwoTurn")),
    turnPlayer[1].style.display = "flex"
)



/* -------------------------------------------------------------------------- */
/*                                 BoardMatrix                                */
/* -------------------------------------------------------------------------- */
let matrixBoard = [];
let arrayBoard = [];

// Este for se va a encargar de crear una matriz viendo el tablero del 4 en rayas como una matriz 6x7.
// Para ello recorrerá el array de botones que actúan como casillas del tablero y cada fila de 7 casillas se añadirán como una posición de la matriz.
for (let index = 0; index < chipBox.length; index++) {
    arrayBoard[index] = chipBox[index];
    
    // Este if está preguntando si arrayBoard[index] ya tiene 7 nuevos elementos en su array. Para ello calculamos si la posición en la que se encuentra
    // el array principal, chipBox[index], es múltiplo de 7.
    if ((index + 1) % 7 == 0) {
        console.log('%c⧭ Array: ', 'color: #731d1d', arrayBoard.length);

        // Cuando ha entrado en este if, querremos colocarlo en la posición que corresponda dentro de la matriz. Para obtener la posición correspondiente 
        // en cada momento se usa Math.trunc(index / 7). Como ejemplo podemos ver:
        // - La primera vez que se entra en este if 'index' vale 6 (porque recordemos que empieza por 0). Al dividir 6/7 obtenemos 0,85... 
        // Lo único que nos interesa es su parte entera para obtener la primera posición de la matriz, por ello se usa el Math.trunc
        // - La segunda vez que se entra en este if 'index' vale 13. Entonces la parte entera de 13/7 es 1 y así sucesivamente. 
        matrixBoard[Math.trunc(index / 7)] = arrayBoard.slice(arrayBoard.length - 7, arrayBoard.length);
        
        
    }
    
}
console.log('%c⧭ Matriz: ', 'color: #807160', matrixBoard);



/* -------------------------------------------------------------------------- */
/*                                  PutChips                                  */
/* -------------------------------------------------------------------------- */
function playerGame(buttonChip) {
    (counterPlayerGame % 2 == 0)
    ? ( 
        buttonChip.style.backgroundColor = "yellow",
        buttonChip.value = "yellow",
        boxPlayerOne.forEach((box) => box.classList.toggle("playerOneTurn")),
        boxPlayerTwo.forEach((box) => box.classList.toggle("playerTwoTurn"))
    ) : ( 
        buttonChip.style.backgroundColor = "red",
        buttonChip.value = "red",
        boxPlayerOne.forEach((box) => box.classList.toggle("playerOneTurn")),
        boxPlayerTwo.forEach((box) => box.classList.toggle("playerTwoTurn"))
    )    
    counterPlayerGame++;
}

// El método usado para la colocación de cada fichas en esta ocasión ha sido con puras matemáticas.
// Siempre se puede hacer click en cualquier casilla para colocar una ficha, pero la ficha será colocada en el primer 
// espacio libre que encuentre de esa columna empezando desde la fila que está más abajo.
chipBox.forEach((buttonChip, index, arrayButtonChip) => {
    buttonChip.addEventListener('click', () => {
        turnPlayer.forEach((textTurnPlayer) => textTurnPlayer.style.display = "none")
        boxPlayer.forEach((boxPlayer) => boxPlayer.style.width = "75%");

        // Lo primero es comprobar si la casilla en la que se ha hecho click y se quiere añadir una ficha está vacía. Si es el caso se harán
        // las siguientes operaciones. En caso contrario, simplemente se ignorará.
        if (buttonChip.value == "empty") {

            let chip = index + 1; 
            let row = Math.ceil((42 - chip + 0.000001) / 7) ;
            console.log('\n%c⧭ Click en fila: ', 'color: #0088cc', 6 - row);

            // Este if nos pregunta si se encuentra en la fila 1. Si es el caso y la casilla está vacía, coloca la ficha con el color correspondiente.
            if (row == 1) {
                playerGame(buttonChip);
                victoryOrNot(chip - 1, buttonChip.value, arrayButtonChip);
                console.log('%c⧭ Posición ocupada por ficha: ', 'color: #1d5673', chip - 1);
            }
            console.log('%c⧭ Click en casilla: ', 'color: #d90000', chip);

            // Este for se encargará de mirar cada fila empezando desde la fila que está más abajo y subiendo hasta la fila de la casilla donde se hizo click
            // hasta encontra el primer hueco vacío de esa columna.
            for (let i = row; i >= 1; i--) {
                let position = (chip + ((i - 1) * 7)) - 1
                
                if (arrayButtonChip[position].value == "empty") {
                    playerGame(arrayButtonChip[position]);
                    victoryOrNot(position, arrayButtonChip[position].value, arrayButtonChip);
                    console.log('%c⧭ Posición ocupada por ficha: ', 'color: #1d5673', position);
                    break;
                }
            }

        }
    });
});




/* -------------------------------------------------------------------------- */
/*                                   WhoWin                                   */
/* -------------------------------------------------------------------------- */
function victoryOrNot(position, colorChip, chipBoxArray) {

    let rowMatrix = 5 - (Math.trunc((41 - position) / 7));
    let columnMatrix = position - (rowMatrix * 7);
    
    console.log('%c⧭ Fila Matriz: ', 'color: #007300', rowMatrix);
    console.log('%c⧭ Columna Matriz: ', 'color: #731d6d', columnMatrix);
    console.log('%c⧭ Color ficha: ', 'color: #e57373', colorChip);
    
    let arrayConsecutives = []; // Este array existe tan solo para destacar las fichas de la victoria.
    let consecutives = 0;

    let evaluateConsecutive = (rowMatrix, columnMatrix) => {
        (matrixBoard[rowMatrix][columnMatrix].value == colorChip)
        ? arrayConsecutives[consecutives++] = matrixBoard[rowMatrix][columnMatrix]
        : (
            consecutives = 0,
            arrayConsecutives = []
        )
        
        // ¡¡Victoria!!
        if (consecutives == 4) {
            chipBoxArray.forEach((buttonChip) => buttonChip.setAttribute("disabled", ""));
            alertVictory(colorChip);
            arrayConsecutives.forEach((chip) => chip.classList.add("animationTurn"));
        } 
    }


    // Victoria horizontal
    for (let index = 0; index <= 6; index++) evaluateConsecutive(rowMatrix, index)


    // Victoria vertical
    consecutives = 0;
    for (let index = 0; index <= 5; index++) evaluateConsecutive(index, columnMatrix)  
    

    // Victoria diagonal descendente
    let rowDiagonalDown = rowMatrix;
    let columnDiagonalDown = columnMatrix;

    function lowNumber(number1, number2) {
        if (number1 < number2) {
            return number1;
        } else {
            return number2;
        }
    }

    for (let index = lowNumber(rowDiagonalDown, columnDiagonalDown); index > 0; index--) {
        rowDiagonalDown--;
        columnDiagonalDown--;
    }

    console.log('%c⧭ Fila Diagonal Descendente: ', 'color: #735656', rowDiagonalDown);
    console.log('%c⧭ Columna Diagonal Descendente: ', 'color: #111110', columnDiagonalDown);

    consecutives = 0;
    for (let index = 0; index < 6; index++) {
        if (rowDiagonalDown <= 5 && columnDiagonalDown <= 6) evaluateConsecutive(rowDiagonalDown++, columnDiagonalDown++)      
    }


    // Victoria diagonal ascendente
    let rowDiagonalUp = rowMatrix;
    let columnDiagonalUp = columnMatrix;

    for (let index = 0; index < 6; index++) {
        if (rowDiagonalUp > 0 && columnDiagonalUp < 6) {
            rowDiagonalUp--;
            columnDiagonalUp++;
        }        
    }
    
    console.log('%c⧭ Fila Diagonal Ascendente: ', 'color: #735656', rowDiagonalUp);
    console.log('%c⧭ Columna Diagonal Ascendente: ', 'color: #111110', columnDiagonalUp);

    consecutives = 0;
    for (let index = 0; index < 6; index++) {
        if (rowDiagonalUp <= 5 && columnDiagonalUp >= 0) evaluateConsecutive(rowDiagonalUp++, columnDiagonalUp--)   
    }


}






