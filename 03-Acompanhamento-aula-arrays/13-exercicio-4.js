const palavra = 'Abracadabra';

let quantidade = 0;

for (let letra of palavra) {
    if (letra === "a" || letra === "A") {
    quantidade++;}
}
console.log(quantidade);