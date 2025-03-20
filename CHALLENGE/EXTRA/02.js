
// Función para ordenar un array de mayor a menor
function ordenarMayor(array) {
    // Utiliza el método sort() con una función de comparación
    // b - a hace que los números más grandes vayan primero
    return array.sort((a, b) => b - a);
}   
// Llama a la función con un array de números y muestra el resultado en la consola
console.log(ordenarMayor([1, 2, 3, 44, 5, 6, 7, 8, 9])); 



// Función para ordenar un array de menor a mayor
function ordenarMenorAMayor(array) {
    // Utiliza el método sort() con una función de comparación
    // a - b hace que los números más pequeños vayan primero
    return array.sort((a, b) => a - b);
}
// Llama a la función con un array de números y muestra el resultado en la consola
console.log(ordenarMenorAMayor([1, 2, 3, 44, 5, 6, 7, 8, 9]));
