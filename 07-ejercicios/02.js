function createUsuario(name) {
    return {
        id: Math.random(),
        name,
    }
}

let user = createUsuario('Omar');
let user2 = createUsuario('Leonardo');
console.log(user, user2);