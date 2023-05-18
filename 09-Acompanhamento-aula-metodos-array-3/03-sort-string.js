const pessoas = ['joão', 'ana', 'carlos', 'beatriz'];

pessoas.sort();

console.log(pessoas);

/////////////////////////////////////////////
// LocaleCompare() retorna um numero que indica se a string de referencia vem antes ou depois,
// ou é igual a string comparada.
/////////////////////////////////////////////

const pessoas1 = ['João', 'ana', 'carlos', 'beatriz'];

// crescente
pessoas1.sort((a, b) => {
    return a.localeCompare(b);
});

console.log(pessoas1);

// decrescente

pessoas1.sort((a, b) => {
    return b.localeCompare(a);
});

console.log(pessoas1);