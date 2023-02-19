// TITLE : Destructuring Assignment pada JavaScript

// Destructuring Assignment adalah expression pada JavaScript yang membuat kita dapat membongkar nilai dari array atau properti dari object ke dalam variabel terpisah

// membuat array 
const bil = [12, 34, 56];

// mendestructure array di atas 
// memasukkan nilai dari elemen-elemen bil ke dalam variabel a,b,c 
const [a, b, c] = bil;
// variabel a memiliki nilai 12. variabel b memiliki nilai 34. variabel c memiliki nilai 56
console.log(a);
console.log(b);
console.log(c);

// Contoh lain (MENGGUNAKAN ARRAY LITERAL)
// membuat array literal
let cars = ['Ferrari', 'Mustang', 'Hyundai', 'Honda'];
let [hans, dom] = cars;
console.log(hans);
console.log(dom);

// Contoh lain (DEKLARASI DAN INISIASI DIPISAH)
// mendeklarasikan variabel terlebih dahulu
let num1, num2;
// baru memasukkan nilai ke dalam variabel di atas
[num1, num2] = [16, 31, 90, 123];
console.log(num1);
console.log(num2);

// Contoh lain (JIKA VARIABEL LEBIH BANYAK DARIPADA ELEMEN ARRAY)
let [n1, n2, n3, n4] = [12, 43];
console.log(n1);
console.log(n2);
console.log(n3);
console.log(n4);
// maka variabel yang tidak kebagian elemen akan memiliki nilai undefined