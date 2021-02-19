const slides = document.querySelectorAll(".mySlides");
const dots = document.querySelectorAll(".dot");
const dotsScroll = document.querySelector("#contenido-dots");

const contenidoCuerpoFondo = document.querySelector("#contenido-cuerpo");

/* -------------------------------------------------------------------------- */
/*          Esta funciones controlarán si se muestra Vector o Correo          */
/* -------------------------------------------------------------------------- */
let slideIndex = 0;
showSlides(slideIndex);

dots.forEach((valor, index) => {
    valor.addEventListener('click', () => {
        slideIndex = index;
        console.log('%c⧭ slideIndex: ', 'color: #1bb13e', slideIndex);
        showSlides(slideIndex);
    });
})


function showSlides(posicionSlide) {
    if (posicionSlide > slides.length - 1) {
        slideIndex = 0;
    }

    if (posicionSlide < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach((valor) => valor.style.display = "none");
    dots.forEach((valor) => valor.classList.remove("active"));

    contenidoCuerpoFondo.style.backgroundImage = `url(./img/Eclipse${slideIndex}.png)`;

    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("active");
}




/* -------------------------------------------------------------------------- */
/*                            Flecha de los slider                            */
/* -------------------------------------------------------------------------- */
document.querySelector('#goTop').addEventListener('click', function smoothscroll() {
    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

    /*
        Esta variable controlará la posición de nuestra caja 'contenido-dots' en todo momento, 
        sin importae en qué punto de la página se encuentre y qué tamaño tenga.
        Para ello siempre calcularemos la posición relativa del top de la caja y le sumaremos
        la posición actual de la página, para así poder llevarnos siempre a donde nos interesa.
    */
    let scrollFunciones = dotsScroll.getBoundingClientRect().top + currentScroll;

    /* 
        dotsScroll.getBoundingClientRect().top: Si usamos esta función desde el top de nuestra página
        vemos que tiene un tamaño que será fijo de 642, valor que usaremos para que la flechita nos 
        mande a esta posición 
    */
    if (currentScroll > scrollFunciones) {
        window.scrollTo(0, currentScroll - (currentScroll / 31));
        window.requestAnimationFrame(smoothscroll);
    }
});




/* -------------------------------------------------------------------------- */
/*                           Copiar en portapapeles                           */
/* -------------------------------------------------------------------------- */
const copiaGmail = document.querySelector('#copiaGmail');
const copiaAnother = document.querySelector('#copiaAnother');


let copiarAPortapapeles = (elementoACopiar) => {
    let aux = document.createElement("input");
    aux.setAttribute("value", elementoACopiar);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
   // document.body.removeChild(aux);
};

copiaGmail.addEventListener('click', () => {
    copiarAPortapapeles("/^([a-zA-Z\d]+[\.]{0,1})+[a-zA-Z\d]+@gmail\.[a-zA-Z]{2,4}$/g");
});

copiaAnother.addEventListener('click', () => {
    copiarAPortapapeles("/^([a-zA-Z\d]+([\.]{0,1}|[\_]{0,1}))+[a-zA-Z\d]+@([\a-zA-Z\d]+([\.]{0,1}|[\_]{0,1}))+[a-zA-Z\d]+\.[a-zA-Z]{2,4}$/");
});





/* -------------------------------------------------------------------------- */
/*              Control del ejercicio 3. Creación de resultados               */
/* -------------------------------------------------------------------------- */
document.body.onload = (() => {
    let contadorCollapseArray = 1;
    let contenidoResultadosEjercicio3 = 
        `
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="card">
                    <a class="card-header" data-toggle="collapse" href=".multiCollapse">
                        <div class="collapsed card-link">
                            Todos
                        </div>
                    </a>
                </div>
            </div>
        </div>
        `;

    let contenidoResultadosArrayEjercicio3 = ["Vector:", "Invertido:", "Orden defecto:", "Invertido defecto:", "Orden condiciones:", "Invertido condiciones:"]

    let plantillaResultadosEjercicio3 = (contadorCollapseArray, contenidoResultadosArrayEjercicio3) => {
    return `
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div class="card">
                    <a class="card-header" data-toggle="collapse" href="#collapse${contadorCollapseArray}Array">
                        <div class="collapsed card-link">
                        ${contenidoResultadosArrayEjercicio3[contadorCollapseArray - 1]}
                        </div>
                    </a>
                    <div id="collapse${contadorCollapseArray++}Array" class="collapse multiCollapse">
                        <div class="card-body">
                            <p class="solEjer4_3Funciones"></p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div class="card">
                    <a class="card-header" data-toggle="collapse" href="#collapse${contadorCollapseArray}Array">
                        <div class="collapsed card-link">
                        ${contenidoResultadosArrayEjercicio3[contadorCollapseArray - 1]}
                        </div>
                    </a>
                    <div id="collapse${contadorCollapseArray++}Array" class="collapse multiCollapse">
                        <div class="card-body">
                            <p class="solEjer4_3Funciones"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    };

    for (let index = 0; index < 3; index++) {
        contenidoResultadosEjercicio3 += plantillaResultadosEjercicio3(contadorCollapseArray, contenidoResultadosArrayEjercicio3);
        contadorCollapseArray += 2;
    }
        

    document.querySelector('#creacionResultadosVector').innerHTML = contenidoResultadosEjercicio3;
})();