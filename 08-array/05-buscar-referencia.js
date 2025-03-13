const usuarios = [
    { id:1, name:'chanchito'}, 
    { id:1, name:'leo'}, 
    { id:2, name:'feliz'}, 
];

//const resultado = usuarios.indexOf({ id:1, name:'chanchito' }); XXXX
// En este caso la busqueda es nula, ya que los objetos se guardan en diferentes direciones 
// y buscara una direccion inexcistente aunque lo que busquemos se igual en su contenido.

//---------------------------------------------------------------------------------------------------

// Cuando busquemos debemos hacerlo mediante una referencia unica de cada elemento.
// predicate -> funcion que devuelve true o false

//const resultado = usuarios.find(usuario => usuario.id === 1); 

const resultado = usuarios.findIndex(usuario => usuario.id === 1); // Debuelve el indice, es este caso 0



console.log(resultado); 
