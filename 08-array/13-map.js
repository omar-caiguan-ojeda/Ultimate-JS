const usuarios = [
    { edad: 17, nombre: 'Nico' },
    { edad: 13, nombre: 'Chanchito' },
    { edad: 25, nombre: 'Felipe' },
    { edad: 36, nombre: 'Leo' },
];

const lista = usuarios
    .filter(usuario => usuario.edad > 17)
    .map(usuario => `<li>${usuario.nombre}</li>`);
    
const html = `<ol>${lista.join('')}</ol>`;

console.log(html);

//!-----------------------------------------------------

// const mapped = usuarios.map(usuario => ({
//         ...usuario,
//         mayor: usuario.edad > 17,
    
// }));

// console.log(mapped);