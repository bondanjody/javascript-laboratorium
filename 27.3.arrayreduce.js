// TITLE : menggunakan method array reduce 

// method reduce() mengembalikan nilai tunggal berdasarkan tipe nilai itu (bukan array) 
// method reduce() mengeksekusi callback function yang mana callback function tersebut dapat menampung 4 parameter , yaitu : accumulator, currentValue, index, array (index, dan array bersifat opsional dan jarang digunakan )

// membuat array
const num = [23,45,12,67];
// menyiapkan function untuk digunakan sebagai callback pada method reduce()
const numReduce = (akumulator, currentValue) => akumulator - currentValue;

// membuat variabel baru yang berisi hasil seluruh pengurangan array num (23-45-12-67)
const num2 = num.reduce(numReduce);
console.log(num2);
// output : -101
console.log(typeof num2);
// output : number

// membuat variabel baru 
const num3 = num.reduce(numReduce, 56);
// nilai 56 pada kode di atas disebut sebagai 'initialValue' yaitu nilai yang dimasukkan (initialize) ke dalam array yang diolah
// operasi dari kode di atas menjadi (56-23-45-12-67)
console.log(num3);
// output : -91

