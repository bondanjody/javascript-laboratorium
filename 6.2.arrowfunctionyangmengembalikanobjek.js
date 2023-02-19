// membuat array yang akan diolah
let wizardNames = [
    'Gregorius',
    'Algaz',
    'Riandum'
];

// membuat function yang mengembalikan nilai berbentuk objek
// Note : supaya mengembalikan objek (tidak mengembalikan RETURN) maka setelah tanda arrow ditambahkan tanda kurung terlebih dahulu baru tanda kurung kurawal.
// Baru setelah itu dibuatlah objeknya 
let jumlahHuruf = wizardNames.map(nama => ({nama:nama, jumlah:nama.length}));
// atau pada javascript versi terbaru dapat ditulis 
// let jumlahHuruf = wizardNames.map(nama => ({nama, jumlah:nama.length}));

console.log(jumlahHuruf);

// atau supaya lebih rapi lagi bisa menggunakan method console.table
console.table(jumlahHuruf);