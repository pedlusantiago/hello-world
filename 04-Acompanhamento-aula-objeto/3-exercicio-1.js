let temCNH = "";

const pessoa = {
    nome : "Pedro",
    idade : 24,
    altura : 1.82,
    temCNH : false,
    apelidos : "ahh Zé da Manga"
}

if (pessoa.temCNH === true) {
    textoCNH = "possui"
} else {
    textoCNH = "não possui"
}

console.log(`${pessoa.nome} tem ${pessoa.idade}, ${pessoa.altura}m de altura, ${textoCNH} CNH. Também é conhecido como "${pessoa.apelidos}".`)
