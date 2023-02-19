// TITLE : Tagged Template Literal

// membuat konstanta
const nama =`Bondan`;
const waktu = `Morning`;

// membuat variabel template literal biasa
let sayHi = `Hello, ${nama}, Good ${waktu} !`;
console.log(sayHi);
// output : 

// membuat function yang akan digunakan pada tagged template literals
function coba(){
    return 'Percobaan';
}
// membuat variabel tagged template literal yaitu menaruh function di depan template literal
let res = coba`Hello, ${nama}, Good ${waktu} !`;
console.log(res);
// output : Percobaan (artinya template literal yang terletak setelah function di atas diabaikan) "Lihat kode program 28.7 untuk mempelajari Tagged Template Literal lebih lanjut"