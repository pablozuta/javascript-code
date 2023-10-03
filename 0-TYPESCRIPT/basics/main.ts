let numero : number = 200
let libros : string[] = ["2666", "1984"];

function addVAT(price: number, vat =0.2) {
    return price * (1 + vat)
}


console.log(addVAT(numero))
console.log(libros[0]);
console.log(libros[1]);

libros.push("Neuromancer")
console.log(libros[libros.length - 1]);

