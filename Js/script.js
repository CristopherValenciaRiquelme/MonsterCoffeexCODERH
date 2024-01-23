// Variables para acceder a elementos del DOM
const inputPlato = document.getElementById("plato");
const inputPrecio = document.getElementById("precio");
const listaComanda = document.getElementById("lista-comanda");
const spanTotal = document.getElementById("total");

let total = 0;

// Función para agregar un elemento a la comanda
function agregarItem() {
    const plato = inputPlato.value;
    const precio = parseFloat(inputPrecio.value);

    if (plato && !isNaN(precio) && precio > 0) {
        const nuevoItem = document.createElement("li");
        nuevoItem.textContent = `${plato}: $${precio.toFixed(2)}`;
        listaComanda.appendChild(nuevoItem);

        total += precio;
        spanTotal.textContent = total.toFixed(2);

        // Limpiar los campos de entrada
        inputPlato.value = "";
        inputPrecio.value = "";
    } else {
        alert("Ingrese un plato válido y un precio mayor a cero.");
    }
}