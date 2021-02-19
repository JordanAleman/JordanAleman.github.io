// document.body.scrollHeight: Devuelve la altura y la anchura entera de un elemento, incluyendo el padding.
// window.innerHeight: Devuelve la altura y la anchura del frame actual, es decir, del tamaño de la ventana en cualquier momento.

const altura = document.body.scrollHeight - window.innerHeight;
const fondo = document.querySelector('#fondo');

// window.onscroll: Función que se ejecuta automáticamente en la ventana en cuanto realizamos un scroll.
window.onscroll = () => {

    // window.pageYOffset: La altura que ha recorrido el scroll vertical desde el top en píxeles.
    if (window.innerHeight <= 640) {
        var velocidad = 600;
    } else {
        var velocidad = 900;
    }
    const anchoFondo = (window.pageYOffset / altura) * velocidad;

    if (anchoFondo <= 100) {
        fondo.style.width = anchoFondo + '%';
    } else {
        fondo.style.width = '100%';
    }
}