// retorna o primeiro elemnto do array que corresponde a condição implementada na funcao callback
// passada como argumento. caso contrário, retorna UNDEFINED.

const usuarios = [{
        nome: 'Pedro',
        idade: 24
    },
    {
        nome: 'Maria',
        idade: 17
    },
    {
        nome: 'Elis',
        idade: 42
    },
    {
        nome: 'João',
        idade: 21
    },
];

const resultado = usuarios.find((usuario) => {
    return usuario.nome === 'João';
});

console.log(resultado);