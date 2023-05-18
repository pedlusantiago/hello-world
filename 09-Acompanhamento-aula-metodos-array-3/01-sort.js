// ordena os elementos do proprio array. Por padrão, a ordenação é de acordo com a tabela UNICODE.
// opicionalmente recebe uma funcao callback que possui dois parametros, sendo o primeiro e o segundo elemento
// a ser comparado. NÃO CRIA CÓPIA DO ARRAY.

const numeros = [1, 80, 51, 2, 47, 68, 3, 79, 93];

// ordnação crescente
numeros.sort((a, b) => {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    }
    return 0;
});

console.log(numeros);

// decrescente
numeros.sort((a, b) => {
    if (a < b) {
        return 1;
    } else if (a > b) {
        return -1;
    }
    return 0;
});

console.log(numeros);

//////////////////////////////////////////////////////

// crescente

numeros.sort((a, b) => {
    return a - b;
});

console.log(numeros);


// descrescente

numeros.sort((a, b) => {
    return b - a;
});

console.log(numeros);
