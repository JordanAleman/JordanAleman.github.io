// -------------------------------------------- Ejercicio 1 ------------------------------------------------------------------------
const muestraOperacion = document.querySelector('#muestraOperacion');
const entradaNumsEjer1 = document.querySelector('#entradaNumsEjer1');

// Esta variable guardará la operación que posteriormente vamos a evaluar
let operacion;


/* ------------------------------------------------------------------------------------------------------------- */
/*                                        Generación de operaciones aritméticas
/* ------------------------------------------------------------------------------------------------------------- */
document.querySelector('#generadorOperacion1').addEventListener('click', () => {
    document.querySelector('#operacionEscondida').style.display = "inline-block";

    // Guardamos en operacion una operación aritmética aleatoria que nos proporciona la función y también nos mostrará en pantalla por medio de una imagen dicha operación aritmética.
    operacion = aritmeticaSencillaAleatoria(muestraOperacion);
});

document.querySelector('#generadorOperacion2').addEventListener('click', () => {
    document.querySelector('#operacionEscondida').style.display = "inline-block";

    // Guardamos en operacion una operación aritmética aleatoria que nos proporciona la función y también nos mostrará en pantalla por medio de una imagen dicha operación aritmética.
    operacion = aritmeticaAvanzadaAleatoria(muestraOperacion);
});


// Esta función mostrará en pantalla por medio de una imagen una operación aritmética al mandarle el lugar donde tiene que mostrarse dicha imagen por parámetro.
// También devolverá en formato string la operación aritmética que hay que hay que evaluar.
function aritmeticaSencillaAleatoria(estilo) {
    let operacionesArray = [
        "(-2) - 7 + 12 + 5",
        "-10 - 2 - 5 + 4 - (-20)",
        "16 - (-15) - 15 + (-15)",
        "(-2) * 7 + (-12) * 5",
        "(-10) * 2 - 5 + 4 * 10 ",
        "80 + 9 -2",
        "64 + 5 - 68",
        "2 + 2",
        "5 - 4",
        "5 * 5",
        "10 / 2"    
    ];

    let posicionAleatoria = Math.round(Math.random() * (operacionesArray.length - 1))
    console.log('\nPosicionAleatoria: ', posicionAleatoria);
    console.log('Operación: ', operacionesArray[posicionAleatoria]);
    console.log('Resultado: ', eval(operacionesArray[posicionAleatoria]));

    estilo.style.backgroundImage = 'unset';
    estilo.style.height = 'unset';
    estilo.innerHTML = operacionesArray[posicionAleatoria];

    return operacionesArray[posicionAleatoria];
    
}

function aritmeticaAvanzadaAleatoria(estilo) {
    let operacionesArray = [
        "27 + 3 * 5 - 16",
        "27 + 3 - 45 / 5 + 16",
        "(2 * 4 + 12) * (6 - 4)",
        "3 * 9 + (6 + 5 - 3) - 12 / 4",
        "2 + 5 * (2 * 3)**3",
        "440 - (30 + 6 * (19 - 12))",
        "2 * (4 * (7 + 4 * (5 * 3 - 9)) - 3 * (40 - 8))",
        "(3 - 8) + (5 - (-2))",
        "5 - (6 - 2 - (1 - 8) - 3 + 6) + 5",
        "9 / (6 / (-2))",
        "((-2)**5 - (-3)**3)**2",
        "(5 + 3 * 2 / 6 - 4) * (4 / 2 - 3 + 6) / (7 - 8/2 - 2)**2",
        "((17-15)**3+(7-12)**2)/((6-7)*(12-23))",
        "(3 + 1/4) - (2 + 1/6)",
        "(1/2) / ((1/4) + (1/3))",
        "((5/3) - 1) * ((7/2) - 2)",
        "((3/4) + (1/2)) / ((5/3) + (1/6))",
        "7 * 3 + (6 + 2 * (8/4 + 3 * 2) - 7 * 2) + 9/3",
        "14-(7+4*3-((-2)**2*2-6))+(2**2+6-5*3)+3-(5-2**3/2)",
        "9-7+5+3-6+8-4",
        "3*2-5+4*3-8+5*2",
        "10/2+5*3+4-5*2-8+4*2-16/4",
        "2**3+10/2+5*3+4-5*2-8+4*2**2-16/4",
        "(15-4)+3-(12-5*2)+(5+16/4)-5+(10-2**3)",
        "(15-(2**3-10/2))*(5+(3*2-4))-3+(8-2*3)"    
    ];

    let operacionesImgArray = [
        "Operacion0.png",
        "Operacion1.png",
        "Operacion2.png",
        "Operacion3.png",
        "Operacion4.png",
        "Operacion5.png",
        "Operacion6.png",
        "Operacion7.png",
        "Operacion8.png",
        "Operacion9.png",
        "Operacion10.png",
        "Operacion11.png",
        "Operacion12.png",
        "Operacion13.png",
        "Operacion14.png",
        "Operacion15.png",
        "Operacion16.png",
        "Operacion17.png",
        "Operacion18.png",
        "Operacion19.png",
        "Operacion20.png",
        "Operacion21.png",
        "Operacion22.png",
        "Operacion23.png",
        "Operacion24.png",
    ];

    // var res = str.replace(/\^/g, "**");

    let posicionAleatoria = Math.round(Math.random() * (operacionesArray.length - 1))
    console.log('\nPosicionAleatoria: ', posicionAleatoria);
    console.log('Operación: ', operacionesArray[posicionAleatoria]);
    console.log('Resultado: ', eval(operacionesArray[posicionAleatoria]).toFixed(2));

    estilo.innerHTML = "";
    estilo.style.height = '100%';
    estilo.style.backgroundImage = "url('img/operacionesAritmeticas/"+ operacionesImgArray[posicionAleatoria] +"')";

    return operacionesArray[posicionAleatoria];
}
/* ------------------------------------------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------------------------------------------- */




