// A função dentro de um objeto chama-se METODO, funciona da mesma forma, apenas muda a colocação
// tbm pode usar o termo THIS para referir-se ao metodo em que está sendo chamada no codigo
const pessoa1 = {
    nome: 'Ana',
    idade: 20,
    peso: 90,
    profissao: "estudante",
    determinarFaixaEtaria: function () {
        if (this.idade < 21) {
            return "jovem"
        } else if (this.idade > 22 && this.idade < 65) {
            return "adulto(a)"
        } else if (this.idade > 66) {
            return "idoso(a)"
        }
    },
    apresentar: function () {
        const faixaEtaria = this.determinarFaixaEtaria(this.idade) // usando THIS para referir o objeto PESSOA1
        console.log(`Sou ${this.nome}, sou um(a) ${faixaEtaria} de ${this.idade} anos e sou ${this.profissao}.`)
    }
}

// para chamar a funcao:
pessoa1.apresentar();