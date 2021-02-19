/* -------------------   Ejercicio 1   ------------------------ */
// var ages = ["b", "a", "z", "o"];
// var palabra = "boba";

// function myFunction() {
// 	for(letra of palabra){
//         function checkAdult(l) {
//         	if (l == letra) {
//      			return true;
//             } else {
//             	return false;
//             }
//     	}
//         if (ages.find(checkAdult)) {
//         	document.getElementById("demo").innerHTML += letra;
//         } else 
//   			document.getElementById("demo").innerHTML += "_";
//         }

// }


/* -------------------------------------------------------------------------- */
/*                                 Ejercicio 2                                */
/* -------------------------------------------------------------------------- */

// ABRIR EN GOOGLE CHROME
const inputEntradaFecha = document.querySelector('#entradaFechaEjer4_2Funciones');
const fechaYHoraActual = document.querySelector('#fechaYHoraActualEjer4_2Funciones');
const resulEjer4_2 = document.querySelector('#solEjer4_2Funciones');

setInterval(() => {
    let hoy = new Date();
    fechaYHoraActual.value = `${String(hoy.getDate()).padStart(2, "0")}/${String(hoy.getMonth() + 1).padStart(2, "0")}/${hoy.getFullYear()} | ${String(hoy.getHours()).padStart(2, "0")}:${String(hoy.getMinutes()).padStart(2, "0")}:${String(hoy.getSeconds()).padStart(2, "0")}`;
}, 1000);



inputEntradaFecha.addEventListener('change', () => {
    resulEjer4_2.innerHTML = "";

	if (inputEntradaFecha.value != "") {
        let fechaParking = new Date(inputEntradaFecha.value);
        console.log('%c⧭', 'color: #00e600', fechaParking);
        console.log('%c⧭ Día: ', 'color: #f2ceb6', fechaParking.getDate()); 
        
        if (fechaParking > new Date()) {
            console.log('%c⧭: ', 'color: #ca7d08', "Back from the future 🚗❗"); 
            resulEjer4_2.innerHTML =  
            `
                <thead class="bftf">
                    <tr>
                        <th style="border-bottom: 0">Back from <</th>
                    </tr>
                    <tr>
                        <th style="border-top: 0">the future 🚗❗</th>
                    </tr>
                </thead>
            `;
        } else {

            resulEjer4_2.innerHTML += 
            `                   
                <thead class="thead-dark">
                    <tr class="text-center">
                        <th scope="col" colspan="2">Factura: </th>
                    </tr>
                </thead>
            `;

            // Aquí realizaremos los cálculos de lo que tendrá que pagar por el parking 
            let hoursPassed = Math.floor(((new Date() - new Date(fechaParking)) / 1000) / 60 / 60);
            let daysPassed = Math.floor(hoursPassed / 24);

            let hoursToday = hoursPassed - (daysPassed * 24);

            let finalPrice;

            // Con esta función calcularemos en todo momento que el precio no superará los 20€ por días.
            function limitPrice(price) {
                if (price > 20) {
                    price = 20;
                }
                return price;
            }

            /* 
                En el caso de que haya transcurrido al menos un día o más, entonces los cálculos a realizar serán ligeramente distintos.
                Tendremos que sumar 20€ por día al precio total más la cantidad de horas del día actual sin que el día actual supere lo 20€. 
                Para que el día actual no supere los 20€, lo mandamos a la función limitPrice para que lo controle.
            */
            if (daysPassed > 0) {
                let daysPrice = daysPassed * 20;
                

                finalPrice = daysPrice + limitPrice(hoursToday * 1.5);

                resulEjer4_2.innerHTML += 
                `
                    <tbody>
                        <tr>
                            <th>Días transcurridos</th>
                            <th>Precio</th>
                        </tr>
                        <tr>
                            <td>${daysPassed}</td>
                            <td>${daysPrice}€</td>
                        </tr>
                        <tr>
                            <th>Horas transcurridas hoy</th>
                            <th>Precio</th>
                        </tr>
                        <tr>
                            <td>${hoursToday}</td>
                            <td>${limitPrice(hoursToday * 1.5)}€</td>
                        </tr>
                        <tr class="bg-success">
                            <th>Precio total</th>
                            <th>${finalPrice}€</th>
                        </tr>
                `;

                if (finalPrice > 10000){
                    resulEjer4_2.innerHTML +=
                    `
                        <tr>
                            <th colspan="2"> Colega, mejor cómprate otro coche que te saldrá más barato 😉</th
                        </tr>
                    ` ; 
                }
                
                resulEjer4_2.innerHTML += 
                `
                    </tbody>
                `;

            /*
                Si no ha pasado ningún día tendremos en consideración que la primera hora se facturará a 1.20€
                También controlaremos que el límite a pagar será de 20€.
            */ 
            } else {
                (hoursToday == 0)
                ? resulEjer4_2.innerHTML += 
                `
                    <tbody>    
                        <tr class="bg-success">
                            <th colspan="2">Naita. Te vas a casa con el mismo dinero que llevabas en el bolsillo 🙌😁</th>
                        </tr>
                    </tbody>
                `
                :   (
                        finalPrice = `${limitPrice((hoursToday * 1.50) - 0.3)}`,
                        resulEjer4_2.innerHTML += 
                            `
                                <tbody>
                                    <tr>
                                        <th>Horas transcurridas hoy</th>
                                        <th>Precio</th>
                                    </tr>
                                    <tr>
                                        <td>${hoursToday}</td>
                                        <td>${limitPrice((hoursToday * 1.50) - 0.3)}€</td>
                                    </tr>    
                                    <tr class="bg-success">
                                        <th>Precio total</th>
                                        <th>${finalPrice}€</th>
                                    </tr>
                                </tbody>
                            `
                    );

            }

        }
    }
    
});


