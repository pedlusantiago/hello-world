// executa uma função callback passada como argumento, para todos os elementos do array, que retorna
// apenas UM valor. Afunção recebe 4 argumentos:
// 1: acumulador: valor inicial (ou valor do callback anterior)
// 2: valor atual do elemento
// 3: index atual do elemento
// 4: array completo.

const exemplo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let total = exemplo[0];

for (let i = 1; i < exemplo.length; i++) {
    const elementoA = exemplo[i];
    total += elementoA
};

console.log(total);

////////////////////////////////////////////////

const exemplo1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const somaTotal = exemplo1.reduce((a, b, c, d) => {
    return a + b;
});

console.log(somaTotal);