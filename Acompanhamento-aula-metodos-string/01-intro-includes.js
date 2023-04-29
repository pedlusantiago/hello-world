// .includes pesquisa dentro da string se há ou não a correspondecia que está no parametro, o numero após o parametro
// define de onde se iniciará a busca (lembrando que o indice é o number + 1, pois começa a contar de 0)
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

const texto = "Eu estou aprendendo a programar na Cubos Academy.";
console.log(texto.includes("Cubos", 15));