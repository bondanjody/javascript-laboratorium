// untuk menjalankan kode program dalam mode debugger ketikkan : node inspect coba-debugging.mjs
const sayHi = (nama = "John") => {
    debugger
    return `Hai, ${nama}`;
}

const orang1 = "Harry"
debugger    // Note : debugger ini akan dijalankan lebih dulu daripada yang atas, karena debugger du atas terletak di dalam fungsi sehingga harus menunggu fungsinya dipanggil terlebih dahulu
console.log(sayHi(orang1));

/*
    lihat dokumentasi debugger supaya tau perintah-perintah yang digunakan untuk debugging, seperti : watch
    https://nodejs.org/api/debugger.html 
*/