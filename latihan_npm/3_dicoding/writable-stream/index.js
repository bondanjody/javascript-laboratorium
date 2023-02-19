// Menggunakan writeableSTream untuk menulis pada suatu file

const fs = require('fs')

const writeableStream = fs.createWriteStream('pustaka.txt')

writeableStream.write("Halo, Bondan !")
writeableStream.write("Ini saya Jessica.")
writeableStream.write("\n Pindah baris")
writeableStream.end("\n\tTerakhir")

/*
    Method end() digunakan untuk menandakan akhir dari writable stream sekaligus bisa digunakan sebagai penulisan writeable terakhir. Jadi boleh kosong atau boleh diisi
*/

