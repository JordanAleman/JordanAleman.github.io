
// Suma de String
function ejercicio1 () {
    var String1 = document.getElementsByName("Ejer1String")[0].value;
    var String2 = document.getElementsByName("Ejer1String")[1].value;

    document.getElementById("SolEjer1").innerHTML = "<span style='color: green; font-weight: bold'>Mensaje: </span>" + String1 + String2;
}


// Mostrar tipo de variable
function ejercicio2 () {
    var esString, esNumber, esBoolean;

    var IndexSelected = document.getElementById("OSEjer2").selectedIndex; // Seleccionamos los índices de las opciones del select.
    var OptionSelected = document.getElementById("OSEjer2").options;
    

    // Aunque los índices empiezan por 0, empezamos a evaluar desde el índice 1.
    // Luego evaluamos primero las variables sin ningún valor definido.
    if (IndexSelected <= 3) {
        switch (IndexSelected) {
            case 1:
                document.getElementById("SolEjer2").innerHTML = "<b>" + OptionSelected[IndexSelected].text + ":</b> " + typeof(esString);
                break;
        
            case 2:
                document.getElementById("SolEjer2").innerHTML = "<b>" + OptionSelected[IndexSelected].text + ":</b> " + typeof(esNumber);
                break;

            case 3:
                document.getElementById("SolEjer2").innerHTML = "<b>" + OptionSelected[IndexSelected].text + ":</b> " + typeof(esBoolean);
                break;
        }

    }

    // Le damos un valor a cada variable y mostramos de qué tipo son en las siguientes opciones de nuestro select
    esString = "String";
    esNumber = 2;
    esBoolean = true;


    switch (IndexSelected) {
        case 4:
            document.getElementById("SolEjer2").innerHTML = "<b>" + OptionSelected[IndexSelected].text + ":</b> " + typeof(esString);
            break;
    
        case 5:
            document.getElementById("SolEjer2").innerHTML = "<b>" + OptionSelected[IndexSelected].text + ":</b> " + typeof(esNumber);
            break;

        case 6:
            document.getElementById("SolEjer2").innerHTML = "<b>" + OptionSelected[IndexSelected].text + ":</b> " + typeof(esBoolean);
            break;
    }

    

}


// Realizar una pequeña página que pida al usuario un par de números y mediante una condicional le digamos si el primero es mayor que el segundo o es menor o iguales
function ejercicio3() {

    var log = "";
    var error = 0;
    var nums = [];

    for (let i = 0; i < document.getElementsByName("Ejer3Num").length; i++) {
        if (isNaN(document.getElementsByName("Ejer3Num")[i].value) || (document.getElementsByName("Ejer3Num")[i].value).indexOf(" ") != -1) {
            log += "<li><span style='color: red; font-weight: bold'>Error: </span>Ha introducido una cadena o algún espacio en la sección Número " + (i + 1) + "</li>";
            error++;
        } else if (!(document.getElementsByName("Ejer3Num")[i].value)) {
            log += "<li><span style='color: blue; font-weight: bold'>Error: </span>No ha introducido nada en la sección Número " + (i + 1) + "</li>";
            error++;
        } else {
            nums[i] = (Number(document.getElementsByName("Ejer3Num")[i].value));
        } 
        
    }


    if (error > 0) {
        document.getElementById("SolEjer3").innerHTML = log;
    } else {
        
        if (nums[0] > nums[1]) {
            document.getElementById("SolEjer3").innerHTML = "<li><span style='color: green; font-weight: bold'>Evaluación: </span>El número " + nums[0] + " es <b>MAYOR</b> que el número " + nums[1] + "</li>";
        } else if (nums[0] < nums[1]) {
            document.getElementById("SolEjer3").innerHTML = "<li><span style='color: green; font-weight: bold'>Evaluación: </span>El número " + nums[0] + " es <b>MENOR</b> que el número " + nums[1] + "</li>";
        } else {
            document.getElementById("SolEjer3").innerHTML = "<li><span style='color: green; font-weight: bold'>Evaluación: </span>El número " + nums[0] + " es <b>IGUAL</b> que el número " + nums[1] + "</li>";
        }


    }
    
}

// Este script nos devuelve “hola” si no introducimos nada o aquello que hemos escrito.
function ejercicio4() {   

    if (document.getElementsByName("Ejer4String")[0].value) {
        document.getElementById("SolEjer4").innerHTML = "<li><span style='color: green; font-weight: bold'>Mensaje: </span>" + document.getElementsByName("Ejer4String")[0].value + "</li>";      
    } else {
        document.getElementById("SolEjer4").innerHTML = "<li><span style='color: red; font-weight: bold'>Hola</span></li>";
    } 

        
}


