const numero = [1, 2, 3, 4, 5];

// mesma lógica de desestruturação de objeto mas usando [ ].

let [a, b, ...resto] = numero
console.log(a, b, resto);
