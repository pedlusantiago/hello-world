// substituir virgula do milhar ex:

function replaceAll(original, text, newText) {
    while (original !== original.replace(text, newText)) {
        original = original.replace(text, newText);
    }
};


let milhar = "1,350,000";
console.log(replaceAll(milhar, ",", "."));