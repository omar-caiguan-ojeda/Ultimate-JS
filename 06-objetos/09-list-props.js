const punto = {
    x: 10,
    y: 15,
    dibujar () {
        console.log('Dibujando...');
    }
}

//delete punto.dibujar;


if ('dibujar' in punto) {
    punto.dibujar();
}

//let key = Object.keys(punto);        ES LO MISMO
// console.log(Object.keys(punto));    // console.log(Key);

for (let llave of Object.keys(punto)) {
    console.log (llave, punto[llave]);
}

for (let entry of Object.entries(punto)) {
    console.log(entry);
}

// ESTE METODO ES NUEVO

for (let llave in punto) {
    console.log(llave, punto[llave]);
}