//  Realizar una pequeña página que pida al usuario un par de números y mediante una condicional 
// le digamos si el primero es mayor que el segundo o es menor o iguales usando el otro formato del if
function ejercicio5() {

    var log = "";
    var error = 0;
    var nums = [];

    for (let i = 0; i < document.getElementsByName("Ejer5Num").length; i++) {

        (isNaN(document.getElementsByName("Ejer5Num")[i].value) || (document.getElementsByName("Ejer5Num")[i].value).indexOf(" ") != -1) 
        ? (
            log += "<li><span style='color: red; font-weight: bold'>Error: </span>Ha introducido una cadena o algún espacio en la sección Número " + (i + 1) + "</li>",
            error++
        )

        : (!(document.getElementsByName("Ejer5Num")[i].value)) 
        ? (
            log += "<li><span style='color: blue; font-weight: bold'>Error: </span>No ha introducido nada en la sección Número " + (i + 1) + "</li>",
            error++
        )

        : nums[i] = (Number(document.getElementsByName("Ejer5Num")[i].value))
        
        
    }


    (error > 0) 
    ?   document.getElementById("SolEjer5").innerHTML = log
    
    :   (nums[0] > nums[1]) 
        ?   document.getElementById("SolEjer5").innerHTML = "<li><span style='color: green; font-weight: bold'>Evaluación: </span>El número " + nums[0] + " es <b>MAYOR</b> que el número " + nums[1] + "</li>"
        
        : (nums[0] < nums[1]) 
        ?   document.getElementById("SolEjer5").innerHTML = "<li><span style='color: green; font-weight: bold'>Evaluación: </span>El número " + nums[0] + " es <b>MENOR</b> que el número " + nums[1] + "</li>"
        
        :   document.getElementById("SolEjer5").innerHTML = "<li><span style='color: green; font-weight: bold'>Evaluación: </span>El número " + nums[0] + " es <b>IGUAL</b> que el número " + nums[1] + "</li>";
        


    
    
}


// Hacer un bucle que escriba en una página web los encabezamientos desde &lt;H1> hasta &lt;H6> con un texto que ponga "Encabezado de nivel x".
function ejercicio6() {
    var log = "";

    for (let i = 1; i <= 6; i++) {
        log += "<h" + i + " style='color: hsl(" + (Math.round((Math.random() * 359) + 1)) + ", 100%, 50%)'>Encabezado de nivel " + i + "</h" + i + ">";        
    }
    
    document.getElementById("SolEjer6").innerHTML = log;
}



// Hacer un bucle que escriba en una página web los encabezamientos desde &lt;H1> hasta &lt;H6> con un texto que ponga "Encabezado de nivel x" con un while.
function ejercicio7() {
    var log = "";
    var i = 0;

    while (++i <= 6) {
        log += "<h" + i + " style='color: hsl(" + (Math.round((Math.random() * 359) + 1)) + ", 100%, 50%)'>Encabezado de nivel " + i + "</h" + i + ">";
    }
    
    document.getElementById("SolEjer7").innerHTML = log;
}



// Realizar un programa que solicite al usuario un valor, y presente en pantalla la cuenta atrás y luego la cuenta hacia delante. Hacerlo con un bucle for.
function ejercicio8() {
    var log = "";
    var nums = document.getElementsByName("Ejer8Num")[0].value

    nums = comprobarNumero(nums, "SolEjer8");

    if (nums) {

        if (nums >= 200) {
            nums = 200;
        } else if(nums <= 1) {
            nums = 1; 
        } 

        
        log += "<p><b>Cuenta hacia atrás</b><br>";

        for (let i = nums; i >= 1; i--) {
            log += i + " ";            
        }

        log += "</p><p><b>Cuenta hacia delante</b><br>";

        for (let i = 1; i <= nums; i++) {
            log += i + " ";            
        }

        log += "</p>";

        document.getElementById("SolEjer8").innerHTML = log;
    }              

}



// Realizar un programa que solicite al usuario un valor, y presente en pantalla la cuenta atrás y luego la cuenta hacia delante. Hacerlo con un bucle while.
function ejercicio9() {
    var log = "";
    var nums = document.getElementsByName("Ejer9Num")[0].value

    nums = comprobarNumero(nums, "SolEjer9");

    if (nums) {

        if (nums >= 200) {
            nums = 200;
        } else if(nums <= 1) {
            nums = 1; 
        } 

        var i = nums;

        log += "<p><b>Cuenta hacia atrás</b><br>";

        while (i-- >= 1) {
            log += i + " ";
        }

        log += "</p><p><b>Cuenta hacia delante</b><br>";

        while (++i <= nums) {
            log += i + " ";
        }

        log += "</p>";

        document.getElementById("SolEjer9").innerHTML = log;
    }              

}



// Realizar una pirámide de 1 a 50 de la siguiente forma: 1 22 333 4444...
function ejercicio10() {
    var log = "";

    var nums = comprobarNumero(document.getElementsByName("Ejer10Num")[0].value, "SolEjer10");

    if (nums) {

        if (nums >= 50) {
            nums = 50;
        } else if(nums <= 1) {
            nums = 1; 
        } 

        for (let i = 1; i <= nums; i++) {
            for (let j = 1; j <= i; j++) {
                log += i;
                
            }
            log += "<br>";
        }

        document.getElementById("SolEjer10").innerHTML = log;
    }              

}



// Realizar una pirámide de 1 a 50 de la siguiente forma: 1 12 123 1234...
function ejercicio11() {
    var log = "";

    var nums = comprobarNumero(document.getElementsByName("Ejer11Num")[0].value, "SolEjer11");

    if (nums) {

        if (nums >= 50) {
            nums = 50;
        } else if(nums <= 1) {
            nums = 1; 
        } 

        for (let i = 1; i <= nums; i++) {
            for (let j = 1; j <= i; j++) {
                log += j;
                
            }
            log += "<br>";
        }

        document.getElementById("SolEjer11").innerHTML = log;
    }              

}





function comprobarNumero(num, log) {
    if (isNaN(num) || num.indexOf(" ") != -1) {
        document.getElementById(log).innerHTML = "<span style='color: red; font-weight: bold'>Error: </span>Ha introducido una cadena o algún espacio.";
        return null;
    } else if (!num) {
        document.getElementById(log).innerHTML = "<span style='color: blue; font-weight: bold'>Error: </span>No ha introducido nada.";
        return null;
    } else {
        return nums = (Number(num));
    }
}





