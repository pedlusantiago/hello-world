function determinarFaixaEtaria(idade) {
    if (idade < 21) {
        return "jovem"
    } else if (idade > 22 && idade < 65) {
        return "adulto(a)"
    } else if (idade > 66) {
        return "idoso(a)"
    }
}

function apresentar(pessoa) {
    const faixaEtaria = determinarFaixaEtaria(pessoa.idade)
    console.log(`Sou ${pessoa.nome}, sou um(a) ${faixaEtaria} de ${pessoa.idade} anos e sou ${pessoa.profissao}.`)
}

const pessoa1 = {
    nome: 'Ana',
    idade: 20,
    peso: 90,
    profissao: "estudante"
}

apresentar(pessoa1)

const pessoa2 = {
    nome: 'Pedro',
    idade: 24,
    peso: 95,
    profissao: "estudante"
}

apresentar(pessoa2)