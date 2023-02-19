// TITLE : REST PARAMETER pada JavaScript

// membuat function
function myFunc(param1, param2, ...sisa){
    return `param1 = ${param1}, param2 = ${param2}, sisanya = ${sisa}`;
}

console.log(myFunc(2, 4, 7, 12, 34));
// NOTE : ...sisa adalah rest parameter. REST parameter hanya dapat digunakan bila peletakannya di akhir / tidak bisa ditaruh di awal parameter
// rest parameter berbentuk ARRAY


// contoh kode program 2 :
// menjumlahkan seluruh elemen array rest parameter menggunakan for...of
// membuat function penjumlahan rest parameter
function additione(...angka){
    let score = 0;
    // menggunakan perulangan for...of
    for(const x of angka){
        score += x;
    }
    return score;
}
console.log(additione(2,5,9,12));


// contoh kode program 3 :
// menjumlahkan seluruh elemen array rest parameter menggunakan method array reduce()
function simplePenambahan(...numbero){
    return numbero.reduce((a,b) => a+b);
}
console.log(simplePenambahan(12,71,20,62));


// contoh kode program 4 : 
// rest parameter pada array destructuring
// membuat array
const makanan = ['Mie Ayam', 'Gado-Gado', 'Pecel', 'Geprek'];
const [terfavorit1, terfavorit2, ...favlain] = makanan;
console.log(favlain);


// contoh kode program 5 :
// rest parameter pada object destructuring
// membuat object
const kelasIX = {
    waliKelas : 'Purwaningsih',
    ketuaKelas : 'Aldy',
    nakal1 : 'Dipo',
    nakal2 : 'Fradit',
    nakal3 : 'Ilham'
};
const {waliKelas, ketuaKelas, ...anggotaKelas} = kelasIX;
console.log(anggotaKelas);
console.log(waliKelas);


// contoh kode program 4 :
// melakukan filtering
// kode program di bawah ini akan memfilter elemen apa saja yang memiliki tipe data number lalu menampilkannya pada console
// blok program di bawah menggunakan method array filter() untuk melakukan filtering
// membuat function filtering
function filtering(tipe, ...arrMulti){
    // menggunakan filter untuk menyaring tipe data (menggunakan typeof) array rest parameter
    // mekanisme : setiap nilai elemen array 'arrMulti' akan dicek apakah tipenya (typeof) sama dengan parameter pertama pada function ini . Dalam hal ini parameter pertama adalah number 
    return arrMulti.filter(n => typeof n === tipe);
}
console.log(filtering('number', 23, 4.0, 123, 128, true, 0));
// output : Array(5) [ 23, 4, 123, 128, 0 ]
// untuk percobaan lebih lanjut ganti nilai parameter pertama menjadi tipe data lain seperti : 'string', 'boolean'