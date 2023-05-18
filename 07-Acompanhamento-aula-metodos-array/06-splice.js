// funciona como método de substituir elementos de um array


const lista = ["a", "b", "c", "d", "e"];
lista.splice(1, 2, "f"); // primeiro argumento é o indice de onde desejo mexer,
//segundo argumento é a quantidade de indices que desejo remover a´pos o argumento 1
//terceiro argumento é o que desejo inserir no lugar dos argumentos deletados, ou apenas inserir novo.
console.log(lista);