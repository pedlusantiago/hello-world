function varificarMaiorIdade(idade) {
if (idade > 18) {
    return true;
    //console.log("Maior de idade");
} else {
    return false;
    //console.log("Menor de idade");
}
}

const maiorDeIdade = varificarMaiorIdade(16);
console.log(maiorDeIdade);
