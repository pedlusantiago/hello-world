const pessoa = {
    nome : "Pedro",
    altura : 1.82,
    peso : 95,
    cidade : "Caxias do Sul",
    profissão : "Estudante de Programação"
};

// se usa { } antes do = marcando o objeto após o =, para puxar as informações sem declarar como:
// const nome = pessoa.nome
//const idade = pessoa.nome

const {nome, idade} = pessoa

console.log(nome, idade); //podendo puxar qualquer informação
