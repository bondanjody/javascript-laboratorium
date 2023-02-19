// MENGEKSPOR SATU PER SATU ELEMEN
// untuk mengekspor elemen kita dapat mengekspornya satu persatu, seperti contoh di bawah ini
export const kali = (a, b) => a*b;
export const sayHello = {
    nama : 'Bondan',
    say : () => `Hello, ${this.nama}`
}
// jadi, apabila kita hanya ingin mengekspor elemen tertentu saja. maka kita hanya perlu menambahkan keyword 'export' di depan elemen tersebut


// MENGEKSPOR LEBIH DARI SATU ELEMEN SEKALIGUS
// membuat function
function tambah(a, b){
    return a + b;
}

// membuat array
const singer = ['Ed Sheeran', 'Laura Brehm', 'Adam Levine'];

// mengekspor kedua elemen di atas 
export {tambah, singer};
// perhatikan syntax apabila kita ingin mengexport lebih dari satu elemen secara bersamaan
