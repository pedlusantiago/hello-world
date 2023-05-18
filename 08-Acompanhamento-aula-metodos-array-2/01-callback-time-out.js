// const imprimirNome = (nome) => {
//     console.log(nome);
// }

// imprimirNome('Pedro');

const imprimirPedro = () => {
    console.log("Pedro Lucas'");
};

setTimeout(imprimirPedro, 3000);

setTimeout(() => {
    console.log("Pedro");
}, 4000);

setTimeout(function(){
    console.log("Pedro Gostosão");
}, 5000)