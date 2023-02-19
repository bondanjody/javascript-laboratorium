// menggunakan module fs (filesystem) untuk membaca data

const filesistem = require('fs')
const jalan = require('path')

// membaca file secara asynchronous
const bacaFile = (error, data) => {
    // jika error
    if(error){
        console.log('Gagal membaca data !!!')
        return
    }
    // jika berhasil
    console.log(data)
}

// membaca text note.txt
filesistem.readFile('note.txt','utf-8', bacaFile)
/*
    output :
    Hello World !
*/

// membaca file baca.js dengan metode synchronous
const baca = filesistem.readFileSync('baca.js','utf-8')
console.log(baca);
/*
    output :
    // Ini file hanya untuk dibaca
    console.log('Hanya untuk dibaca')
*/


// soal dicoding
// membaca file indeks.txt dan menggunakan path.resolve()

// mencari path absolute file indeks.txt
const pathText = jalan.resolve(__dirname,'indeks.txt')
console.log(filesistem.readFileSync(pathText, 'utf-8'));
/*
    output :
    Halo semuanya !
*/