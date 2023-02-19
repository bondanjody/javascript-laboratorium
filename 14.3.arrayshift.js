// TITLE : array method unshift()

// unshift() adalah kebalikan dari push()
// jika push() menambahkan elemen ke indeks terakhir array, maka unshift() menambakan elemen ke indeks awal array

// deklarasi array
const asean = ['indonesia', 'malaysia'];

// memasukkan elemen ke indeks awal array menggunakan method unshift()
asean.unshift('singapore');
// menampilkan isi array asean dengan menggunakan method join()
console.log(asean.join(' . '));
// output : singapore . indonesia . malaysia

asean.unshift('philipinnes', 'thailand', 'myanmar');
console.log(asean.join(' > '));
// output : philipinnes > thailand > myanmar > singapore > indonesia > malaysia