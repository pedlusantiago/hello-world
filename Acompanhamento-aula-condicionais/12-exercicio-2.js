// M = C * (1 + i)^n
// onde: Montante, Capital, i = taxa de juros e N = periodo
const valorProduto = 5599;
const numeroDeParcelas = 10;

if (numeroDeParcelas === 1) {
    // a vista com 10% de desconto
    const desconto = valorProduto * 10 / 100;
    const valorAPagar = valorProduto - desconto;
    console.log(`Você deve pagar R$${valorAPagar}, pois a vista tem 10% de desconto.`);
} else if (numeroDeParcelas >= 2 && numeroDeParcelas <= 6) {
    // parcelado sem juros
    const valorDaParcela = (valorProduto / numeroDeParcelas).toFixed(2);
    console.log(`Você deve pagar ${numeroDeParcelas} parcelas sem juros de R$${valorDaParcela}`);
} else if (numeroDeParcelas >= 7 && numeroDeParcelas <= 12) {
    // parcelado com juros
    const valorAPagarComJuros = (valorProduto * (1 + 1.15 / 100) ** numeroDeParcelas).toFixed(2);
    const valorDaParcela = (valorAPagarComJuros / numeroDeParcelas).toFixed(2);
    console.log(`Você deve pagar em ${numeroDeParcelas} de R$${valorDaParcela}, totalizando R$${valorAPagarComJuros} devido a cobrança de juros.`)
} else {
    console.log("Número de parcelas inválido.")
}