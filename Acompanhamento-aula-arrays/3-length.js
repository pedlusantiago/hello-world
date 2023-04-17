// usa-se .length para saber a propriedade do array 
const nomes = ["Pedro", "Lucas", "Santiago"];

      //console.log(nomes.length);
// se adicionado ex: nomes.length como modificação de array, ele adiciona a informação no final sem alterar a const

nomes[nomes.length] = "Mariana"
console.log(nomes);