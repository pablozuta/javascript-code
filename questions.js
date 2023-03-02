const users = [
  {
    id: 1,
    name: 'Jack',
    isActive: true,
  },
  {
    id: 2,
    name: 'John',
    isActive: true,
  },
  {
    id: 3,
    name: 'Mike',
    isActive: false,
  },
]

console.log('');
console.log('for loop, forEach, map por un objeto----------------');
// obtener los nombres usando for loop
const namesFor = []
for (let i = 0; i < users.length; i++) {
  namesFor.push(users[i].name)
}
console.log('Usando for loop', namesFor)

// obtener los nombres usando forEach
const namesForEach = []
users.forEach((user) => {
  namesForEach.push(user.name)
})
console.log('Usando forEach', namesForEach)

// obtener los nombres usando map
namesMap = users.map((user) => user.name)
console.log('Usando map()', namesMap)


console.log('');
console.log('diferencia null/undefined-----------------------');
// DIFERENCIA ENTRE NULL Y UNDEFINED
let var1
console.log(var1); // devuelve undefined
console.log(typeof var1); // devuelve undefined

let var2 = null
console.log(var2); // devuelve null
console.log(typeof var2); // devuelve object

// HOISTING
console.log('');
console.log('hoisting-----------------------------------');
/* console.log(foo);
foo = 1 // reference error */

console.log(foo);
var foo = 1 // devuelve undefined

foo3 = 3
console.log(foo3); // nos devuelve el valor 3
var foo3

// podemos usar una funcion antes de declararla
dash()

function dash() {
  console.log('--------------------------------------------------------');
}

// CLOSURES
const privateCounter = () => {
  let count = 0

  return {
    increment: (val = 1) => {
      count += val
    },
    getValue: () => {
      return count
    }
  }
}

const counter = privateCounter()
console.log(counter.getValue());
counter.increment()
console.log(counter.getValue());
