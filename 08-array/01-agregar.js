const letras = ['a', 'b'];

// agregar al final del array
letras.push('c', 'd');

// agregar al comienzo
letras.unshift('y', 'z');

// agregar segun el indice
letras.splice(3, 0, 1, 2);

console.log(letras);