const saludo = "Hola \\mundo!\nBienvenidos a\t \"Ultime JavaScript\" :)";

const nombre = 'Omar';
const apellido = 'Caiguan';

function plantilla (nombre) {
    return `Hola ${nombre}!!!

Bienvenidos a "Ultimate JavaScript" :)

Cariños Nico.
`
};
console.log(plantilla('Chanchito Feliz'));