// testa se ao menos 1 dos elementos do array passam pelo teste implementado na funcao callback 
// passada como argumento e retorna TRUE ou FALSE

const nomes = ['Pedro', 'João', 'Mari', 'Edson'];

const acharNome = (nome) => {
    return nome === 'Mari';
};

const resultado = nomes.some(acharNome);


//////////////////////////////////////////////////////

const resultado1 =  nomes.some((nome) => {
    return nome === 'Elis';
})


console.log(resultado);
console.log(resultado1);

const numeros = [1, 3, 5, 7, 9];

const resultado2 = numeros.some((numero) => {
    return numero % 2 === 0
});

console.log(resultado2);