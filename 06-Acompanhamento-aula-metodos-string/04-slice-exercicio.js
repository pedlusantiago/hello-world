// O método slice() retorna uma cópia de parte de um array a partir de um subarray criado entre 
// as posições início e fim (fim não é incluído) de um array original. O Array original não é modificado.
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

const cidade = "Caxias do Sul - RS";

const penultimoIndex = cidade.length - 2;
let estado = cidade.slice(penultimoIndex);
console.log(estado);