// O método trim() remove os espaços em branco (whitespaces) do início e/ou fim de um texto.
// É considerado espaço em branco (espaço, tabulação, espaço fixo/rígido, etc.) e todo sinal de fim de linha de texto (LF, CR, etc.).
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/trim


const email = "       pedrolucas@email.com";
const emailFormatado = email.trim();
console.log(`_${emailFormatado}_`);