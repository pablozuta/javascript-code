// GLOBAL OBJECTS OF NODE

console.log("----------------GLOBAL OBJECTS---------------------");
console.log(process.pid); // process ID
console.log(process.cwd()); // current working directory
console.log(process.argv);
console.log(process.platform);
console.log(process.release);
console.log(process.versions);
console.log("--------------------------------------------------");

// BUFFER DATA TYPE
const bufFromArray = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72])
console.log(bufFromArray.toString()); // Output: "buffer"
console.log(typeof bufFromArray);

// ARRAY BUFFER
const arrayBuffer = new Uint16Array(2)
arrayBuffer[0] = 299;
arrayBuffer[1] = 522;
console.log(arrayBuffer[0]);
console.log(arrayBuffer[1]);
console.log(arrayBuffer);
console.log(typeof arrayBuffer);


console.log(+"22"); // el signo + transforma numero en formato string en numeric value
var x = +"22"
console.log(typeof x);