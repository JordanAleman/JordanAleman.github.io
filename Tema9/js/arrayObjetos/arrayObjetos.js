const rellenarConArrayDeObjetosMotos = document.querySelector("#rellenarConArrayDeObjetosMotos");
const rellenarConArrayDeObjetosCoches = document.querySelector("#rellenarConArrayDeObjetosCoches");


let persona1 = new persona("43456142B", "Leticia", "Cia Leti","Altas praderas, casa blanca");
let persona2 = new persona("45496842Z", "Samanta", "Anta Sam","Liberted, Skyworld");
let persona3 = new persona("44426462H", "Sofía", "Fía So","Night street, Subur");

let automoviles = [];

automoviles.push(new moto("1234SDF", "Susuki", "Fire", persona1, 2, "C"));
automoviles.push(new moto("GC1234SG", "Piaggio", "Zip", persona2, 2, "L"));
automoviles.push(new coche("4322SZF", "Audi", "TT", persona3, 5, "Rojo"));
automoviles.push(new coche("8118SD", "Fiat", "Punto", false, 3, "Blanco"));


rellenarConArrayDeObjetosMotos.innerHTML = 
    `
        <table class="table table-striped mt-3">
            <thead class="thead-dark">
            <tr>
                <th scope="col">Matrícula</th>
                <th scope="col">Marca</th>
                <th scope="col">Modelo</th>
                <th scope="col">Estado</th>
                <th scope="col">Ruedas</th>
                <th scope="col">Tipo</th>
                <th scope="col" colspan="2">Propietario</th>
            </tr>
            </thead>
            <tbody id=rellenoTablaMoto>
            </tbody>
        </table>       
    `;

    rellenarConArrayDeObjetosCoches.innerHTML = 
    `
        <table class="table table-striped mt-3">
            <thead class="thead-dark">
            <tr>
                <th scope="col">Matrícula</th>
                <th scope="col">Marca</th>
                <th scope="col">Modelo</th>
                <th scope="col">Estado</th>
                <th scope="col">Puertas</th>
                <th scope="col">Color</th>
                <th scope="col" colspan="2">Propietario</th>
            </tr>
            </thead>
            <tbody id=rellenoTablaCoche>
            </tbody>
        </table>       
    `;

automoviles.forEach(vehiculo => {
    if (vehiculo instanceof moto) {
        document.querySelector("#rellenoTablaMoto").innerHTML += 
            `
                <tr>
                    <td>${vehiculo.matricula}</td>
                    <td>${vehiculo.marca}</td>
                    <td>${vehiculo.modelo}</td>
                    <td>${vehiculo.estado}</td>
                    <td>${vehiculo.ruedas}</td>
                    <td>${vehiculo.tipo}</td>
                    <td>${vehiculo.obtenerPropietario()}</td>
                </tr>
            `;        
    } else if (vehiculo instanceof coche) {
        document.querySelector("#rellenoTablaCoche").innerHTML += 
            `
                <tr>
                    <td>${vehiculo.matricula}</td>
                    <td>${vehiculo.marca}</td>
                    <td>${vehiculo.modelo}</td>
                    <td>${vehiculo.estado}</td>
                    <td>${vehiculo.puertas}</td>
                    <td>${vehiculo.color}</td>
                    <td>${vehiculo.obtenerPropietario()}</td>
                </tr>
            `;      
    }
});
