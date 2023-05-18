const professores = [{
        nome: "Guido",
        stack: "backend"
    },
    {
        nome: "Vidal",
        stack: "backend"
    },
    {
        nome: "Dani",
        stack: "frontend"
    },
    {
        nome: "Diego",
        stack: "frontend"
    },
    {
        nome: "Léo",
        stack: "backend"
    },
    {
        nome: "Ruli",
        stack: "frontend"
    },
];

const resultadoFront = professores.filter((professor) => {
    return professor.stack === "frontend";
});

const resultadoBack = professores.filter((professor) => {
    return professor.stack === "backend";
});

console.log(resultadoFront);
console.log(resultadoBack);