//* Ejercicio 4: Contar vocales en una cadena de texto
// Crea una función que reciba una cadena de texto y devuelva un objeto con la cantidad de veces que aparece cada vocal.


function contarCadaVocal(srt) {
    const vocales = ['a', 'e', 'i', 'o', 'u']; // Define un array con las vocales
    const resultado = {}; // Crea un objeto vacío para almacenar los resultados
    
    for (let letra of srt) { // Recorre cada letra de la cadena de texto
        if (vocales.includes(letra.toLowerCase())) { // Comprueba si la letra es una vocal
            if (resultado[letra.toLowerCase()]) { // Si la vocal ya está en el objeto
                resultado[letra.toLowerCase()]++; // Incrementa el contador de esa vocal
            } else {
                resultado[letra.toLowerCase()] = 1; // Si no está, inicializa el contador en 1
            }
        }
    }
    return resultado; // Devuelve el objeto con la cantidad de veces que aparece cada vocal
}   

console.log(contarCadaVocal('Hola Mundo')); // { a: 1, o: 2, u: 1 } // Muestra el resultado en la consola




// Función para contar solo las vocales en una cadena de texto
function soloContarVocales(str) {
    const vocales = ['a', 'e', 'i', 'o', 'u']; // Se define un array con las vocales
    let contador = 0; // Se inicializa un contador en 0 para contar las vocales
    
    str = str.toLowerCase(); // Se convierte la cadena a minúsculas para hacer la comparación uniforme
    
    // Se recorre cada caracter de la cadena
    for (let char of str) {
        // Si el caracter actual está en el array de vocales, se incrementa el contador
        if (vocales.includes(char)) {
            contador++; 
        }
    }
    return contador; // Se devuelve el número total de vocales encontradas
}

// Prueba de la función con una cadena de ejemplo
console.log(soloContarVocales("Hola Mundo")); // Salida esperada: 4