/* -------------------------------------------------------------------------- */
/*                                 Ejercicio 3                                */
/* -------------------------------------------------------------------------- */
const inputVector = document.querySelector("#entradaVectorEjer4_3Funciones");
const solVector = document.querySelectorAll(".solEjer4_3Funciones");
const botonEnviarVector = document.querySelector("#enviarEjer4_3Funciones");

const accordionArray = document.querySelector("#accordionArray");

const controlVector = /[\,| |\-|\_|\:|\.|\/|\\|\&]+/g;

let arrayATrabajar = [];

botonEnviarVector.addEventListener('click', () => {
    arrayATrabajar = inputVector.value.split(controlVector);
    console.log('%c⧭ arrayATrabajar: ', 'color: #f2ceb6', arrayATrabajar);
    // 12, Hola, b, C, d - 4 & 7 A 

    /* Controlar comienzo y final del array para que comience y finalice con caracteres alfanuméricos */
    if (arrayATrabajar[0] === "") {
        arrayATrabajar.shift();
    }
    if (arrayATrabajar[arrayATrabajar.length - 1] === "") {
        arrayATrabajar.pop();
    }

    console.log('%c⧭ arrayATrabajar Modificado: ', 'color: #5845c5', arrayATrabajar);



    solVector[0].innerHTML = arrayATrabajar.join(" - ");
    solVector[1].innerHTML = arrayATrabajar.reverse().join(" - ");
    solVector[2].innerHTML = arrayATrabajar.sort().join(" - ");
    solVector[3].innerHTML = arrayATrabajar.reverse().join(" - ");


    arrayATrabajar.sort((a, b) => a.localeCompare(b));
    arrayATrabajar.sort((a, b) => a - b);

    solVector[4].innerHTML = arrayATrabajar.join(" - ");
    solVector[5].innerHTML = arrayATrabajar.reverse().join(" - ");
    console.log('%c⧭ Array ordenado con condiciones: ', 'color: #901c94', arrayATrabajar);

    accordionArray.style.display = "block";


});


/* -------------------------------------------------------------------------- */
/*                                 Ejercicio 4                                */
/* -------------------------------------------------------------------------- */
/* SECTION Correo */
const inputCorreo = document.querySelector('#entradaCorreoEjer4_4Funciones');
const solCorreo = document.querySelector('#solCorreoEjer4_4Funciones');
const validarCorreo = document.getElementsByName("enviarEjer4_4Funciones");

const gmailMatch = /^([a-zA-Z\d]+[\.]{0,1})+[a-zA-Z\d]+@gmail\.[a-zA-Z]{2,4}$/;

validarCorreo[0].addEventListener('click', () => {
    if ((inputCorreo.value).match(gmailMatch)) {
        solCorreo.classList.remove("text-danger");
        solCorreo.classList.add("text-success");
        solCorreo.innerHTML = "😃🎇 Correcto 🎇😃";
    } else {
        solCorreo.classList.remove("text-success");
        solCorreo.classList.add("text-danger");
        solCorreo.innerHTML = "❗ Lo sentimos, solo se permiten letras (a-z), números (0-9) y puntos no consecutivos (.).";
    }
});

/* SECTION Another address */
const otherMatch = /^([a-zA-Z\d]+([\.]{0,1}|[\_]{0,1}))+[a-zA-Z\d]+@([\a-zA-Z\d]+([\.]{0,1}|[\_]{0,1}))+[a-zA-Z\d]+\.[a-zA-Z]{2,4}$/

validarCorreo[1].addEventListener('click', () => {
    if ((inputCorreo.value).match(otherMatch)) {
        solCorreo.classList.remove("text-danger");
        solCorreo.classList.add("text-success");
        solCorreo.innerHTML = "😃🎇 Correcto 🎇😃";
    } else {
        solCorreo.classList.remove("text-success");
        solCorreo.classList.add("text-danger");
        solCorreo.innerHTML = "❗ Lo sentimos, solo se permiten letras (a-z), números (0-9), puntos no consecutivos (.) , guiones bajos no consecutivos (_) y puntos y guiones no consecutivos.";
    }
});