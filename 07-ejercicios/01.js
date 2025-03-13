function Usuario(name) {
    this.id = Math.random();
    this.name = name;
}

let user = new Usuario ('Omar');
let user2 = new Usuario ('Leonardo');
console.log(user, user2);

