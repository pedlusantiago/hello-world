const pessoa = {
    nome : "Pedro",
    altura : 1.82,
    peso : 95,
//para acessar a propriedade usa-se '.' : pessoa.altura / pessoa.nome / pessoa.peso
};

// por ser variável, também pode ser editado.
pessoa.nome = "Lucas"

console.log(`Meu nome é ${pessoa.nome}, tenho ${pessoa.altura}m e peso ${pessoa.peso}kg.`)