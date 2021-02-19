// -------------------------------------------------------  Ejercicio 3.1 --------------------------------------------------------------------------------
document.querySelector('#enviarEjer3_1Funciones').addEventListener('click', () => {
    console.log("\n------------------------------------------------------")
    const entradaNum = document.querySelector('#entradaNumsEjer3_1Funciones').value;
    const muestraSol = document.querySelector('#solEjer3_1Funciones');

    // Esta variable verifica que el número que le pasan es realmente un número que se trata de un entero no negativo.
    let numCorrecto = ((num, log) => {
        
        if (!num) {
            log.innerHTML = "<span style='color: darkblue; font-weight: bold'>Error: </span>No ha introducido nada.";
            return null;
        } else if (isNaN(num) || num.indexOf(" ") != -1) {
            log.innerHTML = "<span style='color: purple; font-weight: bold'>Error: </span>Ha introducido una cadena o espacio";
            return null;
        } else {
            if (Number(num) == 0) {
                log.innerHTML = "<span style='color: #336600; font-weight: bold'>Resultado: </span>1";
                console.log('%c⧭ Resultado: ', 'color: #733d00', 1);
                return null;
            } else if (Number(num) < 0) {     
                log.innerHTML = "<span style='color: red; font-weight: bold'>Incorrecto: </span>Amig@, deberías saber que no existe factorial de un número negativo 😉";
                return null;
            } else {
                return Number(num);
            }
        }
    })(entradaNum, muestraSol);

    if (numCorrecto) {
        if (!Number.isInteger(numCorrecto)) {
            muestraSol.innerHTML = "<span style='color: orange; font-weight: bold'>Incorrecto: </span>Amig@, le hemos indicado que el número debe ser un entero 😉";
        } else {
            let aux = numCorrecto;
            while (aux > 1) {
                --aux; console.log('%c⧭ Iteración: ', 'color: #e50000', numCorrecto + " * " + aux);
                numCorrecto *= aux;               
            }
            muestraSol.innerHTML = "<span style='color: #336600; font-weight: bold'>Resultado: </span>" + numCorrecto;
            console.log('%c⧭ Resultado: ', 'color: #733d00', numCorrecto);
        }
    }
});


// -------------------------------------------------------  Ejercicio 3.2 --------------------------------------------------------------------------------
let num1Ejer3_2Funciones = document.getElementsByName("entradaNumsEjer3_2Funciones")[0];
let num2Ejer3_2Funciones = document.getElementsByName("entradaNumsEjer3_2Funciones")[1];


document.getElementsByName("enviarEjer3_2Funciones")[0].addEventListener('click', () => intercambioPorValor(num1Ejer3_2Funciones, num2Ejer3_2Funciones));

function intercambioPorValor(text1, text2) {
    console.log("\n----------------------------------------------------");
    console.log('%c⧭ Número 1: ', 'color: #917399', text1.value);
    console.log('%c⧭ Número 2: ', 'color: #d90000', text2.value);

    let aux = text1.value;
    text1.value = text2.value;
    text2.value = aux;

    console.log('\n%c⧭ Número 1 por valor: ', 'color: #917399', text1.value);
    console.log('%c⧭ Número 2 por valor: ', 'color: #d90000', text2.value);
}


document.getElementsByName("enviarEjer3_2Funciones")[1].addEventListener('click', () => {
    let obj1 = {valor: num1Ejer3_2Funciones.value}
    let obj2 = {valor: num2Ejer3_2Funciones.value}
        
    intercambioPorReferencia(obj1.valor, obj2.valor)
});

function intercambioPorReferencia(text1, text2) {
    console.log("\n----------------------------------------------------");
    console.log('%c⧭ Número 1: ', 'color: #917399', text1);
    console.log('%c⧭ Número 2: ', 'color: #d90000', text2);

    num1Ejer3_2Funciones.value = text2;
    num2Ejer3_2Funciones.value = text1;

    console.log('\n%c⧭ Número 1 por referencia: ', 'color: #917399', num1Ejer3_2Funciones.value);
    console.log('%c⧭ Número 2 por referencia: ', 'color: #d90000', num2Ejer3_2Funciones.value);
}


// -------------------------------------------------------  Ejercicio 3.3 Suma(número de argumentos variables, separados por coma) --------------------------------------------------------------------------------

document.querySelector("#enviarEjer3_3Funciones").addEventListener('click', () => {
    const muestraResEjer3_3Funciones = document.querySelector("#solEjer3_3Funciones");

    const numEjer3_3Funciones = document.querySelector("#entradaNumsEjer3_3Funciones").value.split(",");
    console.log("\n--------------------------------------------------------------------")
    console.log('%c⧭ numEjer3_3Funciones', 'color: #00a3cc', numEjer3_3Funciones);

    let log = "";
    let numeros = ((arrayNums) => {
        for (let index in arrayNums){
            console.log('\n%c⧭ Inicio: ', 'color: #aa00ff', "Posición: " , index, ' Valor: ', arrayNums[index]);

            if (isNaN(arrayNums[index])) {
                log += "<span style='margin-left: 1rem; font-size:12px'><b>" + arrayNums[index] + "</b> no es un número.</span><br>"
                arrayNums[index] = 0;
            } else {
                arrayNums[index] = Number(arrayNums[index]);
            }
            console.log('%c⧭ Modificado: ', 'color: #0015ff', "Posición: " , index, ' Valor: ', arrayNums[index]);
        }
        return arrayNums;
    })(numEjer3_3Funciones);

    console.log('\n%c⧭ numEjer3_3Funciones', 'color: #c900cc', numEjer3_3Funciones);

    function sumaDeArgumentosVariables() {  
    
        let result = 0;
        for(const valor of sumaDeArgumentosVariables.arguments){      
            result += valor;
        }
        return result;
    }

    log += "<span style='color: #336600; font-weight: bold'>Resultado: </span>" + eval('sumaDeArgumentosVariables(' + numeros + ')');

    muestraResEjer3_3Funciones.innerHTML = log;
});




