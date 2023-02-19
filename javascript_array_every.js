/*
array.every() merupakan fungsi bawaan dari array yang digunakan untuk mengecheck apakah semua nilai dari sebuah array sesuai dengan kriteria yang didefinisikan. Kembalian dari array.every() adalah nilai Boolean.
*/

// Contoh kode program 1 (mengecek apakah nilai suatu array memenuhi kriteria tertentu)
const nilaiMTKBondan = [80, 98, 78]
const conclusionBondan = nilaiMTKBondan.every(elemen => elemen>= 70)
console.log(conclusionBondan)
// output : true