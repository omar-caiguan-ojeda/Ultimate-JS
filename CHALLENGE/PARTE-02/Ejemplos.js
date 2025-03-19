//* Ejemplo de CLOUSURE

function fuera() {
    let x = 10;
    return function dentro() {
        return x;
    }
}

const fn = fuera();
console.log(fn()) // 10




//* Manejo de Errores en funcion Asíncrona

async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.error(error, `No se pudo obtener la data`);
    }
}

fetchData();
