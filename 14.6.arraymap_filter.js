// TITLE = Method Array : Map, Filter, Reduce

// Map, filter, reduce bertugas meng-iterate (mengulang) array dan dapat melakukan transformasi / komputasi dari array tersebut untuk menghasilkan array baru

// 1. Map
// map() method digunakan untuk membuat array dari array yang sudah ada, dan menerapkan sebuah function pada tiap elemen array yang sudah ada
// pada callback, hanya argumen 'elemen' yang dibutuhkan (syarat minimal). karena hanya satu argumen penulisan arrow function nya tidak memerlukan tanda () dan bisa langsung seperti di bawah ini
const array1 = ['Aguero', 'Alvaro', 'Andres'];
const array2 = array1.map(element => `Mr. ${element}`);
console.log(array2);
// argumen 'elemen' mewakili tiap elemen pada array1. Lalu callback dari map() meng-return tiap elemen dengan di tambahkan Mr. di depannya
// Seperti pada contoh di atas, kita bisa mengembalikan array baru yang merupakan hasil dari PENGOPERASIAN/PENGOLAHAN array pertama. Kesimpulanya : dengan map() kita bisa membuat array baru dengan elemen-elemen array pertama yang diolah (bisa ditambahkan sesuatu, dll).

// 2. Filter
// filter() mengambil tiap elemen pada array pertama dan menerapkan conditional statement pada elemen-elemen tersebut. Jika conditional nya bernilai true maka elemen tersebut akan lolos untuk dimasukkan pada array output. Jika false maka elemen tidak akan dimasukkan ke dalam array output
// penulisan filter() sama seperti map() kecuali karena bersifat conditional maka callback harus bernilai true/false
const arr1 = ['Apple', true, 23.5, 'grindelwald', '190', `false`];
const arr2 = arr1.filter(elemen => typeof elemen=='string');
console.log(arr2);
// callback pada arr2 meng-return kondisi yang mengecek apakah elemen bertipe data string. jika true maka akan dimasukkan ke dalam arr2
// contoh lain filter()
const dataTinggiBadan = [
    {nama : "Bondan", tinggi : 163},
    {nama : "Ibrahimovic", tinggi : 192},
    {nama : "Jeremy", tinggi : 152},
    {nama : "Alip", tinggi : 160},
    {nama : "Burry", tinggi : 160.3}
];
const lolos = dataTinggiBadan.filter(elemen => elemen.tinggi>160);
console.log(lolos);
// kode di atas menyeleksi yang memiliki nilai properti tinggi lebih dari 160

