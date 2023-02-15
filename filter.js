const ages = [32, 33, 16, 70, 50, 3]
let cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];


const agesFilter = ages.filter(checkAdult)
const adolescent = ages.filter(isAdolescent)



function checkAdult(age) {
    return age >=18
} 

function isAdolescent(age) {
    return age > 13 && age < 20
}


console.log(agesFilter);
console.log(adolescent);
console.log(ages.filter(checkAdult));

let bigCities = cities.filter(function (city) {
    return city.population > 3000000
})
let smallCities = cities.filter(function (city) {
    return city.population < 3000000
})

console.log("----------------------------------------------------------");
console.log("Big Cities:");
console.log(bigCities);
console.log("Small Cities:");
console.log(smallCities);
console.log("----------------------------------------------------------");

// Function to Check even Numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function even(number) {
    if (number % 2 == 0) {
        return true
    } else {
        return false
    }
       
}

// create a new array by filter even numbers from the numbers array
let evenNumbers = numbers.filter(even)
console.log("Estos son numeros pares: ", evenNumbers);