// -------------------------------------------------------  Ejercicio 3.4 Informacion(nombre, localidad, valor) --------------------------------------------------------------------------------
document.querySelector("#enviarEjer3_4Funciones").addEventListener('click', () => {
    const muestraResEjer3_4Funciones = document.querySelector("#solEjer3_4Funciones");
    const input_Ejer3_4Funciones = document.getElementsByName("entradaInputEjer3_4Funciones");

    let log = "";

    if (!input_Ejer3_4Funciones[0].value) {
        log += "<span style='color: darkblue; font-weight: bold'>Error: </span>El campo 'nombre' es obligatorio.";
    } else {
        // Esta variable almacenará el nombre filtrado para eliminar todos los carateres que normalmente no pueden pertencer a un nombre.
        let nombreCorrecto = ((texto) => {          

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
        })(input_Ejer3_4Funciones[0].value);
        console.log('%c⧭ nombreCorrecto:', 'color: #00a3cc', nombreCorrecto);


        if (nombreCorrecto.length == 0) {
            log +=  "<li><span style='color: darkblue; font-weight: bold'>Error: </span>Introduzca un nombre válido"
                    + "<i style='font-size: 13px'>(Si había introducido su verdadero nombre, lo sentimos. Nuestras base de datos desconocía un nombre como ese. Es un nombre muy interesante)</i></li>";         
        } else {
            log += "<li><span style='color: purple; font-weight: bold'>Nombre: </span>" + nombreCorrecto + "</li>";

            // Parámetros por defecto
            if (input_Ejer3_4Funciones[1].value == ""){
                log += "<li><span style='color: purple; font-weight: bold'>Localidad: </span>Las Palmas de G.C.</li>";
            } else {
                log += "<li><span style='color: purple; font-weight: bold'>Localidad: </span>" + input_Ejer3_4Funciones[1].value + "</li>";
            }

            if (input_Ejer3_4Funciones[2].value == ""){
                log += "<li><span style='color: purple; font-weight: bold'>Valor: </span>100</li>";
            } else {
                log += "<li><span style='color: purple; font-weight: bold'>Valor: </span>" + input_Ejer3_4Funciones[2].value + "</li>";
            }
        }
    } 


    muestraResEjer3_4Funciones.innerHTML = log;
    console.log('%c⧭ Información: ', 'color: #aa00ff', log);

});


// -------------------------------------------------------  Ejercicio 3.5 Factorial con recursividad --------------------------------------------------------------------------------
document.querySelector("#enviarEjer3_5Funciones").addEventListener('click', () => {
    const muestraResEjer3_5Funciones = document.querySelector("#solEjer3_5Funciones");
    const entradaNumsEjer3_5Funciones = document.querySelector('#entradaNumsEjer3_5Funciones');


    // Esta variable verifica que el número que le pasan es realmente un número que se trata de un entero no negativo.
    let numCorrecto = ((num, log) => {
        
        if (!num) {
            log.innerHTML = "<span style='color: darkblue; font-weight: bold'>Error: </span>No ha introducido nada.";
            return null;
        } else if (isNaN(num) || num.indexOf(" ") != -1) {
            log.innerHTML = "<span style='color: purple; font-weight: bold'>Error: </span>Ha introducido una cadena o espacio";
            return null;
        } else {
            if (Number(num) == 0) {
                log.innerHTML = "<span style='color: #336600; font-weight: bold'>Resultado: </span>1";
                console.log('%c⧭ Resultado: ', 'color: #733d00', 1);
                return null;
            } else if (Number(num) < 0) {     
                log.innerHTML = "<span style='color: red; font-weight: bold'>Incorrecto: </span>Amig@, deberías saber que no existe factorial de un número negativo ;)";
                return null;
            } else {
                return Number(num);
            }
        }
    })(entradaNumsEjer3_5Funciones.value, muestraResEjer3_5Funciones);

    if (numCorrecto) {
        function factorialRecur(num) {
            if (num > 1) {
                return num * factorialRecur(--num);
            } else {
                return 1;
            }
        }

        muestraResEjer3_5Funciones.innerHTML = "<span style='color: #336600; font-weight: bold'>Resultado: </span>" + factorialRecur(numCorrecto);
        console.log('\n%c⧭ Resultado del factorial recursivo: ', 'color: #0088cc', factorialRecur(numCorrecto));
    }
});

