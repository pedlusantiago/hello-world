const pessoa = {
    nome : "Pedro",
    altura : 1.82,
    peso : 95,
    carro : {
        marca : "Toyota",
        modelo : "Corolla",
        ano : 2020,
        potencia : 120
    }
};

console.log(pessoa.carro.marca);

let meuNome = "Pedro";
let minhaAltura = 1.82;
let meuPeso = 95;
let carro = {
    marca : "Chevrolet",
    modelo : "Onix",
    ano : 2022,
    potencia : 75
}

const pessoa1 = {
    nome : meuNome,
    altura : minhaAltura,
    peso : meuPeso,
    //se a variavel tem o mesmo nome do objeto, pode usar só o nome da variavel.
    //carro : carro 
    carro
}

console.log(pessoa1)