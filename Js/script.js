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

//////////////////////////////////// barra de nav///////////////////

document.addEventListener('DOMContentLoaded', function() {
    var currentPage = window.location.pathname.split('/').pop();
    var navLinks = document.querySelectorAll('.navbar-nav a');

    navLinks.forEach(function(link) {
        var linkPath = link.getAttribute('href').split('/').pop();

        if (linkPath === currentPage) {
            link.classList.add('active');
        }
    });
});



/////////////////////////////EVENTOS///////////////////////////



  

  document.addEventListener('DOMContentLoaded', function() {
   
    document.addEventListener('DOMContentLoaded', function () {
        // Agrega un controlador de eventos al formulario
        document.getElementById('formulario').addEventListener('submit', function (event) {
          // Detiene el envío del formulario para evitar que se recargue la página
          event.preventDefault();
      
          // Puedes agregar aquí tu lógica para manejar el evento y mostrar información en la consola
          console.log('Formulario enviado');
      
          // Accede a los valores de los campos del formulario si es necesario
          var nombre = document.getElementById('nombrePedidol1').value;
          var numeroPersonas = document.getElementById('numeroDePersonas').value;
          var listo = document.getElementById('Check1').checked;
      
          console.log('Nombre:', nombre);
          console.log('Número de personas:', numeroPersonas);
          console.log('Listo:', listo);
    
            // Redirige a la página de compra.html
            window.location.href = '../HTML_MonsterCoffe/compra.html';
       
        });
      });
});