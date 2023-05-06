// junta todos os elementos de um array, separando-os com virgulas, e retorna esta string.
// opicionalmente, pode-se passar uma string como argumento para ser colocada entre os itens.

const opcoes = ["Uma", "Outra"];
let resultado = opcoes.join();
console.log(resultado); // Uma,Outra

resultado = opcoes.join(""); 
console.log(resultado); //UmaOutra

resultado = opcoes.join(" ou "); 
console.log(resultado); // Uma ou Outra

///////////////////////////////////////////

function inverterString(texto) {
    const textoArray = texto.split("");
    textoArray.reverse();

    const textInvertido = textoArray.join("");
    console.log(textInvertido);
}

inverterString("Pedro Lucas Santiago");