function temporizador(segundos) {         // Define una función que toma un número de segundos como parámetro
    let tiempo = segundos;                // Inicializa una variable 'tiempo' con el valor de 'segundos'
    const intervalo = setInterval(() => {  // Crea un intervalo que ejecuta una función cada 1000ms (1 segundo) y guarda su ID
        console.log(tiempo);              // Imprime el valor actual de 'tiempo' en la consola
        tiempo--;                         // Disminuye 'tiempo' en 1 en cada iteración
        if (tiempo < 0) {                 // Verifica si 'tiempo' es menor que 0
            clearInterval(intervalo);      // Si 'tiempo' es menor que 0, detiene el intervalo usando su ID
        }                                 // Cierra el bloque del 'if'
    }, 1000);                             // Especifica que el intervalo se ejecuta cada 1000ms (1 segundo)
}                                         // Cierra la función

temporizador(9);                         // Llama a la función con 9 segundos como argumento
