/* Función que invierte un cadena de texto */

function invertirCadena(cadena) { // Define una función que toma una cadena 'cadena' como parámetro
    return cadena.split('').reverse().join(''); // Divide la cadena en un array, lo invierte y lo une de nuevo
} // Cierra la función

console.log(invertirCadena('Hola Mundo')); // 'odnuM aloH'