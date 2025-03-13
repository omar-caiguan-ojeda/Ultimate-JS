function Usuario(nombre) {
    this.nombre = nombre;
 
}
console.log(Usuario.name);
console.log(Usuario.length);

const U = Usuario;
let user = new U("Omar");

console.log(user);

function of(Fn, arg) {
    return new Fn(arg);
}

let user1 = of(Usuario, "Leonardo");
console.log(user1);





function returned() {
    return function() {
        console.log('Hola Joao Pessoa');
    }
}


let saludo = returned();
saludo();


