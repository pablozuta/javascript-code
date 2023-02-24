let planets = ['Earth', 'Mars', 'Jupiter', 'Uranus', 'Saturn', 'Pluto', 'Venus']

// el metodo splice modifica el array original
let planetSplice = planets.splice(0, 3)
console.log(planetSplice); // Earth, Mars, Jupiter
console.log(planets); // Uranus, Saturn, Pluto, Venus