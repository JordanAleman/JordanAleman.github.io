const contenidoImagenCompleta = document.querySelector("#contenidoImagenCompleta");

contenidoImagenCompleta.innerHTML =
    `
        <p>${location.search.substring(location.search.indexOf("=") + 1, location.search.length)}</p>
        <img src="${location.search.substring(location.search.indexOf("=") + 1, location.search.length)}" alt="${location.search.substring(location.search.indexOf("=") + 1, location.search.length)}">
    `;
        
document.querySelector("#botonCerrar").addEventListener("click", () => window.close());