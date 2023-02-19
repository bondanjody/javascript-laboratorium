// zlib - standard library yang digunakan untuk melakukan kompresi dengan gzip
// misalnya sebuah file kita compress, sehingga nantinya kita bisa melakukan decompress lagi
// https://nodejs.org/api/zlib.html 

import zlib from 'zlib'
import fs from 'fs'


const sumber = fs.readFileSync('./zlib.mjs')    // membaca file yang akan dikompress
const hasil = zlib.gzipSync(sumber)   // mengkompress
// Note : zlib harus memilik source (file yang akan dicompress) dalam bentuk buffer

fs.writeFileSync('file-hasil.txt', hasil)   // menuliskan file kompresan ke file-hasil.txt
// NOTE : setelah di kompress maka hasilnya akan berupa binary sehingga tidak bisa kita baca

