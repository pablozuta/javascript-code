// simplest form
let number = 2
if (number == 2) {
  console.log('Yes , number is 2')
}

// if + else
let numberTwo = 5
if (numberTwo == 4) {
  console.log('Yes , number is 4')
} else {
  console.log('Number is NOT 4')
}

// if + else if + else
let numero = 0
if (numero > 0) {
  console.log('numero es mayor a 0')
} else if (numero < 0) {
  console.log('numero es menor a 0')
} else {
  console.log('numero es 0')
}

// if boolean conversion
let nombre = 'Julius'
let nombreVacio = ''
if (nombre) {
  // esto evalua true
  console.log(`Yes , the number ${nombre} exist`)
}
if (!nombreVacio) {
  // esto evalua a lo contrario del valor "nombreVacio"
  console.log('es verdad , nombre vacio no existe')
}

// assigning a boolean to a variable using ternary
let age = 17
let accessAllowed = age > 18 ? true : false
console.log(`esta la entrada permitida para la edad ${age}? - ${accessAllowed}`)
