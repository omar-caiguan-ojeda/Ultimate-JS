console.log(
    Math.PI,
    Math.abs(-15),
    Math.round(15.5),
    Math.round(15.4),       // redondea de 5hacia arriba, y de menos de 5 hacia abajo
    Math.floor(15.9),       // redondea hacia abajo
    Math.ceil(15.00001),        // redondea hacia arriba
    Math.pow(2,3),
    Math.sqrt(9),
);

console.log(Math.random());

function getRandom(min, max) {
    return Math.random() * (max - min) * min;
}

console.log(getRandom(1, 10));