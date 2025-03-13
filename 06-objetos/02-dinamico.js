const user = { id: 1};

// user = 1; NO PUEDES CAMBIAR EL TIPO DE DATO, PERO SI AGREGAR Y QUITAR PROPIEDADES DE UN OBJETO

user.name= 'Omar';
user.guardar = function () {
    console.log('Guardando', user.name);
}

user.guardar();

delete user.name;
delete user.guardar;
console.log(user);

// const user1 = Object.freeze({ id: 1 });       NO SE PUEDE AGREGAR NI MODIFICAR VALORES
const user1 = Object.seal({ id: 1 });         // NO SE PUEDE AGREGAR, SI MODIFICAR VALORES
user1.name = 'Omar';
user1.id = 2; 

console.log(user1);


const griffindor = {
    
    casa : 'Griffindor',
    ubicacion : 'Torre del castillo',

    asignarPropiedadDinamica (clave, valor) {
        this[clave] = valor;
    }

}

let ejemplo = griffindor.asignarPropiedadDinamica ("Alumno", "Harry Potter");

console.log(ejemplo)