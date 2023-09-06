const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const palabras = text.trim().split(/\s+/).filter(function(palabra) {
      return palabra !== "";
    });
    return palabras.length;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const characterCount= text.length
    return characterCount;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const textoSinPuntuacion = text.replace(/[.,\-_`~()]/g, "");
    const textoLimpio = textoSinPuntuacion.replace(/\s/g, "");
    const recuento = textoLimpio.length;
    return recuento;
  },

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const cuantosNumeros = text.match(/\b\d+(\.\d+)?\b/g);
    return cuantosNumeros ? cuantosNumeros.length : 0;
  },
  
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const numeros = text.match(/\b\d+(\.\d+)?\b/g);
    const numerosParaSumaFiltrados = numeros ? numeros.filter(numero => !isNaN(numero)) : [];
    let sumar = 0;
    if (numerosParaSumaFiltrados) {
      for (let i = 0; i < numerosParaSumaFiltrados.length; i++) {
        sumar += parseFloat(numerosParaSumaFiltrados[i]);
      }
    }
    return sumar;
  },
  
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const palabrasPromedio = text.split(" ");
    if (palabrasPromedio.length === 0) {
      return 0;
    }
    const sumaLongitudes = palabrasPromedio.reduce((total, palabra) => total + palabra.length, 0);
    const promedio = (sumaLongitudes / palabrasPromedio.length).toFixed(2);
    return parseFloat(promedio);
  },
};

export default analyzer;
