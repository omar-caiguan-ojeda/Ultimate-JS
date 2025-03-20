// Funcion  para encontrar el numero mayor de un array

function encontrarMayor(array) {
    return Math.max(...array);
}

console.log(encontrarMayor([1, 2, 3, 44, 5, 6, 7, 8, 9])); // 9


function mayor(array) {
    if (array.length === 0) {
        return 'Array vacío';
    }
    mayor = array[0];
    for (let i=1; i<array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i];
        }
    }
    return mayor;
}

console.log(mayor([1, 2, 3, 4, 50, 6, 7, 8, 9]));