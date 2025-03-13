const letras = ['a', 'b', 1, 'c', 'd', 1];

console.log(letras.indexOf('c'));
console.log(letras.indexOf(1,3));         // puedo buscar por indice
console.log(letras.lastIndexOf(1));

console.log(letras.indexOf(5) !== -1);

console.log(letras.includes('d'));
