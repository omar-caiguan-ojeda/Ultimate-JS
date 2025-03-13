
// { id: 1, recurarClave: function(){} }

function Usuario() {
    this.id = 1;                                    // METODOS
    this.recuperarClave = function () {
        console.log("Recuperando clave...");
    }
}
let usuario= new Usuario();
console.log(usuario);