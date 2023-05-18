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
console.log(comanda.usuario);
console.log(comanda.idade);
comanda.idade = 30
console.log(comanda.idade);
console.log(comanda.produtosConsumidos[0].nome);
console.log(comanda.produtosConsumidos[comanda.produtosConsumidos.length - 1].valorUn);