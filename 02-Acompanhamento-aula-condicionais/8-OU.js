const temIngresso = true;
const censura = 16
const idade = 12
const estaComOsPais = false

// tem ingresso E
// tem idade >= a censura OU está com os pais
// se a const for boleana, será sempre TRUE ou FALSE
// logo, pode-se omitir da escrita '=== true' e '=== false'

if (temIngresso) {
    if (idade >= censura || estaComOsPais) {
        console.log("Acesso Liberado");
    } else {
        console.log("Barrado");
    }
} else {
    console.log("Barrado");
}