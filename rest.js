// declaramos una funcion que puede aceptar un indeterminado numero de argumentos
function max(...numbers) {
  let result = -Infinity
  for (let number of numbers) {
    if (number > result) result = number
  }
  return result
}
console.log(max(4, 5, 78, -45, 48, 2413, -23))

// calling a function
let numbers = [2, 4, 5, 5]
console.log(max(...numbers))

// spread array with another array
let words = ['never', 'fully']
console.log('will', ...words, 'understand')
console.log('He', ...words, 'understood the assignment');

// una funcion que aceptara un numero id y luego una indeterminada cantidad de valores
let showCollections = function (id, ...collection) {
  console.log(`This is the Id: ${id}`)
  console.log('And the Items are: ',collection)
}
showCollections(42, 'movies', 'music', 'modern art')
showCollections(31, 'books', 'vhs', 'videogames')

// destructuring using the rest syntax
let num1, num2, rest
[num1, num2, ...rest] = [1, 23, 54, 3, 88, 5]
console.log(num1)
console.log(num2)
console.log(rest)

// adding a rest operator before the last formal parameter
function sayThings(tone, ...quotes) {
  console.log(Array.isArray(quotes))
  console.log(`In ${tone} voice, I say ${quotes}`)
}
sayThings('Morgan Freeman', 'Something serious', 'Imploding Universe', 'Amen')

// other simple extraction of remaining elements
const [x, ...y] = [
  'Chew-Z Manufacturers of Boston',
  'Palmer Eldricht',
  'UN sanction',
  'Dr. Denkmal',
]
console.log(x)
console.log(y)
// accesing diferent indexes of the array
console.log(y[0], y[2])
