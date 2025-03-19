// Los Parametros de una función son los valores referenciados que se le pasan a la función al momento de definirla.
// Los argumentos de una función son los valores que se le pasan a la función al momento de llamarla.
function suma(a, b) {
    console.log(arguments);
    return a + b;
}

let resultado = suma(5, 6, 2, 7, 8);
console.log(resultado);
console.log(typeof suma);

