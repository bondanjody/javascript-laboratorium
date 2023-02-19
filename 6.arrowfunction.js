// TITLE = Arrow Function JavaScript


const hello = (nama) => "Hello " + nama + " !";
// Penjelasan : kode di atas dinamakan IMPLICIT RETURN karena tidak menggunakan kurung kurawal dan tidak memakai keyword return

console.log(hello('Bondan'));
// output : Hello Bondan !

// Note : pada arrow function, apabila jumlah parameter hanya 1. maka boleh tidak menggunakan tanda kurung. Lihat kode di bawah ini
const greet = name => `Hi, ${name}. How are you ?`;
console.log(greet('Henry'));
// output : Hi, Henry. How are you ?

// Note : pada arrow function, apabila function tersebut tidak memiliki satupun parameter maka wajib menuliskan tanda kurung
const main = () => 'Hello World';
console.log(main());
// output : Hello World

