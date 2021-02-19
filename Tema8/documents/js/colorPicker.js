const colorRojo = document.querySelector("#colorRojo");
const colorVerde = document.querySelector("#colorVerde");
const colorAzul = document.querySelector("#colorAzul");

const propiedadColor = document.querySelector("#propiedadColor"); // Select de propiedades

const cajaPrevisualizacionColores = document.querySelector("#cajaPrevisualizacionColores");
const valorColor = document.querySelectorAll(".valorColor");

const bloque2BotonesConfirmar = document.querySelector("#bloque2BotonesConfirmar");
const bloque2BotonesCerrar = document.querySelector("#bloque2BotonesCerrar");


let colorArray = [colorRojo, colorVerde, colorAzul];


// En el caso de que hubiera habido algún error, el borde del input con error estaría en rojo. Al hacerle click a ese input con error, el borde se volverá del color original.
colorArray.forEach(valor => valor.addEventListener("click", () => valor.style.borderColor = "#CED4DA"));


// Esta función transforma un número decimal en hexadecimal. Si el resultado es una String de tamaño menor que 2, se rellena con 0 a la izquierda hasta que el tamaño mínimo sea de 2.
function colorTransform(color) {
    return parseInt(color.value).toString(16).padStart(2, "0");
}

// Este evento permitirá previsualizar el color antes de aplicarlo.
colorArray.forEach((valor, index) => valor.addEventListener("change", () => {
    cajaPrevisualizacionColores.style.backgroundColor = `#${colorTransform(colorRojo)}${colorTransform(colorVerde)}${colorTransform(colorAzul)}`
    valor.style.borderColor = "#CED4DA";
    valorColor[index].innerHTML = valor.value;
}));


bloque2BotonesConfirmar.addEventListener("click", () => {
    let controlError = false;

    function controlColor(color) {
        if (isNaN(color.value) || color.value < 0 || color.value > 255 || color.value == "") {
            color.style.borderColor = "red";
            controlError = true;
        }
    }

    colorArray.forEach(valor => controlColor(valor));
    
    if (!controlError) {
        let colorHex = `#${colorTransform(colorRojo)}${colorTransform(colorVerde)}${colorTransform(colorAzul)}`;
        opener.document.cookie = `${propiedadColor.options[propiedadColor.selectedIndex].value}=${colorHex}`;

        (propiedadColor.selectedIndex % 2 == 0)
        ?   opener.document.querySelectorAll(`.${propiedadColor.options[propiedadColor.selectedIndex].value}`).forEach(valor => valor.style.backgroundColor = colorHex)
        :   opener.document.querySelectorAll(`.${propiedadColor.options[propiedadColor.selectedIndex].value}`).forEach(valor => valor.style.color = colorHex);
    } else {
        console.log("Error en los colores")
    }

});


bloque2BotonesCerrar.addEventListener("click", () => window.close());

