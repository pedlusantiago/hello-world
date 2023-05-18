// testa se todos os elementos do array passam pelo teste implementado na funcao callback, passada como argumento
// e retorna TRUE ou FALSE

const frutas = ['abacaxi', 'manga', 'melancia'];

const resultado = frutas.every(function (elemento) {
    return elemento !== 'manga';
});

console.log(resultado);


const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

const resultadoN = numeros.every((elementoN) => {
    return elementoN < 20
});

console.log(resultadoN);