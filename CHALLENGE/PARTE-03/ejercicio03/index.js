const contenedor = document.getElementById("contenedor"); // Obtiene el elemento con id 'contenedor' y lo almacena en 'contenedor'
const tabla = document.createElement("table");            // Crea un elemento <table> y lo almacena en 'tabla'

for (let i=1; i<= 3; i++) {                                // Inicia un bucle for con un contador 'i' que va de 1 a 3
    const fila = document.createElement("tr");             // Crea un elemento <tr> (fila de tabla) y lo almacena en 'fila'
    for (let j=1; j<= 3; j++) {                            // Inicia un bucle for con un contador 'j' que va de 1 a 3
        const celda = document.createElement("td");        // Crea un elemento <td> (celda de tabla) y lo almacena en 'celda'
        celda.textContent = `Fila ${i}, Columna ${j}`;                   // Asigna el texto con los valores de 'i' y 'j' a la celda
        fila.appendChild(celda);                           // Agrega la celda como hijo de la fila
    }                                                      // Cierra el bucle 'for' interno
    tabla.appendChild(fila);                               // Agrega la fila como hijo de la tabla
}                                                          // Cierra el bucle 'for' externo

contenedor.appendChild(tabla);                             // Agrega la tabla como hijo del contenedor