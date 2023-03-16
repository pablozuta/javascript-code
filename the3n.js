let numero = 100
let arrayNumeros = []

while (numero > 1) {
  if (numero % 2 == 0) {
    arrayNumeros.push(numero)
    numero = numero / 2
  } else {
    arrayNumeros.push(numero)
    numero = numero * 3 + 1
  }
}

arrayNumeros.push(1)
console.log(arrayNumeros)
console.log("The cycle-length is: " + arrayNumeros.length);
