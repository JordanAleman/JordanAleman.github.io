const botonRealizarPedido = document.querySelector("#botonRealizarPedido");
const mostrarPedido = document.querySelector("#mostrarPedido");


botonRealizarPedido.addEventListener("click", () => {
    if (!mostrarPedido.classList.contains("mostrarPedido")) {
        mostrarPedido.classList.add("mostrarPedido");
    }

    let controlTamanio = false;
    let controlIngrediente = false;
    mostrarPedido.innerHTML = "";

    botonesTamanios.forEach(boton => {
        if (boton.classList.contains("tamanioSeleccionado")) {
            controlTamanio = true;
            mostrarPedido.innerHTML = 
                `
                    <h1>Su pedido</h1>
                    <h3><b>Tamaño:</b> ${boton.textContent}</h3>
                    <h3>Ingredientes: </h3>
                    <ul class="listaIngredientes" id="listaIngredientes">
                    </ul>
                `;
        }
    });


    if (controlTamanio == true) {
        botonesIngredientes.forEach(boton => {
            if (boton.classList.contains("seleccionada")) {
                controlIngrediente = true;

                let li = document.createElement("li");
                li.innerHTML = `${boton.textContent}`;
                document.querySelector("#listaIngredientes").appendChild(li);
            }
        });
        
    } else {
        let texto = document.createElement("p");
        texto.innerHTML = `Es necesario escoger un tamaño y al menos un ingrediente`;
        mostrarPedido.appendChild(texto);
    }



    if (controlTamanio == true && controlIngrediente == false) {
        let texto = document.createElement("p");
        texto.innerHTML = `Es necesario escoger al menos un ingrediente`;
        mostrarPedido.appendChild(texto);
    } 
});
