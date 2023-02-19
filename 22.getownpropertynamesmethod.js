// TITEL : menggunakan method object.getOwnPropertyNames
// Object.getOwnPropertyNames digunakan untuk menampilkan daftar property sebuah object dalam bentuk array

const binatang = {
    nama : 'Tom',
    spesies : 'Kucing',
    umur : 2
};

console.log(Object.getOwnPropertyNames(binatang));