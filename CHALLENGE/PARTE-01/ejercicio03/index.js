/* Filtra un array para obtener solo los números pares */

function obtenerPares(array) { // Define una función que toma un array 'array' como parámetro           
    return array.filter((item) => item % 2 === 0); // Usa filter para obtener solo los elementos pares
} // Cierra la función
console.log(obtenerPares([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [2, 4, 6, 8]



const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Define un array de números
const pares = numeros.filter(num => num % 2 === 0); // Usa filter para obtener solo los elementos pares
console.log(pares); // [2, 4, 6, 8] // Muestra los números pares en la consola