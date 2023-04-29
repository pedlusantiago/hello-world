// para transformar uma variavel em STRING se não for:
const valor = 57.85;

const valorString = String(valor)

const formatoBR = valorString.replace(".", ",");
console.log(formatoBR);
console.log(valor);