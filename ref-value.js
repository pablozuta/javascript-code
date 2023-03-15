// Strings are pass by value
let nombre = "Pablo";

let nombreRef = nombre;

console.log("nombre: ", nombre);
console.log("nombre ref: ", nombreRef);

nombre = "Dave";
console.log("nombre: ", nombre);
console.log("nombre ref: ", nombreRef);

// Arrays are pass by Reference
let arrayNombres = ["Hank", "John", "Alice"];
let arrayNombresRef = arrayNombres;

console.log(arrayNombres);
console.log(arrayNombresRef);

arrayNombres.push("Billie");
console.log(arrayNombres);
console.log(arrayNombresRef);

// podemos cambiar cualquiera de los arrays referenciados y cambiara los valores
arrayNombresRef.push("Bill");
console.log(arrayNombres);
console.log(arrayNombresRef);

// no pasara lo mismo si asignamos nuevos valores al array
arrayNombresRef = [100, 291];
console.log(arrayNombres);
console.log(arrayNombresRef);

// Objetos son pasados por Referencia
let Person = {
    nombre: "Pedro",
    apellido: "Paramo",
}

let pedro = Person;

console.log(Person);
console.log(pedro);

Person.nombre = "Pablo";

console.log(Person);
console.log(pedro);