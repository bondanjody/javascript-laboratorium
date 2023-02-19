// menggunakan mofule filesystem yang menggunakan promise
import fs from 'fs/promises'

const bacaText = await fs.readFile('./synchronous.mjs')

// console.log(bacaText);   Output berupa buffer, sehingga kita perlu mengconvert nya menjadi string dengan toString()
const hasil = bacaText.toString()
console.log(hasil);

fs.writeFile('temporary.txt', bacaText)
// kode di atas menulis pada file temporary.txt dengan isi dari variabel bacaText