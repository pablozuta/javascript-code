let noMaps = ["Cyberpunk"]
console.log(noMaps);

// agrega elemento al final del array
noMaps.push("Burning Chrome")
console.log(noMaps);
noMaps.push("Technologicaly Driven")
console.log(noMaps);

// agrega elemento al principio del array
noMaps.unshift("Post-Human")
noMaps.unshift("The end of Economics")
console.log(noMaps);

// slice (no modifica array original)
let noMapsSlice = noMaps.slice(1, 3) // desde el index 1 al 2 (no incluye index 3)
console.log(noMapsSlice);
console.log(noMaps);

// pop (elimina elemento al final del array)
noMaps.pop()
noMaps.pop()
console.log("-----------array after pop---------------------------");
console.log(noMaps);

// shift (elemina elemento al principio del array)
noMaps.shift()
console.log("-----------array after shift---------------------------");
console.log(noMaps);
noMaps.push("Burning Chrome")
noMaps.push("Post-Modernism")
noMaps.push("Utopia")

console.log("------------forEach------------------------");
noMaps.forEach((item) => console.log(item)) // for each

console.log("------------map------------------------");
noMaps.map((item) => console.log(item))


