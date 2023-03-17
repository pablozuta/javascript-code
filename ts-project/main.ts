// TYPE ANOTATIONS

let lucky: number | string = 23

lucky = 42.43
lucky = 'GREAT'

console.log(lucky);

// CUSTOM TYPES
type Style = string 

let frase: Style = 'El llano en llamas'
// frase = 200; // nos da error al querer cambiar a valor numerico

// INTERFACE
interface Person {
  first: string
  last: string
}

const nombre: Person = {
  first: 'Dave',
  last: 'Eckart',
}

// FUNCTIONS
function powF(x: number, y: number) {
  return Math.pow(x, y)
}

console.log(powF(2, 5));