/* ------------------------------------------------------------------------------------------------------------- */
/*                                        Comprobar resultado escrito por el usuario
/* ------------------------------------------------------------------------------------------------------------- */
document.querySelector('#enviarEjer1Funciones').addEventListener('click', () => ejercicio1Funciones(entradaNumsEjer1.value));

function ejercicio1Funciones(nums) {
    // let resultado = comprobarNumero(entradaNumsEjer1.value, 'solEjer1Funciones');
    const muestraResultado = document.querySelector('#solEjer1Funciones'); 

    let comprobar = (num, log) => {

        if (document.querySelector('#muestraOperacion').clientWidth == 0) {
            muestraResultado.style.fontFamily = "'Open Sans', sans-serif";
            log.innerHTML = "<span style='color: orange; font-weight: bold'>Error: </span>No ha generado aún ninguna operación.";
            return null;
        } else {
            if (!num) {
                muestraResultado.style.fontFamily = "'Open Sans', sans-serif";
                log.innerHTML = "<span style='color: darkblue; font-weight: bold'>Error: </span>No ha introducido nada.";
                return null;
            } else if (isNaN(num) || num.indexOf(" ") != -1) {
                log.innerHTML = "<span style='color: purple; font-weight: bold'>Error: </span>Ha introducido una cadena o espacio";
                return null;
            } else {
                return nums = (Number(num));
            }
        }
    }

    let resultado = comprobar(nums, muestraResultado);

    if (resultado) {
        function evaluarOperacion(comprobarResultado) {
            if (eval(operacion).toFixed(2) == comprobarResultado) {
                muestraResultado.style.fontFamily = "'Open Sans', sans-serif";
                muestraResultado.innerHTML = "<span style='color: #336600; font-weight: bold'>Resultado: </span>Correcto.";
            } else {
                muestraResultado.style.fontFamily = "'Liu Jian Mao Cao', cursive";
                muestraResultado.innerHTML = "<span style='color: red; font-weight: bold'>Resultado: </span>Incorrecto. 🤢";
            }
        }

        evaluarOperacion(resultado);
       
    }


}



// -------------------------------------------- Ejercicio 2 ------------------------------------------------------------------------
// -------------------------------------------- Ejercicio 2.1 ----------------------------------------------------------------------
const entradaNumsEjer2_1= document.getElementsByName('entradaNumsEjer2_1');


document.querySelector('#enviarEjer2_1Funciones').addEventListener('click', () => ejercicio2_1Funciones(entradaNumsEjer2_1));

