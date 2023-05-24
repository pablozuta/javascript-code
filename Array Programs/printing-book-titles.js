let libros = [
  'Neuromancer',
  'Snow Crash',
  'Altered Carbon',
  'Do Android Dream of Electric Sheep',
  'The Diamond Age',
  'Count Zero',
  'Mona Lisa Overdrive',
  'Virtual Light',
  'Hardwired',
  'Idoru',
];

// mostrar libros uno por uno con forEach
libros.forEach((libro) => console.log('-', libro));

// mostrar libros uno por uno usando for loop
for (i = 0; i < libros.length; i++) {
  console.log(libros[i]);
}

// orden en reversa for loop
console.log('****Libros en Reversa****');
for (i = libros.length - 1; i >= 0; i--) {
  console.log(libros[i]);
}
