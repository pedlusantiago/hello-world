// faz uma cópia de parte de um array retornando essa cópia
// o array original não é modificado.

const opcoes = ["eu", "voce", "ele", "nós"];
const resultado = opcoes.slice(1, 3);
console.log(resultado);



////////////////////////////////////////////////////////////////////////
function filtrar80(dados) {
    const startIndex = Math.round(dados.length * 0.1);
    const endIndex = Math.round(dados.length * 0.9);
    const filtrado = dados.slice(startIndex, endIndex);

    console.log(filtrado);
};
const dados = [0, 1, 2, 3, 4, 5, 6, 7, 8];

filtrar80(dados);