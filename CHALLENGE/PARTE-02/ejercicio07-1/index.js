//* Crear un botón que al hacer click muestre un mensaje en un párrafo.
//* El mensaje debe ser: ¡Botón Clicado!

document.getElementById("miBoton").addEventListener("click", function() {
    document.getElementById("mensaje").innerHTML = "¡Botón Clicado!";
})