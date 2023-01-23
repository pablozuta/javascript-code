// simple object
let hero = {
  breed: 'Turtle',
  occupation: 'Ninja',
}
console.log(hero)

// keys using quotation marks
let hero1 = { occupation: 101 }
console.log(hero1)

// this is valid js code
let o = {
  $omething: 1,
  'yes or no': 'yes',
  '#@|€~@@#': true,
}
console.log(o)

// methods of objects
let dog = {
  name: 'Benji',
  talk: function () {
    console.log('Woof, woof')
  },
}
dog.talk()

// accessing an object properties
let hero2 = {
  breed: 'Turtle',
  occupation: 'Ninja',
}
// using dot notation
console.log(hero2.breed)
console.log(hero2.occupation)

// using square bracket notation
console.log(hero2['occupation'])
console.log(hero2['breed'])

// objects inside objects
var books = {
  name: 'Catch-22',
  published: 1961,
  author: {
    firstName: 'Joseph',
    lastName: 'Heller',
  },
}
console.log(books.name)
console.log(books.author)
console.log(books.author.firstName)
console.log(books.author.lastName)

// using square brackets notation
console.log(books['name'])
console.log(books['author'])
console.log(books['author']['firstName'])
console.log(books['author']['lastName'])

// calling object methods
const heroTwo = {
  breed: 'Turtle',
  occupation: 'Ninja',
  say: function () {
    return 'I am a ' + heroTwo.occupation
  },
}
console.log(heroTwo.say())

// starting with a blank object
let ninja = {}
ninja.name = 'Leonardo'
console.log(ninja.name)

// using the "this" value
let turtleNinja = {
  name: 'Rafaelo',
  sayName: function () {
    return this.name
  },
}
console.log(turtleNinja.sayName())

// methods
let rabbit = {}
rabbit.speak = function (line) {
  console.log(`The rabbit say ${line}`)
}
rabbit.speak("I'm Alive")
