function apresentar(pessoa) {
    if (pessoa.idade < 25) {
        console.log(`Sou ${pessoa.nome}, sou um jovem de ${pessoa.idade} anos e sou ${pessoa.profissao}.`);
    } else if (pessoa.idade < 65) {
        console.log(`Sou ${pessoa.nome}, sou um adulto de ${pessoa.idade} anos e sou ${pessoa.profissao}.`);
    } else {
        console.log(`Sou ${pessoa.nome}, sou um idoso de ${pessoa.idade} anos e sou ${pessoa.profissao}.`);
    }
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