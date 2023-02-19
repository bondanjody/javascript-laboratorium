// TITLE : Tagged Template Literal letak expression dan string pada function

// membuat konstanta
const nama = 'Bondan';
const waktu = 'Morning';

// membuat function yang akan digunakan pada tagged template literal
function say(strings, nama, waktu){
    return nama;
}

// membuat tagged template literals
const sayHi = say`Hi, ${nama} ! Good ${waktu}`;
console.log(sayHi);
// output dari kode di atas adalah array dari string pada template literal dan dipisahkan oleh expression. yaitu : 'Hi, ' ' ! Good ' ''

// lalu kemanakan expressionnya ?
// sebenarnya function say() tidak hanya memiliki 1 buah parameter. namun tergantung pada expression yang kita berikan. jadi pada function di atas sebenarnya fungsi say memiliki 3 parameter yaitu : 
// strings => untuk menampung string pada template literal (Note : nama parameter bisa apa saja)
// nama => dari expression nya yang merujuk pada variabel nama
// waktu => dari expression yang merujuk pada variabel waktu
// Coba ubah function di atas menjadi :
// function say(strings, nama, waktu){
//     return nama;
// }
// atau 
// function say(strings, nama, waktu){
//      return waktu;
// }
// untuk mengecek kebenarannya.
// Lanjut ke kode program 28.8