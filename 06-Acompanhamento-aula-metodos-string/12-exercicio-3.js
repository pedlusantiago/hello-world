function imprimirData(dia, mes, ano) {
    const diaFormatado = String(dia).padStart(2, '0'); // String OU String template
    const mesFormatado = `${mes}`.padStart(2, '0');
    console.log(`${diaFormatado}/${mes}/${ano}`);
};

imprimirData(1, 1, 2021);