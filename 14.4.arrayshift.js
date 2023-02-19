// TITLE : menghapus elemen array dengan menggunakan method shift()

// shift() merupakan kebalikan dari pop(). jika pop() menghapus elemen dari indeks terakhir suatu array

// deklarasi array 
const regions = [
    'yogyakarta',
    'central java',
    'east java',
    'west java',
    'jakarta',
    'banten'
];

// menghapus elemen indeks pertama array menggunakan method shift()
regions.shift();
// menampilkan isi array dengan menggunakan method join()
console.log(regions.join(' | '));