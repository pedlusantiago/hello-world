const palavra = 'Canadá';

//for (let letra of palavra) {
//   console.log(letra);
//}
let encontrado = false

for (let letra of palavra) {
    if (letra === 'd') {
        console.log('Tem a letra D.')
        encontrado = true
        break
    }
}
if (!encontrado) {
    console.log('Não tem D.');
}