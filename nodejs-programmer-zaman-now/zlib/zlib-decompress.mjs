// Ini adalah lanjutan dari kode program zlib-compress.mjs
// disini kita akan melakukan decompress dari file-hasil.txt

import zlib from 'zlib'
import fs from 'fs'

const dekompres = zlib.unzipSync(fs.readFileSync('./file-hasil.txt'))

console.log(dekompres.toString());
// NOTE : hasil dekompres masih berupa buffer, sehingga perlu diubah ke String() supaya bisa menampilkan teks aslinya


// kompress dan dekompress ini berguna ketika kita ingin mengirim data, kita kompres dulu supaya ukurannya kecil setelah terkirim / diterima, kita lakukan dekompres