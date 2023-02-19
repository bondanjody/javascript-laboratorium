// The process object provides information about, and control over, the current Node.js process.
// https://nodejs.org/api/process.html

// Karena Process merupakan instance dari EventEmitter, kita dapat menambahkan listener ke dalam process

// Menggunakan process.exit
import process from "process";

process.addListener("exit", (exitCode) => {
    console.info(`NodeJS exits with exit code : ${exitCode}`)
})

console.log("Nilai process.argv : ");
// argv digunakan untuk menangkap argumen dan ia bertipe array of strings
console.table(process.argv)
// Coba ketikkan : node index.mjs Bondan Jody 
// lalu lihat pada tabel argv
/*
    Apabila ingin menggabungkan Bondan Jody supaya menjadi hanya 1 string cukup ubah menjadi "Bondan Jody"
*/
console.info(`Nilai process.arch : ${process.arch}`)
console.log(`Nilai process.version : ${process.version}`)

// Percobaan atribut dari process :

// console.log("Nilai process.env : ")
// console.info(process.env)
// console.log("Nilai process.report :");
// console.info(process.report)

// untuk keluar atau menyetop NodeJS
process.exit(69)

console.info("Tidak akan dieksekusi karena program sudah exit")