function ejercicio2_1Funciones(nums) {
    
    const muestraResultado = document.querySelector('#solEjer2_1Funciones');

    let comprobarResultado = ((comprobarNum, muestraResultado) => {
        
        let log = "";
        let error = 0;
        let numsCorrectos = [];
    
        for (let index = 0; index < nums.length; index++) {
            if (!comprobarNum[index].value) {
                log += "<li><span style='color: darkblue; font-weight: bold'>Error: </span>No ha introducido nada en la <b>Sección " + (index + 1) + "</b></li>";
                error++;
            } else if (isNaN(comprobarNum[index].value) || comprobarNum[index].value.indexOf(" ") != -1) {
                log += "<li><span style='color: purple; font-weight: bold'>Error: </span>Ha introducido una cadena o espacio en la <b>Sección " + (index + 1) + "</b></li>";
                error++;
            } else {
                numsCorrectos[index] = (Number(comprobarNum[index].value));
            }   
        }

        if (error > 0) {
            muestraResultado.innerHTML = log;
            return null;
        } else {
            return numsCorrectos;
        }
        
    })(nums, muestraResultado);

    // Si cumple que ambos input tienen un número, entonces limpiamos la zona que muestra errores y mostramos en el input del número a incrementar el resultado
    if(comprobarResultado) {
        muestraResultado.innerHTML = "";
        entradaNumsEjer2_1[0].value = Number(entradaNumsEjer2_1[0].value) + comprobarResultado[1];
    }



}

// -------------------------------------------- Ejercicio 2.2 ----------------------------------------------------------------------
const entradaNums2_2 = document.getElementsByName('entradaNumsEjer2_2');

document.querySelector('#enviarEjer2_2Funciones').addEventListener('click', () => ejercicio2_2Funciones(entradaNums2_2));



function ejercicio2_2Funciones(nums) {
    const muestraResultado = document.querySelector('#solEjer2_2Funciones');

    let comprobarResultado = ((comprobarNum, muestraResultado) => {
        
        let log = "";
        let error = 0;
        let numsCorrectos = [];
    
        for (let index = 0; index < nums.length; index++) {
            if (!comprobarNum[index].value) {
                muestraResultado.style.fontFamily = "'Open Sans', sans-serif";
                muestraResultado.style.fontSize = 'unset';
                log += "<li><span style='color: darkblue; font-weight: bold'>Error: </span>No ha introducido nada en la sección <b>Número " + (index + 1) + "</b></li>";
                error++;
            } else if (isNaN(comprobarNum[index].value) || comprobarNum[index].value.indexOf(" ") != -1) {
                muestraResultado.style.fontFamily = "'Open Sans', sans-serif";
                muestraResultado.style.fontSize = 'unset';
                log += "<li><span style='color: purple; font-weight: bold'>Error: </span>Ha introducido una cadena o espacio en la <b>Sección " + (index + 1) + "</b></li>";
                error++;
            } else {
                numsCorrectos[index] = (Number(comprobarNum[index].value));
            }   
        }

        if (error > 0) {
            muestraResultado.innerHTML = log;
            return null;
        } else {
            return numsCorrectos;
        }
        
    })(nums, muestraResultado)

    console.log('comprobarResultado: ', comprobarResultado);


    if(comprobarResultado) {
        let num1 = comprobarResultado[0];
        let num2 = comprobarResultado[1];

        if (num1 > num2) {
            // En el caso de de que el primer número sea mayor habilitaremos una pequeña broma que 'destruirá' el contenido de la página
            muestraResultado.style.fontFamily = "'Gloria Hallelujah', cursive";
            muestraResultado.style.fontSize = '28px';

            let cuenta = 5;
            muestraResultado.innerHTML = "<span style='color: red; font-weight: bold'>Error Catastrófico: </span>El primer número es mayor. El sistema colapsará en " + cuenta;

            // Estableceremos un intervalo que cada segundo añadiremos una pequeña cuenta atrás
            let cuentaAtras = setInterval( () => {
                muestraResultado.innerHTML += " .. " + (--cuenta);
            }, 1000);

            // Indicamos el final del intervalo y lanzaremos un mensaje de despedida al sexto segundo
            let timeOut1 = setTimeout("clearInterval(" + cuentaAtras + ")", 4000);
            let timeOut2 = setTimeout(() => {
                muestraResultado.innerHTML += " .. ADIÓS";
            }, 5000);

            // Al segundo siete, en cuanto llega borra el contenido de la página
            let timeOut3 = setTimeout( () => {
                document.body.innerHTML = "";
                document.body.style.backgroundImage = "url(../img/Ciudad.png)";
                document.body.style.backgroundSize = "cover";
            }, 6000);
            
            // Si el usuario se arrepiente con tiempo, cortaremos la 'destrucción' de la página después de haberle dado otra opción al botón
            document.querySelector('#enviarEjer2_2Funciones').addEventListener('click', () => {
                setTimeout("clearInterval(" + cuentaAtras + ")");
                clearTimeout(timeOut1);
                clearTimeout(timeOut2);
                clearTimeout(timeOut3);
            });

        } else {
            
            muestraResultado.style.fontFamily = "'Open Sans', sans-serif";
            muestraResultado.style.fontSize = 'unset';
            muestraResultado.innerHTML = "<span style='color: #336600; font-weight: bold'>Resultado: </span>" + (num1 + num2);
        }
    }
    
    
}

