// O método padStart() preenche a string original com um determinado caractere, ou conjunto de caracteres, 
// (várias vezes, se necessário) até que a string resultante atinja o comprimento fornecido. O preenchimento é aplicado antes 
// do primeiro caractere da string original. A string original não é modificada.
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

const ultimos4dig = "2345";

const numCartao = ultimos4dig.padStart(19, "**** ");
console.log(numCartao);