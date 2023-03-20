const path = require('path');

const filePath = 'home/user/documents/file.txt';
const fileName = path.basename(filePath);

const filePathDos = 'desktop/books/coding/javascript.pdf';
const fileNameDos = path.basename(filePathDos);


console.log(fileName);
console.log(fileNameDos);