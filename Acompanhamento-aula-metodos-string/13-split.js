// O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array.
// A divisão é feita procurando um padrão, onde o padrão é fornecido como o primeiro parâmetro na chamada do método.
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split

const nomeCompleto = "Pedro Lucas Santiago";
const array = nomeCompleto.split(" ");
const nomeDoMeio = array[1];

console.log(nomeDoMeio);