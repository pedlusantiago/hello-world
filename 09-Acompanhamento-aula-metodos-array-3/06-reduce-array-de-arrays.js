const array = [
    [0, 1],
    [2, 3, 4],
    [14, 22, 98]
];
// a: acumulador
// b: valor atual
// c: indice
// d: array total
const arrayUnico = array.reduce((a, b, c, d) => {
return [...a, ...b];
}, []);

console.log(arrayUnico.join(', '));