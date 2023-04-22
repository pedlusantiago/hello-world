function faixaEtaria(idade) {
    if (idade < 21) {
        return "jovem"
    } else if (idade > 22 && idade < 65) {
        return "adulto(a)"
    } else if (idade > 66) {
        return "idoso(a)"
    }
}

const faixa = faixaEtaria(95)
console.log(faixa);
console.log(faixaEtaria(17));