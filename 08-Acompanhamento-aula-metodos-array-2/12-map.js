// executa uma funcao callback passada como argumento para cada elemento do array
// e retorna um novo array como resultado.

const usuarios = [{
        nome: 'Guido',
        sobrenome: 'Cerqueira',
        idade: 31
    },
    {
        nome: 'Daniel',
        sobrenome: 'Lopes',
        idade: 29
    },
    {
        nome: 'Vitor',
        sobrenome: 'Vidal',
        idade: 28
    },
];

const nSei = usuarios.map((usuario) => {
    return {
        nomeCompleto: `${usuario.nome} ${usuario.sobrenome}`,
        idade: `${usuario.idade} anos`,
    }
});

console.log(nSei);