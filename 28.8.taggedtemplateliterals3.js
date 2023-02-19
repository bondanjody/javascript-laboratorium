// TITLE : tidak tau jumlah expression pada tagged template literal

// Dari kode program 28.7 muncul pertanyaan bagaimana jika kita tidak tau berapa jumlah expression yang ada pada suatu tagged template literal untuk digunakan pada parameter function ?
// Pada versi terbaru dari JavaScript terdapat fitur REST parameter yang berfungsi untuk menampung seluruh expression yang ada pada template literal
// Lihat kode program berikut untuk tau bagaimana cara menggunakannya

// membuat konstanta
const nama = 'Bondan';
const waktu = 'Morning';
const addition = 'Have a Nice Day';

// membuat function yang akan digunakan pada tagged template literal
// dan membuat REST PARAMETER
function say(strings, ...argumen){
    // nama untuk REST PARAMETER bisa apa saja seperti : argumen, value, etc.
    return addition;
}

// membuat tagged template literals
const sayHi = say`Hi, ${nama} ! Good ${waktu} ! ${addition}`;
console.log(sayHi);
// output : Have a Nice Day 