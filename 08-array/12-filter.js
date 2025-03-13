const usuario = [
    { edad: 17, nombre: 'Nico' },
    { edad: 13, nombre: 'Chanchito' },
    { edad: 25, nombre: 'Felipe' },
    { edad: 36, nombre: 'Leo' },
];

const mayores = usuario.filter(usuario => usuario.edad > 17);
const menores = usuario.filter(usuario => usuario.edad <18);

console.log(menores);