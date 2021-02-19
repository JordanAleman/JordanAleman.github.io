const buttonStart = document.querySelector('#buttonStart');

let chipBox = document.querySelectorAll('.chipBox');
let counterPlayerGame = Math.floor(Math.random() * 10);

const boxPlayerOne = document.querySelectorAll('.boxPlayerOne')[0];
const boxPlayerTwo = document.querySelectorAll('.boxPlayerTwo')[0];
const turnPlayer = document.querySelectorAll('.turnPlayer');

buttonStart.addEventListener('click', () => location.reload());

/* -------------------------------------------------------------------------- */
/*                                  WhoStart                                  */
/* -------------------------------------------------------------------------- */
(counterPlayerGame % 2 == 0)
? (
    boxPlayerOne.classList.toggle("playerOneTurn"),
    turnPlayer[0].style.display = "flex"
) : (
    boxPlayerTwo.classList.toggle("playerTwoTurn"),
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
function playerGame(element) {
    (counterPlayerGame % 2 == 0)
    ? ( 
        element.style.backgroundColor = "yellow",
        element.value = "yellow",
        boxPlayerOne.classList.toggle("playerOneTurn"),
        boxPlayerTwo.classList.toggle("playerTwoTurn")
    ) : ( 
        element.style.backgroundColor = "red",
        element.value = "red",
        boxPlayerOne.classList.toggle("playerOneTurn"),
        boxPlayerTwo.classList.toggle("playerTwoTurn")
    )    
    counterPlayerGame++;
}

// El método usado para la colocación de cada fichas en esta ocasión ha sido con puras matemáticas.
// Siempre se puede hacer click en cualquier casilla para colocar una ficha, pero la ficha será colocada en el primer 
// espacio libre que encuentre de esa columna empezando desde la fila que está más abajo.
chipBox.forEach((element, index, array) => {
    element.addEventListener('click', () => {
        turnPlayer.forEach((element) => element.style.display = "none")

        // Lo primero es comprobar si la casilla en la que se ha hecho click y se quiere añadir una ficha está vacía. Si es el caso se harán
        // las siguientes operaciones. En caso contrario, simplemente se ignorará.
        if (element.value == "empty") {
            // Sumamos un uno a la posición de la casilla clickeada para que las siguientes operaciones resulten más simples al eliminar el 0 como operador.
            // Muy importante tener en cuenta que las posiciones de las casillas se cuentan de 0 a 41 (por eso sumamos un 1) desde la casilla que está
            // en la esquina arriba a la izquierda (casilla 0) hasta la casilla abajo a la derecha (casilla 41), contando de izquierda a derecha.
            let chip = index + 1; 

            // El siguiente cálculo se encarga de saber en qué fila. En este caso, la fila que está más abajo la interpreto como la primera fila.
            // Empezando a contar desde la fila que está más abajo, se encuentra la casilla a la que se le hizo click.
            // Como sabemos que el tablero tiene 42 casillas y cada fila está dividida en 7 casillas, lo que hacemos es lo siguiente:
            // Supongamos que se hace click en la casilla 25 (posición 24 y le sumamos 1). Se sabe a ojo que está en la fila 3. Para que la variable "row"
            // también sepa que está en la fila 3 realizamos el siguiente cálculo con el que obtendremos el número entero de esta operación siempre
            // redondeado hacia arriba. El 0.000001 es para evitar problemas de redondeo por el tema del 42-42.
            let row = Math.ceil((42 - chip + 0.000001) / 7) ;
            console.log('\n%c⧭ Click en fila: ', 'color: #0088cc', 6 - row);

            // Este if nos pregunta si se encuentra en la fila 1. Si es el caso y la casilla está vacía, coloca la ficha con el color correspondiente.
            if (row == 1) {
                playerGame(element);
                victoryOrNot(chip - 1, element.value, array);
                console.log('%c⧭ Posición ocupada por ficha: ', 'color: #1d5673', chip - 1);
            }
            console.log('%c⧭ Click en casilla: ', 'color: #d90000', chip);

            // Este for se encargará de mirar cada fila empezando desde la fila que está más abajo y subiendo hasta la fila de la casilla donde se hizo click
            // hasta encontra el primer hueco vacío de esa columna.
            for (let i = row; i >= 1; i--) {
                let position = (chip + ((i - 1) * 7)) - 1
                
                if (array[position].value == "empty") {
                    playerGame(array[position]);
                    victoryOrNot(position, array[position].value, array);
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
    // La variable 'rowMatrix' almacenará la posición de la fila en la matriz de la última ficha que se ha colocado.
    // El parámetro 'position' contendrá la posición del array de todas las casillas. Para calcular la posición de la fila
    // lo que se hace es la resta del total de posiciones de las casillas menos la posición que le pasamos por parámetro y ese
    // lo dividimos entre 7. El entero del resultado nos daría la posición de la fila donde se encuentra la casilla pasada por
    // parámetro empezando a contar las filas de abajo arriba. Por eso, se hace este 5 - el resultado de esta operación, ya que así
    // se obtiene la posición de la fila contando de arriba abajo. Como ejemplo:
    // - Si se escoge la casilla de la posición 31, al hacer 41 - 31 obtenemos 10, y al dividirlo entre 7 y coger su parte entera 
    // tenemos un 1. Entonces 5 - 1 es 4, que sería la posición de la fila de la matriz de la casilla 31.
    let rowMatrix = 5 - (Math.trunc((41 - position) / 7));
    let columnMatrix = position - (rowMatrix * 7);
    
    console.log('%c⧭ Fila Matriz: ', 'color: #007300', rowMatrix);
    console.log('%c⧭ Columna Matriz: ', 'color: #731d6d', columnMatrix);
    console.log('%c⧭ Color ficha: ', 'color: #e57373', colorChip);
    
    let arrayConsecutives = [];
    let consecutives = 0;

    let evaluateConsecutive = (rowMatrix, columnMatrix) => {
        (matrixBoard[rowMatrix][columnMatrix].value == colorChip)
        ? arrayConsecutives[consecutives++] = matrixBoard[rowMatrix][columnMatrix]
        : (
            consecutives = 0,
            arrayConsecutives = []
        )
        
        if (consecutives == 4) {
            chipBoxArray.forEach((buttonChip) => buttonChip.setAttribute("disabled", ""));
            alertVictory(colorChip);
            arrayConsecutives.forEach((chip) => chip.style.backgroundColor = "pink");
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


    // Esta función se usa para devolver el número más pequeño entre la fila y la columna de la casilla clickeada.
    // Conociendo cuál de los dos es el número más pequeño podremos realizar las siguientes operaciones.
    function lowNumber(number1, number2) {
        if (number1 < number2) {
            return number1;
        } else {
            return number2;
        }
    }

    // Sea fila o columna, queremos comenzar a evaluar desde el extremo izquierdo de uno de los dos, del primero que su valor llegue a 0.
    // Para ello, lo primero es averiguar, después de haber hecho click en alguna casilla, si la posición de la columna es más pequeña que 
    // la de la fila o al revés. Una vez conocido el número más pequeño, empezaremos a decrementar la posición de la fila y la columna de
    // 1 en 1 hasta el primero que llegue a 0 y así obtener la posición del extremo izquierdo de la matriz.
    for (let index = lowNumber(rowDiagonalDown, columnDiagonalDown); index > 0; index--) {
        rowDiagonalDown--;
        columnDiagonalDown--;
    }

    console.log('%c⧭ Fila Diagonal Descendente: ', 'color: #735656', rowDiagonalDown);
    console.log('%c⧭ Columna Diagonal Descendente: ', 'color: #111110', columnDiagonalDown);

    consecutives = 0;
    // index < 6 porque la máxima cantidad de evaluaciones que podrá hacer en cada momento es ya que no hay más de 5 filas ni más de 6 columnas.
    // Entonces el mayor recorrido de evaluación que se hará será mirando cada columna en diagonal descendente y por cada diagonal no hay ninguna
    // con más de 6 casillas.
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






