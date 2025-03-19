function encontrarDuplicados(array) { // Define una función que toma un array como parámetro
    const vistos = new Set();        // Crea un Set vacío para almacenar elementos ya vistos
    const duplicados = new Set();    // Crea un Set vacío para almacenar los elementos duplicados
    array.forEach((element) => {     // Itera sobre cada elemento del array usando forEach
        if (vistos.has(element))     // Verifica si el elemento ya está en el Set 'vistos'
            duplicados.add(element)  // Si ya fue visto, lo agrega al Set 'duplicados'
        else vistos.add(element);    // Si no fue visto, lo agrega al Set 'vistos'
    })                               // Cierra el bloque de la función forEach
    return [...duplicados]           // Convierte el Set 'duplicados' en un array y lo devuelve
};

console.log('Los números duplicados encontrados son: ', encontrarDuplicados([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]