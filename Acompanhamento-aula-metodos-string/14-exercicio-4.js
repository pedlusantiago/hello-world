// tranformar " pedro lucas santiago" em "Pedro Lucas Santiago"

const nome = "pedro lucas santiago";
const arrayNome = nome.split(" ");

let nomeFormatado = ""

for (let nome of arrayNome) {
    let primeiraLetra = item.slice(0, 1);
    let restanteNome = item.slice(1);
    nomeFormatado += primeiraLetra.toUpperCase() + restanteNome + " ";
};

console.log(nomeFormatado.trim());