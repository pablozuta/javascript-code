let frase = 'Natalia se metio entre los brazos de su madre'
let fraseDos = ' y lloro largamente alli con un llanto quedito'

console.log(frase.toUpperCase()) // transforma a mayuscula

console.log(frase.toLowerCase()) // transforma a minuscula

console.log(frase.charAt(2)) // muestra el caracter del indice seleccionado

console.log(frase.substring(2, 9)) // muestra un rango de caracteres

console.log(frase.split(' ')) // separa texto segun parametro

console.log(frase.indexOf('m')) // busca el indice de la primera vez que ocurre el caracter

console.log(frase.lastIndexOf('m')) // busca el indice de la ultima vez que ocurre caracter

console.log(frase.replace('Natalia', 'Pedro Paramo')) // reemplaza el texto segun parametros

console.log(frase.trim()) // elimina espacio del principio y final de string

let fraseUnida = frase.concat(fraseDos) // concatena frase con una o mas frases
console.log(fraseUnida)

console.log(fraseUnida.length) // muestra la longitud de la frase

console.log(fraseUnida.includes("metio")); // devuelve boolean dependiendo de si frase incluye parametro entregado
