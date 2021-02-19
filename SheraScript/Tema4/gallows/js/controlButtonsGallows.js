function formatearLetra(letra) {
    if (letra.match(/[Á-Ä]/)) {
        return "A";
    }
    if (letra.match(/[É-Ë]/)) {
        return "E";
    }
    if (letra.match(/[Í-Ï]/)) {
        return "I";
    }
    if (letra.match(/[Ó-Ö]/)) {
        return "O";
    }
    if (letra.match(/[Ú-Ü]/)) {
        return "U";
    }

    return letra;
}

// Esta función nos permitirá interpretar las tildes introducidas por los usuarios.
function controlBotonLetra(botonLetra, casillaLetra) {

    let controlLetraCorrecta = false;
    switch (botonLetra) {

        case "A":
            (casillaLetra.match(/[AÁ-Ä]/)) 
            ? controlLetraCorrecta = true
            : controlLetraCorrecta = false;
            break;

        case "E":
            (casillaLetra.match(/[EÉ-Ë]/)) 
            ? controlLetraCorrecta = true
            : controlLetraCorrecta = false;
            break;

        case "I":
            (casillaLetra.match(/[IÍ-Ï]/)) 
            ? controlLetraCorrecta = true
            : controlLetraCorrecta = false;
            break;

        case "O":
            (casillaLetra.match(/[OÒ-Ö]/)) 
            ? controlLetraCorrecta = true
            : controlLetraCorrecta = false;
            break;

        case "U":
            (casillaLetra.match(/[UÚ-Ü]/)) 
            ? controlLetraCorrecta = true
            : controlLetraCorrecta = false;
            break;

        default:
            if (botonLetra == casillaLetra) {
                controlLetraCorrecta = true;
            }
            break;
    }

    return controlLetraCorrecta;
}

function victoria() {
    botonesLetras.forEach((botonLetra) => botonLetra.setAttribute("disabled", ""));
    contadorIntentos.innerHTML = "Has ganado 😁";
    contadorIntentos.style.backgroundColor = 'green';
    botonPista.style.display = "none";
    contenedorDibujos.style.backgroundImage =  `url(img/${verdugoEscogido}Victoria.png)`; 

}

function derrota() {
    botonesLetras.forEach((botonLetra) => botonLetra.setAttribute("disabled", ""));
    contadorIntentos.innerHTML = "Has perdido 😪";
    contadorIntentos.style.backgroundColor = 'black';
    botonPista.style.display = "none";


    /*
        * En el caso de que haya sido derrota, se muestra todas las casillas con las letras restantes.
    */
    campoCasillas.innerHTML = 
    `
        <div class="btn-group">
    `;

    for (const letra of palabraAhorcado.value) {
        campoCasillas.innerHTML += 
        `
            </div>
            <div class="btn-group">
        `;
        if (letra.match(/[a-zA-ZÀ-ÄÉ-ÏÒ-ÖÚ-Üà-äè-ïò-öù-ü]/)) {            
            campoCasillas.innerHTML += 
            `
                <button type="button" class="btn btn-light casillaLetra" value="${letra}" name="casillaLetra">${letra}</button>
            `;
        } else if (letra.match(/\s/g)) {
            campoCasillas.innerHTML += 
            `
                <button type="button" class="btn btn-dark casillaLetra" value="" name="casillaLetra"></button>
            `;
        } else {
            campoCasillas.innerHTML += 
            `
                <button type="button" class="btn btn-info casillaLetra" value="" name="casillaLetra">${letra}</button>
            `;
        }

    }

    campoCasillas.innerHTML += 
    `
        </div>
    `;
}



function audioIncorrecto(botonIncorrecto, intentosRestantes, verdugo) {
    let audio = document.createElement("audio");
    (--intentosRestantes == 0) 
    ? audio.src = `audio/GameOver${verdugo}.mp3`
    : audio.src = `audio/incorrecto.mp3`;

     
    audio.setAttribute("autoplay", "");
    botonIncorrecto.appendChild(audio);

    setTimeout(() => {
        audio.parentNode.removeChild(audio);
    }, 8000);
}


function audioCorrecto(botonCorrecto, controlTamanioPalabra, tamanioPalabraAhorcado) {
    let audio = document.createElement("audio");
    (++controlTamanioPalabra == tamanioPalabraAhorcado) 
    ? audio.src = `audio/victoria.mp3`
    : audio.src = `audio/correcto.mp3`;

     
    audio.setAttribute("autoplay", "");
    botonCorrecto.appendChild(audio);

    setTimeout(() => {
        audio.parentNode.removeChild(audio);
    }, 5000);
}

// function audioJugar(botonJugar, verdugo) {
//     let audio = document.createElement("audio");
//     audio.id = "audioJugar";
//     audio.setAttribute("autoplay", "");
//     botonJugar.appendChild(audio);
// }