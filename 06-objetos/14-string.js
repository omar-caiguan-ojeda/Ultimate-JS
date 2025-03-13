const saludo = "Hola Mundo!";

const despedida = new String ('Chau Mundo Cruel');

console.log(typeof saludo);
console.log(typeof despedida);

console.log(saludo.length);
console.log(saludo.indexOf('Mu'));
console.log(saludo.indexOf('Xu'));
console.log(saludo.includes('la'));
let nuevoSaludo = saludo.replace('Mundo', 'Omar');
console.log(nuevoSaludo, saludo);
console.log(saludo.toLowerCase());
console.log(saludo.toUpperCase());

console.log(saludo.substring(0,4));
console.log(saludo.substr(2,4));        // DEPRECADO

const espacios = "    Hola     Mundo!    ";
console.log(espacios.trim());
console.log(espacios.trimStart());
console.log(espacios.trimEnd());