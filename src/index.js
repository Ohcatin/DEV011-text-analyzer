import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
// Obtén referencias a los elementos
const textoInput = document.querySelector('textarea[name="user-input"]');
const palabraLi = document.querySelector('li.uno[data-testid="word-count"]');
const caracterLi = document.querySelector('li.uno[data-testid="character-count"]');
const caracteresSinEspacio = document.querySelector('li.uno[data-testid="character-no-spaces-count"]')
const cuantosNumeros = document.querySelector('li.dos[data-testid="number-count"]')
const sumaNumeros = document.querySelector('li.dos[data-testid= "number-sum"]')
const longitudPalabras = document.querySelector('li.dos[data-testid= "word-length-average"]')

// Event Listener para el evento keyup del textarea
textoInput.addEventListener("keyup", function() {
  const texto = analyzer.getWordCount(textoInput.value)
  palabraLi.textContent = "Palabras:" + texto;
  const caracteres = analyzer.getCharacterCount(textoInput.value)
  caracterLi.textContent = "Caracteres:" + caracteres;
  const recuentoSinNada = analyzer.getCharacterCountExcludingSpaces(textoInput.value)
  caracteresSinEspacio.textContent = "Caracteres sin espacio:" + recuentoSinNada;
  const numeritos = analyzer.getNumberCount(textoInput.value)
  cuantosNumeros.textContent = "Números:" + numeritos;
  const sumaNumeritos = analyzer.getNumberSum(textoInput.value)
  sumaNumeros.textContent = "Suma de números:" +  sumaNumeritos;
  const longPalabras = analyzer.getAverageWordLength(textoInput.value)
  longitudPalabras.textContent = "Promedio palabras:" + longPalabras;
})



// Event Listener para el botón de limpiar metricas
const input = document.querySelector('textarea[name="user-input"]');
const botonLimpiar = document.getElementById("reset-button");

botonLimpiar.addEventListener("click", function() {
  
  input.value = "";
});