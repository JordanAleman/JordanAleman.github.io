// Ejercicio 2
let mensajeAtrapado = 
    `
        <div class="alert alert-dismissible fade show mensajeAlertAtrapado" role="alert" >
            <strong>¡Me pillaste!</strong> 
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    `;

// Ejercicio 3
const botonesHistoria = document.querySelector("#botonesHistoria");
const cajaHistoria = document.querySelector("#cajaHistoria");

// Generación de botones
for (let index = 0; index < 4; index++) {
    botonesHistoria.innerHTML += 
    `
        <button type="button" class="btn btn-secondary" name="botonHistoria">P${index + 1}</button>
    `;
    
}

for (let index = 0; index < 4; index++) {
    if (index == 0) {
        cajaHistoria.innerHTML +=
        `
            <div class="cajasHistoria cajasHistoria-comienzo" name="cajasHistoria"></div>
        `
    } else if (index == 3) {
        cajaHistoria.innerHTML +=
        `
            <div class="cajasHistoria cajasHistoria-final" name="cajasHistoria"></div>
        `
    } else {
        cajaHistoria.innerHTML +=
        `
            <div class="cajasHistoria" name="cajasHistoria"></div>
        `
    }

    
}

let historia1 = 
    `
        <p>    
            En una noche oscura <br>
            Cuando más brillaba el Sol (🌞)<br>
            Una manada de cerdos <br>
            Se posaban de flor en flor.
        </p>
    `;


let historia2 = 
    `
        <p>    
            A la luz de un farol apagado <br>
            Un ciego leía <br>
            Un periódico sin letras que decía: <br>
            <i>"Antes morir a que me maten".</i>
        </p>
    `;

    
let historia3 = 
    `
        <p>    
            Y en las viejas novedades <br>
            Decía que había muerto <br>
            Un bebé de 90 años <br>
            Congelado en un incendio.
        </p>
    `;

    
let historia4 = 
    `
        <p>    
            Con un poco por aquí <br>
            Y un poco por allá, <br>
            Os he contado esta historia: <br>
            Creedla, que no es verdad.
        </p>
    `;

let arrayHistoria = [historia1, historia2, historia3, historia4];