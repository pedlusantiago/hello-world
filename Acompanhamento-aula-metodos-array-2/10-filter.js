//  cria um novo array com todos os elementos correspondentes a condicao implementada na funcao
// callback passada como argumento. NÃO MODIFICA O ARRAY ORIGINAL.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

const resultado = numeros.filter((numero) => {
    return numero % 3 === 0;
});

console.log(resultado);