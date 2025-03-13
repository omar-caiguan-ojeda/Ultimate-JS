
function crearUsuario(name, email) {
    return {
        email,
        name,
        activo: true,
        recuperarClave: function () {
            console.log('Recuperando clave...');
        },
    };
};

let user1 = crearUsuario ("Omar", "omar.caiguan@gmail.com");
let user2 = crearUsuario ("Chanchito", "chanchito@gmail.com");
let user3 = crearUsuario ('leo', 'leo.caiguan.ojeda@gmail.com');

console.log(user1, user2, user3);