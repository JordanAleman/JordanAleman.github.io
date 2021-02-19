let posX;
let can;
let contexto;
let direccion;

const botonCanvas = document.querySelector("#activarCanvas");

botonCanvas.addEventListener("click", function() {
                    botonCanvas.innerHTML = "¡Más caña!";
                    can = document.querySelector("#miCanvas");
                    contexto = can.getContext("2d");
                    posX=15;
                    direccion = 0;
                    setInterval("dibujar()",2);
                });

function dibujar(direction) {
        if (direccion == 0)
            posX++;
        else
            posX--;
            if (posX==250)
                direccion = 1;
            if (posX==50)
                direccion = 0;

        can.width = can.width; // limpia el canvas
        contexto.strokeStyle = "#ffffff";
        contexto.fillStyle = document.querySelector("#monigote");


        contexto.beginPath();
        contexto.arc(posX,80,30,0,Math.PI*2,true);
        contexto.closePath();
        contexto.stroke();
        contexto.fill();
}