// retorna o indice do primeiro elemento do array correspondente a condição implementada pela
// funcao callback passada como argumento. caso contrário, retorna -1.

const carros = [{
        nome: 'corola',
        marca: 'toyota',
        ano: '2020',
        cor: 'prata'
    },
    {
        nome: 'argo',
        marca: 'fiat',
        ano: '2021',
        cor: 'preto'
    },
    {
        nome: 'ranger',
        marca: 'ford',
        ano: '2021',
        cor: 'prata'
    },
    {
        nome: 'hilux',
        marca: 'toyota',
        ano: '2018',
        cor: 'branco'
    }
];

const nomeCarro = "hilux";
const resultado = carros.findIndex((carro) => {
    return carro.nome === nomeCarro;
})

console.log(resultado);