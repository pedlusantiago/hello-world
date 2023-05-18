// O método indexOf() retorna o primeiro índice em que o elemento 
//pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

const email = "pedrolucas@email.com";

const indexArroba = email.indexOf("@");
const indexPontoAposArroba = email.indexOf(".". indexArroba);

if ( indexPontoAposArroba > indexArroba) {
    console.log("Email atende aos requisitos.");
} else {
    console.log("Email não atende aos requisitos.");
}