// -------------------------------------------- Ejercicio 2.3 ----------------------------------------------------------------------
const muestraResultado2_3 = document.querySelector('#solEjer2_3Funciones');
 result2_3 = 0;

muestraResultado2_3.innerHTML = "<span style='color: #336600; font-weight: bold'>Result = </span>" + result2_3;

function ejercicio2_3Funciones() {
    firstNum = 4;
    secondNum = 8;
    result2_3 = firstNum + secondNum;   
    return result2_3;
}


document.querySelector('#enviarEjer2_3Funciones').addEventListener('click', () => {

    if (result2_3 != 12) {
            ejercicio2_3Funciones();

            let log = "Transformando el resultado";
            muestraResultado2_3.innerHTML = "<span style='font-weight: bold; color: hsl(" + (Math.round((Math.random() * 359) + 1)) + ", 100%, 50%)'>" + log + "</span>";
            
            var puntosTransformación = setInterval( () => {
                log += "."; 
                muestraResultado2_3.innerHTML = "<span style='font-weight: bold; color: hsl(" + (Math.round((Math.random() * 259) + 1)) + ", 100%, 50%)'>" + log + "</span>";

        }, 1000);


        setTimeout("clearInterval(" + puntosTransformación + ")", 3000);
        setTimeout( () => muestraResultado2_3.innerHTML = "<span style='color: #336600; font-weight: bold'>Result = </span>" + result2_3, 4000);
        
    }
    
});





// -------------------------------------------- Ejercicio 3 -------------------------------------------------------------------------------
// -------------------------------------------- Ejercicio 3.1 for -------------------------------------------------------------------------

// Esta variable de activo sólo está para que cuando le demos de nuevo al botón que nos muestra el resultado de nuestros bucles, lo vuelva a esconder
let activoEjer3_1_1Funciones = false;
document.querySelector('#enviarEjer3_1_1Funciones').addEventListener('click', () => {
    if (activoEjer3_1_1Funciones == false) {
        let fruits = ["apple", "orange", "cherry", "avocado", "banana", "cherries"];
        let log = "";

        for (let i = 0; i < fruits.length; i++) {
            log += "<b>" + i + ": </b>" + fruits[i] + "<br>";
        }
        
        document.querySelector("#solEjer3_1_1Funciones").innerHTML = log;

        activoEjer3_1_1Funciones = true;
    } else {
        document.querySelector("#solEjer3_1_1Funciones").innerHTML = "";
        activoEjer3_1_1Funciones = false;
    }
});

let activoEjer3_1_2Funciones = false;
document.querySelector('#enviarEjer3_1_2Funciones').addEventListener('click', () => {
    if (activoEjer3_1_2Funciones == false) {
        let log = "";

        for (let i = 0; i <= 5; i++) {
            log += "<b>Número: </b>" + (i * 5) + "<br>";
        }
        
        document.querySelector("#solEjer3_1_2Funciones").innerHTML = log;

        activoEjer3_1_2Funciones = true;
    } else {
        document.querySelector("#solEjer3_1_2Funciones").innerHTML = "";
        activoEjer3_1_2Funciones = false;
    }
});


