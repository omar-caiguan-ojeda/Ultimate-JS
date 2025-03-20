//* Descripción: Escribe una función que imprima los números del 1 al n. Pero para múltiplos de 3 imprime "Fizz", para múltiplos de 5 imprime "Buzz", y para múltiplos de ambos imprime "FizzBuzz".

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}
// Ejecuta la función con un número de ejemplo      
console.log('Función FizzBuzz',fizzBuzz(15)); // Debe imprimir los valores del 1 al 15, sustituyendo los múltiplos de 3 por 'Fizz', los de 5 por 'Buzz' y los de ambos por 'FizzBuzz'