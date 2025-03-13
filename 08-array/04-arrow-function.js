//function hola () {
//    return 'Hola Mundo';
//}

const hola = mensaje => 'Hola Mundo' + ' ' + mensaje;
const hola2 = mensaje => {
    return 'Hola Mundo' + ' ' + mensaje;
};

const resultado = hola('chanchito feliz');
console.log(resultado);