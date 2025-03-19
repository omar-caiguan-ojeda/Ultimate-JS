// Objetivo: Crear un formulario que solicite un nombre y muestre un mensaje de éxito o error según la longitud del nombre ingresado
// 1. Crear un formulario con un campo de texto para ingresar un nombre y un botón para enviar el formulario
// 2. Crear un elemento para mostrar mensajes de éxito o error
// 3. Escuchar el evento 'submit' del formulario y ejecutar una función anónima que evite el envío predeterminado
// 4. Obtener el valor del campo de texto y almacenarlo en una constante
// 5. Verificar si la longitud del nombre es menor a 3 caracteres y mostrar un mensaje de error si es así
// 6. Mostrar un mensaje de éxito con el nombre ingresado si la longitud es 3 o más caracteres
// 7. Cambiar el color del texto del mensaje según sea de éxito (verde) o error (rojo)
    
document.getElementById("miFormulario").addEventListener("submit", (e) => { // Busca el elemento con id 'miFormulario' y escucha el evento 'submit', ejecutando una función anónima
    e.preventDefault();                                                    // Evita que el formulario se envíe y recargue la página (comportamiento predeterminado)
    const nombre = document.getElementById("nombre").value;                // Obtiene el valor del campo con id 'nombre' y lo almacena en la constante 'nombre'
    const resultado = document.getElementById("resultado");                // Selecciona el elemento con id 'resultado' para mostrar mensajes y lo almacena en 'resultado'

    if (nombre.length < 3) {                                               // Verifica si la longitud del texto en 'nombre' es menor a 3 caracteres
        resultado.textContent = "El nombre debe tener al menos 3 caracteres"; // Si es menor a 3, muestra un mensaje de error en el elemento 'resultado'
        resultado.style.color = "red";                                     // Cambia el color del texto de 'resultado' a rojo para indicar error
    } else {                                                               // Si la longitud es 3 o más, entra en este bloque
        resultado.textContent = `Éxito: Hola ${nombre}`;                   // Muestra un mensaje de éxito con el nombre ingresado en 'resultado'
        resultado.style.color = 'green';                                   // Cambia el color del texto de 'resultado' a verde para indicar éxito
    }                                                                      // Cierra el bloque 'if-else'
})                                                                         // Cierra la función anónima y el evento 'addEventListener'