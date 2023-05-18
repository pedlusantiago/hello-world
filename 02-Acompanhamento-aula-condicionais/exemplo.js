const temIngresso = true;
const censura = 16
const idade = 15

// ter ingresso e a idade ser maior que a da censura

if (temIngresso === true) {
    if (idade >= censura) {
        console.log("Acesso Liberado");
    } else {
        console.log("Barrado pela censura");
    }
} else {
    console.log("Barrado por falta de ingresso");
}