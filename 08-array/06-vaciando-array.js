// let arr = [1, 2];        ---> 1RA OPCION
// arr = [];

// let arr = [1, 2];
// let arr2 = arr;
// arr = [];
// console.log(arr2, arr);

// let arr = [1, 2];        ---> 2DA OPCION
// arr.length = 0;
// console.log(arr);

// let arr = [1, 2];        ---> 3RA OPCION
// arr.splice(0, arr.length);
// console.log(arr);

// let arr = [1, 2];        ---> NO RECOMENDABLE 
// while (arr.length > 0) {
//     arr.pop();
// };
// console.log(arr);
 

function Persona (nombre, apellido, edad) {
    this.nombre = nombre,
    this.apellido = apellido,
    this.edad = edad
};

let persona1 = new Persona ('Leo', 'Caiguan', 37);
let persona2 = new Persona ('Omar', 'Ojeda', 38);

console.log(persona1, persona2);