// -------------------------------------------- Ejercicio 3.2 forEach ---------------------------------------------------------------------
let activoEjer3_2_1Funciones = false;
document.querySelector('#enviarEjer3_2_1Funciones').addEventListener('click', () => {
    if (activoEjer3_2_1Funciones == false) {
        let fruits = ["apple", "orange", "cherry", "avocado", "banana", "cherries"];
        let log = "";

        fruits.forEach((item, index) => log += "<b>" + index + ": </b>" + item + "<br>");
        
        document.querySelector("#solEjer3_2_1Funciones").innerHTML = log;

        activoEjer3_2_1Funciones = true;
    } else {
        document.querySelector("#solEjer3_2_1Funciones").innerHTML = "";
        activoEjer3_2_1Funciones = false;
    }
});

let activoEjer3_2_2Funciones = false;
document.querySelector('#enviarEjer3_2_2Funciones').addEventListener('click', () => {
    if (activoEjer3_2_2Funciones == false) {
        let numbers = [4, 8, 15, 16, 23, 42];                            
        let log = "";                                                   
                                                                        
        numbers.forEach((item, index, arr) => {                          
            log += "<b>" + index + ": </b>" + item + " * 10 => "                         
            log += (arr[index] = item * 10) + "<br>" 
        }); 

        document.querySelector("#solEjer3_2_2Funciones").innerHTML = log; 

        activoEjer3_2_2Funciones = true;
    } else {
        document.querySelector("#solEjer3_2_2Funciones").innerHTML = "";
        activoEjer3_2_2Funciones = false;
    }
});



// -------------------------------------------- Ejercicio 3.3 for in ----------------------------------------------------------------------
let activoEjer3_3_1Funciones = false;
document.querySelector('#enviarEjer3_3_1Funciones').addEventListener('click', () => {
    if (activoEjer3_3_1Funciones == false) {
        
        let person = {fname:"John", lname:"Doe", age:25}; 
    
        let text = "";
    
        for (let index in person) {
            text += "<b>" + index + ":</b> " + person[index] + "<br>"; 
        }

        document.querySelector("#solEjer3_3_1Funciones").innerHTML = text;
        activoEjer3_3_1Funciones = true;

    } else {
        document.querySelector("#solEjer3_3_1Funciones").innerHTML = "";
        activoEjer3_3_1Funciones = false;
    }
});

let activoEjer3_3_2Funciones = false;
document.querySelector('#enviarEjer3_3_2Funciones').addEventListener('click', () => {
    if (activoEjer3_3_2Funciones == false) {
        
        let cars = ['BMW', 'Volvo', 'Mini']; 
    
        for (let index in cars) {
            document.querySelector('#solEjer3_3_2Funciones').innerHTML += "<b>" + index + ":</b> " + cars[index] + "<br>"; 
        }

        activoEjer3_3_2Funciones = true;

    } else {
        document.querySelector("#solEjer3_3_2Funciones").innerHTML = "";
        activoEjer3_3_2Funciones = false;
    }
});

// -------------------------------------------- Ejercicio 3.4 for of ----------------------------------------------------------------------
let activoEjer3_4_1Funciones = false;
document.querySelector('#enviarEjer3_4_1Funciones').addEventListener('click', () => {
    if (activoEjer3_4_1Funciones == false) {
        
        let cars = ['BMW', 'Volvo', 'Mini'];
        let text = ""; 
    
        for (let valor of cars) {
            console.log('valor: ', valor);
            text += "<b>Posición: </b>" + cars[valor] + " ----------- <b>Valor: </b>" + valor + "<br>";  
        }

        document.querySelector('#solEjer3_4_1Funciones').innerHTML = text;
        activoEjer3_4_1Funciones = true;

    } else {
        document.querySelector("#solEjer3_4_1Funciones").innerHTML = "";
        activoEjer3_4_1Funciones = false;
    }
});

let activoEjer3_4_2Funciones = false;
document.querySelector('#enviarEjer3_4_2Funciones').addEventListener('click', () => {
    if (activoEjer3_4_2Funciones == false) {
        
        let mensaje = "Hola, Mundo";
        let text = ""; 
    
        for (let valor of mensaje) {
            console.log('valor: ', valor);
            text += "<b>Posición: </b>" + mensaje[valor] + " ----------- <b>Valor: </b>" + valor + "<br>"; 
        }

        document.querySelector('#solEjer3_4_2Funciones').innerHTML = text;
        activoEjer3_4_2Funciones = true;

    } else {
        document.querySelector("#solEjer3_4_2Funciones").innerHTML = "";
        activoEjer3_4_2Funciones = false;
    }
});