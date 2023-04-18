const pessoa = {
    nome : "Pedro",
    altura : 1.82,
    peso : 95,
    cidade : "Caxias do Sul",
    profissao : "Estudante de Programação"
};

const endereço = {
    rua : "Bate Palma",
    numero : "123",
    bairro : "Laranja Azeda"
};
// spread é a junção de objetos atraves de '...', exemplo:
const somaObjetos = {
    ...pessoa,
    ...endereço
};

console.log(somaObjetos)