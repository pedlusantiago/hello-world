// O método replace() retorna uma nova string com algumas ou todas as correspondências de um padrão substituídas por um determinado 
// caractere (ou caracteres). O padrão pode ser uma string ou uma RegExp, e a substituição pode ser uma string ou uma função a ser 
// chamada para cada correspondência. Se o padrão for uma string, apenas a primeira ocorrência será substituída.

// A string original não é modificada.

const texto = "Tudo certo por aqui.";
const parte = texto.replace("certo", "errado");
console.log(parte);