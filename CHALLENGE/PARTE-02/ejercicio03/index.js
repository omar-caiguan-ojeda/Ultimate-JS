function contarVocales(str) {
    const vocales = /[aeiou]/gi;
    const matches = str.match(vocales);
    return matches ? matches.length : 0;
}

console.log(`La cantidad de vocales son:`,contarVocales('Hola Mundo')); // 4