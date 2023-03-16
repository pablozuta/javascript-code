let numeroRandom = Math.random()
console.log(numeroRandom);

console.log("loop de random numbers");

// nos imprimira 10 veces el mismo numero
for(i= 0; i<=10; i++) {
    console.log("Numero:" + i + " " + numeroRandom);
}

// nos mostrara 10 numeros random diferentes
for(i= 0; i<=10; i++) {
    console.log("Numero:" + i + " " + Math.random());
}

// FUNCION NUMERO RANDOM ENTRE RANGO DE DOS NUMEROS
function obtenerRandom(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

console.log(obtenerRandom(2, 100));

// metodos modulo Math
console.log("El valor de PI es: ", Math.PI);
console.log("La raiz cuadrada de 6 es: ", Math.sqrt(6));

let arrayDeNumeros = [34, 75, 900, 2, 8444]
console.log("Array de numeros", arrayDeNumeros);

console.log("Numero mayor: ", Math.max(...arrayDeNumeros)); // nos devuelve el numero mayor
console.log("Numero menor: ", Math.min(...arrayDeNumeros)); // nos devuelve el numero menor

console.log(Math.max(arrayDeNumeros[0], arrayDeNumeros[2]));



// NUMERO ELEVADO A OTRO
console.log(Math.pow(2, 3)); // 2 * 2 * 2 = 8
console.log(Math.pow(3, 2)); // 3 * 3 = 9
console.log(Math.pow(5, 4)); // 5 * 5 * 5 * 5 = 625
