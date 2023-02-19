let x = 'dog'
let m = 'montevideo'
console.log(x.charAt(1)) // devuelve el segundo index
console.log(x.charAt(0)) // devuelve el primer index

console.log(m.substring(1, 4))
console.log(m.substring(3, 7))
console.log(m.substring(3)) // retorna los valores desde el indice al final del string

// string comparison
console.log(x > m)
console.log(x < m)
console.log(x == m)
console.log('a' > 'b')

// string search
let e = 'Enlightement'
console.log(e.startsWith('En')); // returns true
console.log(e.endsWith('nt')); // returns true

// STRING DECOMPOSITION
var test1 = 'chicken,noodle,soup,broth';
console.log(test1); // nos devuelve un string
console.log(test1.split(',')); // nos devuelve un array con cada palabra en un index diferente
console.log(test1.split(',')[1]); // imprimimos el index '1' (noodle)

console.log(e.split('')); // nos devuelve cada letra por separado en un array

// STRING REPLACE
let wiz = "Wizard of Oz"
console.log(wiz);
console.log(wiz.replace('Wizard', 'Witch')); // nos devuelve el string "Witch of Oz"

