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

// obtener los nombres usando for loop
const namesFor = []
for (let i = 0; i < users.length; i++) {
  namesFor.push(users[i].name)
}
console.log(namesFor)

// obtener los nombres usando forEach
const namesForEach = []
users.forEach((user) => {
  namesForEach.push(user.name)
})
console.log(namesForEach)

// obtener los nombres usando map
namesMap = users.map((user) => user.name)
console.log(namesMap)
