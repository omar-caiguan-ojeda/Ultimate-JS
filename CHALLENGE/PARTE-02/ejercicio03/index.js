function contarVocales(str) {           // Define una función que toma una cadena 'str' como parámetro
    const vocales = /[aeiou]/gi;       // Crea una expresión regular para coincidir con vocales (a, e, i, o, u), ignorando mayúsculas
    const matches = str.match(vocales); // Busca todas las vocales en 'str' y almacena las coincidencias en un array (o null si no hay)
    return matches ? matches.length : 0; // Devuelve la cantidad de vocales encontradas, o 0 si no hay coincidencias
}
console.log(`La cantidad de vocales son:`,contarVocales('Hola Mundo Loco')); // 6