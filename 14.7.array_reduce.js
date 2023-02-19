// TITLE = array method reduce()

// berbeda dengan map atau filter, reduce memilii struktur yang sedikit lebih kompleks

// contoh kode program 1 menjumlahkan nilai array "Tanpa Reduce"
const bil1 = [2, 3, 1, 21];
let sum = 0;
for (let i of bil1){
    sum += i;
}
console.log(sum);

// contoh kode program 2 menjumlahkan nilai array dengan menggunakan Reduce
const jumlah_bil1 = bil1.reduce((accumulator, nilaiSaatIni) => accumulator + nilaiSaatIni, 0);
console.log(jumlah_bil1);
// Penjelasan kode :
// Perlu diketahui bahwa method reduce() dapat menerima 2 argumen yaitu function callback, dan initialValue (nilai awal). Pada kode di atas, initialValue bernilai 0
// function callback pada kode di atas memiliki 2 argumen yaitu 'accumulator' dan 'nilaiSaatIni'. 
// 'accumulator' memiliki peran yang sama seperti variabel 'sum' pada kode program 1. Yaitu menampung nilai yang ditambahkan.
// Sedangkan 'nilaiSaatIni' memiliki peran yang sama seperti variabel 'i' pada kode program 1. Dia bertugas menampung tiap elemen array yang di-iterate (dalam hal ini adalah bil1)

// Note : untuk melihat penjelasan lebih lanjut bisa membuka blog https://bondanjodyjournal.blogspot.com

// Kita juga bisa menghilangkan nilai initialValue
const jumlah = bil1.reduce((accumulator, nilaiSaatIni) => accumulator + nilaiSaatIni);
console.log(jumlah);
// Yang sebenarnya terjadi (jika kita tidak memberikan nilai initialValue) :
// Awal-awal accumulator akan langsung bernilai 2 (elemen pertama bil1) dan nilaiSaatIni akan bernilai 3 (elemen kedua bil1) lalu step selanjutnya adalah penjumlahan sama seperti di atas.