{
const pessoa = {
    nome : "Pedro",
    idade : 24,
    altura : 1.82,
    temCNH : false,
    //se houver mais apelidos
    apelidos : ["Zé da Manga", "Errrrou", "Manoel Gomes"]
}

let textoCNH = pessoa.temCNH ? "possui" : "não possui";
//if (pessoa.temCNH === true) {
  //  textoCNH = "possui"
//} else {
//    textoCNH = "não possui"
//}
console.log(`${pessoa.nome} tem ${pessoa.idade}, ${pessoa.altura}m de altura, ${textoCNH} CNH. Também é conhecido como:`)
for (let apelido of pessoa.apelidos){
    console.log(`-${apelido}`)
}
}