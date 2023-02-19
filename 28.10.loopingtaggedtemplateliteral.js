// TITLE : melakukan looping tagged template literals

// membuat konstanta
const nama = 'Bondan';
const waktu = 'Morning';
const addition = 'Have a Nice Day';

// membuat function yang akan digunakan pada tagged template literal
// dan membuat REST PARAMETER
function say(strings, ...argumen){
    // membuat variabel yg menampung hasil
    let hasil = '';
    // melakukan looping dengan menggunakan forEach() supaya tidak mengembalikan array baru
    strings.forEach((str, i) => {
        hasil += `${str}${argumen[i] || ''}`;
    });
    return hasil;
    // Penjelasan kode di atas :
    // str menampung elemen dari array strings yaitu template literalnya (Hi, Good, etc.)
    // i merupakan index. digunakan untuk menampilkan elemen array dari rest parameter argumen
    // penambahan OR (||) di akhir expression adalah supaya apabila string terakhir tidak memiliki pasangan expressionnya, maka expression diganti dengan string kosong
}

// membuat tagged template literals
const sayHi = say`Hi, ${nama} ! Good ${waktu} ! ${addition}`;
console.log(sayHi);
// Hi, Bondan ! Good Morning ! Have a Nice Day