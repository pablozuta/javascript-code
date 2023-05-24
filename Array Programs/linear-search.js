let arrayNumeros = [22, 33, 44, 55];
let numero = 44;

function linearSearch(array, numero) {
  for (i = 0; i < array.length; i++) {
    if (array[i] == numero) {
      return 'Numero encontrado' + ' index ' + i;
    }
  }
  return 'Numero NO encontrado';
}

console.log(linearSearch(arrayNumeros, numero));
