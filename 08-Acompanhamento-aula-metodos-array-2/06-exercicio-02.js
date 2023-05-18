// const arquivos = [
//     {nome: 'foto1', ext: '.png'},
//     {nome: 'texto', ext: '.txt'},
//     {nome: 'programa', ext: '.exe'},
// ];

const arquivos = [
    'teste.txt',
    'foto.png',
    'contrato.pdf',
    'programa.exe',
];
const verificadorArquivos = (arquivo) => {
    const resultado = arquivo.some((arquivo) => {
        const extensao = arquivo.indexOf('.bat');
        return extensao !== -1;
    });
    if (resultado) {
        console.log("VIRUS DETECTADO ❌ ⚠️  ☣️");
    } else {
        console.log("Nenhum arquivo foi encontrado");
    };
};

verificadorArquivos(arquivos);