// TITLE : melompati elemen pada destructuring assignment

// membuat array dan memasukkannya ke dalam variabel dengan cara destructuring
// Note : Jika kamu ingin melompati suatu elemen pada destructuring assignment, maka kamu hanya perlu jangan menghapus koma 
// dari kode di bawah ini artinya kita melompati elemen kedua dan ketiga , sehingga hanya elemen pertama dan keempat saya yang masuk ke dalam variabel yang kita buat
const [one, , , four] = [1, 2, 3, 4];

console.log(one);
console.log(four);
