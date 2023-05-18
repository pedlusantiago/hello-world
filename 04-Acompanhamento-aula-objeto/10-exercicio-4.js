const comanda = {
    usuario : "Pedro",
    idade : 24,
    produtosConsumidos : [
        {
            nome : "Baldinho de cerveja - Heinken",
            valorUn : 6000,
            quantidade : 2
        },
        {
            nome : "Petiscos",
            valorUn : 5000,
            quantidade : 4
        },
        {
            nome : "Porção de fritas G",
            valorUn : 3000,
            quantidade : 1
        }
    ]
}
let total = 0;
for (let produto of comanda.produtosConsumidos) {
    total += produto.valorUn * produto.quantidade;
    }
    
const valorTotal = (total/100).toFixed(2);

console.log(`Olá ${comanda.usuario}, o valor total da sua comanda é ${valorTotal}.`)