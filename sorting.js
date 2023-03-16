// el array se modifica despues de cada sort

let numeros = [4, 2, 54, 34, 765, 344, 10333, 422, 32]
console.log(numeros);

let numerosSorted = numeros.sort((a, b) =>  a - b)
console.log(numerosSorted);

let numerosSortedDescending = numeros.sort((a, b) =>  b - a)
console.log(numerosSortedDescending);

// aqui mostraria igual orden para los tres arrays
console.log(numeros);
console.log(numerosSorted);
console.log(numerosSortedDescending); 