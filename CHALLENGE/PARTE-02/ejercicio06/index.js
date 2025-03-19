//* Esta función aplana un array de arrays en un solo array.

function aplanarArray(arr) { // Define una función que toma un array 'arr' como parámetro
    // return arr.flat(Infinity); // Devuelve el array 'aplanado' (sin sub-arrays)
    return arr.flat(); // Devuelve el array 'aplanado' (sin sub-arrays)
}                  // Cierra la función aplanarArray                    
console.log(aplanarArray([[1, 2, [5, 6]], [3, 4], [5, 6]])); // [1, 2, 3, 4, 5, 6]


/*
function aplanarArray(arr) { 
    return arr.reduce(flat, item) => {
        flat.concat(Array.isArray(item) ? aplanarArray(item) : item, []);
    }
}                              
console.log(aplanarArray([[1, 2], [3, 4], [5, 6]])); // [1, 2, 3, 4, 5, 6]
*/

function aplanarArray2(arr) { // Define una función que toma un array 'arr' como parámetro
    return arr.reduce((flat, item) => { // Usa reduce para acumular elementos en un array plano
        return flat.concat(Array.isArray(item) ? aplanarArray(item) : item); // Concatena elementos, recurriendo si es un array
    }, []); // Inicia con un array vacío como valor inicial
} // Cierra la función
console.log(aplanarArray2([[1, 2, [5, 6]], [3, 4], [5, 6]])); // [1, 2, 3, 4, 5, 6]