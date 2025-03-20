//* Descripción: Escribe una función que reciba un array y devuelva un nuevo array sin elementos duplicados.

function eliminarDuplicados(array) {
    return Array.from(new Set(array));
}
// Utiliza el método Set para eliminar duplicados y luego convierte el Set en un array

console.log('Con la función eliminarDuplicados: ',eliminarDuplicados([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Define un array con elementos duplicados y llama a la función para eliminarlos


// Función para eliminar elementos duplicados de un array
function deleteDuplicados(arr) {
    let resultado = []; // Se crea un nuevo array vacío para almacenar los valores únicos
    
    // Se recorre el array original elemento por elemento
    for (let i = 0; i < arr.length; i++) {
        // Si el elemento actual no está en el array resultado, se agrega
        if (!resultado.includes(arr[i])) {
            resultado.push(arr[i]); // Se añade el elemento único al array resultado
        }
    }
    return resultado; // Se devuelve el array sin duplicados
}

// Prueba de la función con un array que tiene elementos repetidos
console.log('Con la función deleteDuplicados: ',deleteDuplicados([1, 2, 2, 3, 4, 4, 5, 6, 7, 7, 8, 9, 9])); 
