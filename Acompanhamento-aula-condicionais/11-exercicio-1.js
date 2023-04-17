const valorProduto = 100;
const numeroDeParcelas = 3;
// usar .toFixed(x) no final do objeto para definir quantas casas decimas serão visiveis
if (numeroDeParcelas === 1) {
    // a vista com 10% de desconto
    const desconto = valorProduto * 10 / 100;
    const valorAPagar = valorProduto - desconto;
    console.log(`Você deve pagar R$${valorAPagar}, pois a vista tem 10% de desconto.`);
} else {
    // parcelado
    const valorDaParcela = (valorProduto / numeroDeParcelas).toFixed(2);
    console.log(`Você deve pagar ${numeroDeParcelas} parcelas de R$${valorDaParcela}`);
}