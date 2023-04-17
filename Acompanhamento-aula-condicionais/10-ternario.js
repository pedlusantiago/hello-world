const saldo = 1
const u = (saldo === 1 ? "real" : "reais");

console.log(`Você tem ${saldo} ${u}.`);

//

if (saldo === 1) {
    console.log(`Você tem ${saldo} real`);
} else {
    console.log(`Você tem ${saldo} reais`);
}