// simple example with array
const x = [1, 2, 3, 4, 5];
const [y, z] = x;

console.log(y); // 1
console.log(z); // 2

// simple destructure of an object
const book = {
  title: 'The sect of the Idiot',
  author: 'Thomas Ligotti'
}
const {title, author} = book;
console.log(title);
console.log(author);

// another
const person = {
    name: 'Sara',
    age: 25,
    gender: 'female'
};
let {name: nombreDeSara, gender} = person;
console.log(`Her name is ${nombreDeSara} and her gender is ${gender}`);

// changing the name of a property(variable)
let options = {
    title: 'Menu',
    width: 100,
    height: 100
};
let {width: w} = options;
console.log(`este es el width del menu ${w}`);


// using the rest value
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
console.log(b);

[a, b, ...rest] = [10, 20, 30, 40, 50, 60];
console.log(rest);
// using the ...rest on objects
let optionsDos = {
    title: 'Menu',
    width: 100,
    height: 100
};
let {width, ...theRest} = optionsDos;
console.log(theRest);

// ignoring elements using commas
let names = ['Herbert West', 'Waltham', 'Charles Fort'];
// using two commas instead of one
let [nombreUno, , nombreDos] = names;
console.log(nombreUno);
console.log(nombreDos);