const usuarios = [{
        nome: 'Pedro',
        idade: 24
    },
    {
        nome: 'Mariana',
        idade: 23
    },
    {
        nome: 'Marielle',
        idade: 20
    },
    {
        nome: 'Edson',
        idade: 42
    },
    {
        nome: 'Elis',
        idade: 15
    }
];

const fiscalizaIdade = (fiscalizacao) => {
    const resultado = fiscalizacao.every((usuario) => {
        return usuario.idade > 17;
    })
    if (resultado) {
        console.log("Entrada liberada");
    } else {
        console.log("Possui menor de idade");
    };
}

fiscalizaIdade(usuarios);