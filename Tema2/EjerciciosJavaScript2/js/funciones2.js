
// Saludo
function ejercicio1 () {
    var String1 = document.getElementsByName("Ejer1String")[0].value;
    
        if (String1) {
            String1 = comprobarNombresLetras(String1);

            (String1.length  > 40) 
                
            ?   document.getElementById("SolEjer1").innerHTML = "Casi seguro que su nombre no es tan largo.<br><br>"      
            :   document.getElementById("SolEjer1").innerHTML = "<b>Hola " + String1 + "</b>, yo soy PENTIUM 4<br><br>";
        } else {
            document.getElementById("SolEjer1").innerHTML = "¿No tiene nombre? Lo solucionaremos.<br><b>Hola Floripondio de los Altos Claros</b>, yo soy PENTIUM 4<br><br>";
        }

    // 23j0''O.-Rç´d12A,,n 90'm+`A1234N0'u¡¡E11ºL 
    // Ejemplo nombre
    
}

function comprobarNombresLetras(texto) {

    var abecedario=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


    var nombreCompleto = "";
    var mayuscula;

    var arrayNombres = texto.split(" ");                                    // Convertimos el string del nombre en un array separado por los espacios porque puede enviarnos más de un nombre.

        for (let i = 0; i < arrayNombres.length; i++) {
            var arrayLetras = arrayNombres[i].split("");                    // Metemos en un array separado por letras cada nombre para posteriormente comprobar si son letras válidas.
            mayuscula = 0;                                                  // Evaluará la primera letra de cada nombre y la pondrá en mayúscula.

            for (let j = 0; j < arrayLetras.length; j++) {
                if (abecedario.indexOf(arrayLetras[j]) != -1) {             // Este if comprueba si el valor que evalúa existe en el array abecedario, es decir, comprueba si es una letra válida.
                    mayuscula++;

                    if (mayuscula == 1) {
                        nombreCompleto += arrayLetras[j].toUpperCase();
                    } else {
                        nombreCompleto += arrayLetras[j].toLowerCase();
                    }
                    
                }
                
            }
            nombreCompleto += " ";
        }

    return nombreCompleto.trim();
}




var limite = 1;
var random = Math.round((Math.random() * 99) + 1);
 
// alert(random);
var incorrectos = [];

var log = "";

// Adivinar número
function ejercicio2(posicion) {
    
    var clases = document.querySelectorAll(".normal");             // Creará un array de los 100 input por medio de la clase "normal"



        if (limite <= 6 && (incorrectos.indexOf(posicion) == -1)) {


            if ((posicion + 1) > random) {

                // Si el número seleccionado por el usuario es mayor que el que hay que adivinar se pondrá en rojo todos los números que ya no tiene que escoger
                // En este caso se pondrán en rojo todos los superiores
                for(var i = posicion; i < clases.length; i++) {    
                    clases[i].classList.remove("fondoCambiar");    
                    clases[i].classList.add("eliminadoSuperior");
                    
                    incorrectos[i] = i;
                }

                log += "<li><span style='color: rgb(36, 60, 212)'>Intento " + limite + ":</span> Es un número INFERIOR a " + (posicion + 1) + "</li>";
                limite++;
                
            } else if ((posicion + 1) < random) {

                // En este caso se pondrán en rojo todos los inferiores
                for(var i = 0; i <= posicion; i++) {
                    clases[i].classList.remove("fondoCambiar");    
                    clases[i].classList.add("eliminadoInferior");  
                    
                    incorrectos[i] = i;
                }

                log += "<li><span style='color: red'>Intento " + limite + ":</span> Es un número SUPERIOR a " + (posicion + 1) + "</li>";
                limite++;

            } else {
                clases[posicion].classList.remove("fondoCambiar");
                clases[posicion].classList.add("correcto");
                log += "<li><span style='color: #41963d'>Intento " + limite + ":</span> Correcto, el número era el " + random + "</li>";

                limite = 10; // Cuando se ha acertado, aumentamos el límite a un valor que no recoge ningún if para darle un criterio de finalización a la función
            }

            document.getElementById("SolEjer2").innerHTML = log;

            if (limite == 7) {
                log += "<li><span style='color: #ff99ff; font-size: 18px'>No quedan intentos:</span> El número correcto era el <span style='color: green; font-weight: bold; font-size: 22px'>" + random + "</span></li>";
                limite++; // Al igual que arriba, aumentamos el if para darle un criterio de finalización a nuestra función.
                document.getElementById("SolEjer2").innerHTML = log;
            }
        } 
 
}



// Cuando el usuario pulsa el botón GENERAR NÚMEROS, el programa generará de manera aleatoria 6 números comprendidos entre 1 y 49, sin repetir ninguno de ellos.
function ejercicio3() {
    var numsPrim = [];

    var log = "<b>Primitiva: &nbsp;&nbsp;</b>["
    var random;

    for (let i = 0; i < 6; i++) {
        random = Math.round((Math.random() * 48) + 1); 

        while (numsPrim.indexOf(random) != -1) {
            random = Math.round((Math.random() * 48) + 1);
        }

        numsPrim[i] = random;              
    }

    numsPrim.sort(function(a, b) {
        return a - b;
      });

    for (let i = 0; i < numsPrim.length; i++) {
        if (i < numsPrim.length - 1) {
            log += numsPrim[i] + ", ";
        } else {
            log += numsPrim[i];
        }
        
        
    }

    log += "]";

    document.getElementById("SolEjer3").innerHTML = log;
}




//TRY_CATCH
function ejercicio4() {

    var mens = confirm('Clic en Aceptar para continuar en la página o clic en Cancelar para volver a la página principal. Qué redundante, ¿verdad?');

    try {
        if (mens == false)
            location.href = "EjerciciosParte2.html";
    } catch (e) {

    }

}
//====================================================================================================================

//Throws
function ejercicio5() {

    var mens = document.getElementsByName('Ejer5Try')[0].value;

    if (mens == null) {
        alert('Se cancelo la operación');
    } else {
        try {

            if (mens == "")                 throw "<p><span style='color: red; font-weight: bold'>ERROR: </span>Campo vacio</p>";
            if (mens < 5)                   throw "<p><span style='color: cyan; font-weight: bold'>ERROR: </span>El número introducido es menor que 5</p>";
            if (mens > 10)                  throw "<p><span style='color: cyan; font-weight: bold'>ERROR: </span>El número introducido es mayor que 10</p>";
            if (isNaN(mens))                throw "<p><span style='color: orange; font-weight: bold'>ERROR: </span>Ha introducido una letra</p>";

            document.querySelector('#SolEjer5').innerHTML = "<p><span style='color: #00ff00; font-weight: bold'>RESULTADO: </span>Su número es el " + mens + "</p>";

        } catch (e) {
            document.querySelector('#SolEjer5').innerHTML = e;
        }
    }
}