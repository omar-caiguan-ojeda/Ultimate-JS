//* Ejercicio 7: Lista de la compra
// Vamos a crear una lista de la compra, en la que se pueda agregar elementos a la lista.


function agregarItem() {                          // Define una función llamada agregarItem sin parámetros
    const input = document.getElementById('entrada'); // Obtiene el elemento HTML con id 'entrada' (un campo de texto) y lo almacena en 'input'
    const valor = input.value;                    // Extrae el valor actual del campo de entrada y lo guarda en 'valor'
    if (valor) {                                  // Verifica si 'valor' no está vacío (si tiene contenido)
        const li = document.createElement('li');  // Crea un nuevo elemento <li> (ítem de lista) y lo almacena en 'li'
        li.textContent = valor;                   // Asigna el valor del input como contenido de texto del elemento <li>
        document.getElementById("lista").appendChild(li); // Busca el elemento con id 'lista' (una lista <ul> o <ol>) y agrega el <li> como hijo
        input.value = '';                         // Limpia el campo de entrada estableciendo su valor a una cadena vacía
    }                                             // Cierra el bloque 'if'
}                                                 // Cierra la función