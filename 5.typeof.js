// TITLE = Mengetahui tipe data suatu variabel dengan operator typeof
// mendeklarasikan variabel
let nama, umur, statusPernikahan;
let planetNames = [
    'Mercury',
    'Earth',
    'Mars'
]

// mengisi variabel nama, umur, statusPernikahan
nama = "Bondan";
umur = 21;
statusPernikahan = false;

// membuat variabel kosong
var nationality;
var money = null;

// membuat object
const indonesianPresident = {
    name : 'Joko Widodo',
    age : 60,
    born : 'Surakarta'
}

// membuat fungsi
function kali(bil1, bil2){
    return bil1 * bil2;
}
var bagi = function (bil1, bil2){
    return bil1 / bil2;
}

// menampilkan tipe data dari variables diatas
console.log(typeof nama);
console.log(typeof umur);
console.log(typeof statusPernikahan);
// Kode di bawah akan menghasilkan output Object karena Array dianggap sebagai object
console.log(typeof planetNames);
console.log(typeof nationality);
// Kode di bawah akan menghasilkan output Object karena null dianggap sebagai object
console.log(typeof money);
console.log(typeof kali);
console.log(typeof bagi);