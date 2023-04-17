const numeros = [15, 20, 25, 2, 17, 29, 34, 58, 78, 8];

let soma = 0;

for (let n = 0; n < numeros.length; n++) {
soma = soma + numeros[n];
// soma += numeros[n]
}
console.log(soma);