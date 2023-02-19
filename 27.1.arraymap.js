// TITLE : menggunakan method array map()

// function di dalam method map() dapat menampung 3 parameter yaitu (element, index, array). atau jika hanya satu parameter berarti itu mewakili 'elemen' saja. dst.

// membuat array kosong untuk nantinya menampung bilangan ganjil 1 - 50
const bilGanjil = [];

// membuat perulangan untuk mengisi array bilGanjil dengan bilangan ganjil 1 - 50
for (bil = 1; bil <=50; bil+=2){
    // memasukkan nilai kedalam array
    bilGanjil.push(bil);
}

// membuat array bilGanjil2 yang berisi semua elemen dari bilGanjil
// method map() menampung satu parameter yaitu 'x' yang mewakili dari tiap elemen bilGanjil. 
// lalu method map() mengembalikan nilai 'x' (nilai tiap elemen) sehingga dapat masuk ke array bilGanjil2 
// SELALU INGAT BAHWA map() selalu mengembalikan data dalam bentuk array
let bilGanjil2 = bilGanjil.map(x => x);
console.log(bilGanjil2);

// membuat array baru 
let bilGanjilkali5 = bilGanjil.map(x => x*5);
console.log(bilGanjilkali5);