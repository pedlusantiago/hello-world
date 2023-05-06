function inverterString(texto) {
    const textoArray = texto.split(" ");
    textoArray.reverse();

    let textInvertido = "";
  for (let palavra of textoArray) {
    textInvertido += palavra + " ";
    }
    console.log(textInvertido);
}

inverterString("Pedro Lucas Santiago");