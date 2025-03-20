/* Función que invierte un cadena de texto */

function invertirCadena(cadena) { // Define una función que toma una cadena 'cadena' como parámetro
    return cadena.split('').reverse().join(''); // Divide la cadena en un array, lo invierte y lo une de nuevo
} // Cierra la función

console.log(invertirCadena('Hola Mundo')); // 'odnuM aloH'



/* Función que invierte un array de letras */

function reverseLetras(input) {
    return input.reverse();
}
const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']; // Define un array 'letras' con 10 elementos

console.log(reverseLetras(letras)); // ['j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a']