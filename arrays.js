// Arrays are one of the most fundamental data structures.
var array1 = [1, 43, 42, 6]
console.log(array1)

// For any data structure, developers are interested in time and space complexity
// associated with the four fundamental operations: access, insertion, deletion, and search.

// INSERTION
array1.push(2)
console.log(array1)
array1.push(5)
console.log(array1)
array1.push(587)
console.table(array1)

// DELETION
// pop removes the last element
array1.pop()
console.table(array1)
array1.pop()
console.table(array1)

// shift removes the first element
array1.shift()
console.table(array1)
array1.shift()
console.table(array1)

// ACCESS
console.log(array1[0])
console.log(array1[1])
console.log(array1[2])

// ITERATION
for (let index = 0; index < array1.length; index++) {
  console.log(`for loop index ${index}`, array1[index])
}

// forEach
// The big difference between forEach and other methods of iteration
// is that forEach cannot break out of the iteration or skip certain elements
// in the array.
// forEach is more expressive and explicit by going through each element.
console.log('----------------------------------------------------------------')
console.log('forEach iteration')
array1.forEach((e) => console.log(e))

var array2 = ['all', 'cows', 'are', 'big']
array2.forEach((item, index) => console.log('index', index, 'value:', item))
array2.push('and')
array2.push('they')
array2.push('give')
array2.push('us')
array2.push('milk')
array2.push('and')
array2.push('cheese')
console.table(array2)

// SLICING

// .slice This helper function returns a portion of an existing array
// without modifying the array.
console.log('------------------slices------------------------')

console.log(array2.slice(2, 4))
console.log(array2.slice(3, 6))
console.log(array2.slice(0, 1))
