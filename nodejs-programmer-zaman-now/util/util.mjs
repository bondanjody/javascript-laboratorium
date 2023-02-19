// https://nodejs.org/api/util.html     -> documentation 

import util from 'util'

// contoh kode program 1
let nama = "Bondan"
console.log(util.format("Hello %s !", nama));
// output dari kode di atas : Hello Bondan !

// contoh kode program 2
let namaClan = "Surotoson"
console.log(util.format("Hello %s %s !", nama, namaClan));
// output : Hello Bondan Surotoson !

// contoh kode program 3 (menampilkan json)
// misal memiliki data string seperti di bawah ini
const userData = {
    username : "bondanjody9",
    password : "long123"
}
console.log(util.format("Data : %j", userData));
// output kode di atas akan sama dengan = console.log(`Data : ${JSON.stringify(userData)}`)

// contoh method lain yang cukup berguna adalah promisify() yang dapat digunakan untuk mengubah callback menjadi promise