// Strings are pass by value
let nombre = 'Pablo';

let nombreRef = nombre;

console.log('nombre: ', nombre);
console.log('nombre ref: ', nombreRef);

nombre = 'Dave';
console.log('nombre: ', nombre);
console.log('nombre ref: ', nombreRef);

// Arrays are pass by Reference
let arrayNombres = ['Hank', 'John', 'Alice'];
let arrayNombresRef = arrayNombres;

console.log(arrayNombres);
console.log(arrayNombresRef);

arrayNombres.push('Billie');
console.log(arrayNombres);
console.log(arrayNombresRef);

// podemos cambiar cualquiera de los arrays referenciados y cambiara los valores
arrayNombresRef.push('Bill');
console.log(arrayNombres);
console.log(arrayNombresRef);

// no pasara lo mismo si asignamos nuevos valores al array
arrayNombresRef = [100, 291];
console.log(arrayNombres);
console.log(arrayNombresRef);

// Objetos son pasados por Referencia
let Person = {
  nombre: 'Pedro',
  apellido: 'Paramo',
};

let pedro = Person;

console.log(Person);
console.log(pedro);

Person.nombre = 'Pablo';

console.log(Person);
console.log(pedro);

// Metodos de arrays

let numeros = [2, 54, 21, 94];
let numerosRef = numeros;
l = console.log;
l('----------------array methods------------------');
console.log(numeros);
console.log(numeros.push(43)); // modifica el array y el array de referencia
console.log(numeros);
console.log(numerosRef);

// slice method crea un nuevo array sin modificar el original
let numerosSlice = numerosRef.slice(1, 3);
console.log(numeros);
console.log(numerosRef);
console.log(numerosSlice);

// concat y join method
let numerosConcat = numeros.concat(23, 414, 4314);
l(numerosConcat);

// join transforma los valores a un string
let numerosJoin = numeros.join(numerosConcat);
l(typeof numerosJoin);
l(numerosJoin);
l(numerosJoin.length);

