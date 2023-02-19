// perlu mengimpot 
import process from "process";
import readline from "readline"

// harus membuat createInterface dulu untuk menentukan jenis input/outputnya
// disini kita memilih jenis input/output via terminal sehingga menggunakan modul process stdin dan stdout
const input = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

// untuk meminta input dari user, gunakan question()
// argumen pertama adalah teks yang akan ditampilkan sebelum user melakukan input
input.question("Halo, Siapa nama Anda ? ", (nama) => {
    console.log(`Halo, ${nama}`);
    // jika kita sudah tidak ingin menggunakan input lagi, maka tinggal kita tutup
    input.close()
})

// link docs : https://nodejs.org/dist/latest-v16.x/docs/api/readline.html 
/*
    Note : 
    untuk nodeJS versi 16 readline masih menggunakan callback, berbeda di versi terbaru 17/18 yang sudah bisa menggunakan promise
*/