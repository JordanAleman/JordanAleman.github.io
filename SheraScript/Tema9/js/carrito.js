const rellenarPedido = document.querySelector("#rellenarPedido");

if (document.cookie == "") {
    rellenarPedido.innerHTML = "Aún no ha añadido ningún producto a la cesta";
} else {
    let cookiesArray = ((document.cookie).replace(/ /g, "")).split(";").sort();

    rellenarPedido.innerHTML = 
    `
        <table class="table table-striped mt-3">
            <thead class="thead-dark">
            <tr>
                <th scope="col" colspan="2" style="text-align:center">Funciones</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Artículo</th>
                <th scope="col">Precio</th>
                <th scope="col">Total</th>
            </tr>
            </thead>
            <tbody id=rellenoTabla>
            </tbody>
        </table>       
    `;

    let total = 0;
    cookiesArray.forEach((elemento, index) => {
        total += parseInt((elemento.split("=")[1])) * parseInt((elemento.split("=")[0].split("/")[1]))
        document.querySelector("#rellenoTabla").innerHTML += 
            `
                <tr>
                    <td class="bg-primary botonesCantidades botonMasCantidadCarrito">➕</td>
                    <td class="bg-danger botonesCantidades botonMenosCantidadCarrito">➖</td>
                    <th scope="row">${(elemento.split("=")[1])}</th>
                    <td class="articuloCarrito">${(elemento.split("=")[0].split("/")[0])}</td>
                    <td>${(elemento.split("=")[0].split("/")[1])}€</td>
                    <td>${parseInt((elemento.split("=")[1])) * parseInt((elemento.split("=")[0].split("/")[1]))}€</td>
                </tr>
            `;
        if (index == cookiesArray.length - 1) {
            document.querySelector("#rellenoTabla").innerHTML += 
            `
                <tr>
                    <td colspan="2"></td>
                    <th colspan="3" class="bg-success">Total</th>
                    <th class="bg-success">${total}€</th>
                </tr>
            `;
        }

    });


    const botonMasCantidadCarrito = document.querySelectorAll(".botonMasCantidadCarrito");
    const botonMenosCantidadCarrito = document.querySelectorAll(".botonMenosCantidadCarrito");
    const articuloCarrito = document.querySelectorAll(".articuloCarrito");


    botonMasCantidadCarrito.forEach((boton, index) => {
        boton.addEventListener("click", () => {
            cookiesArray.forEach(cookie => {
                if (cookie.search(`${articuloCarrito[index].textContent}`) != -1) {
                    document.cookie = `${cookie.substring(0, cookie.length - 1)}${parseInt(cookie.substring(cookie.length - 1, cookie.length)) + 1}`;
                    location.reload();
                }
            })
        });
    });

    botonMenosCantidadCarrito.forEach((boton, index) => {
        boton.addEventListener("click", () => {
            cookiesArray.forEach(cookie => {
                if (cookie.search(`${articuloCarrito[index].textContent}`) != -1) {
                    if (cookie.substring(cookie.length - 1, cookie.length) != 0) {
                        document.cookie = `${cookie.substring(0, cookie.length - 1)}${parseInt(cookie.substring(cookie.length - 1, cookie.length)) - 1}`;
                        location.reload();
                    }
                }
            })
        });
    });

}
