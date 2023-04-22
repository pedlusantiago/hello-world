const pessoa01 = {
    nome: "João",
    idade: 12,
    altura: 1.40,
    profissao: "estudante",
    
}

function apresentacao(pessoa) {
    console.log(`Olá! Meu nome é ${pessoa.nome}, sou um jovem de ${pessoa.idade}, ${pessoa.altura}m de altura e sou ${pessoa.profissao}.`)
}
apresentacao(pessoa01)