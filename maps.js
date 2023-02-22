// Inicializacion Mapa
const mapa = new Map([
  [1, 'uno'],
  [2, 'dos'],
])

// Inicializacion de Objeto
const objeto = {
  1: 'uno',
  2: 'dos',
}

console.table(mapa)
console.table(objeto)

// GET
console.log('mapa get', mapa.get(2))
console.log('objeto get', objeto[1])
