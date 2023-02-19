// TITLE : menggunakan method array filter()

// method filter pada array dapat digunakan untuk menyaring elemen-elemen array sesuai dengan yang kita inginkan 
// membuat array kosong untuk nantinya menampung bilangan ganjil 1 - 50
const bilGanjil = [];

// membuat perulangan untuk mengisi array bilGanjil dengan bilangan ganjil 1 - 50
for (bil = 1; bil <=50; bil+=2){
    // memasukkan nilai kedalam array
    bilGanjil.push(bil);
}

// membuat array baru untuk menampung bilangan ganjil antara 20 - 30
// pada kode program ini method filter() mempunyai 1 parameter yaitu 'x'. selanjutnya mengembalikan (return) pengkondisian untuk menyaring bilangan yang diinginkan 
const bilGanjil20_30 = bilGanjil.filter(x => (x >= 20) && (x <= 30));

console.log(bilGanjil20_30);
// output : [21, 23, 25, 27, 29]