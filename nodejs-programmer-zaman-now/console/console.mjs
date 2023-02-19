/*
    secara global object console bisa kita gunakan tanpa harus melakukan import module, dan console melakukan print text nya ke stdout
    namun kita juga bisa membuat objek console kita sendiri
    console dapat juga kita gunakan untuk menulis ke suatu file
    jadi console tidak hanya bisa digunakan untuk menampilkan tulisan di terminal saja
    https://nodejs.org/api/console.html 
*/


// contoh kode program 1 : Console untuk menuliskan log (menulis ke file)
import {Console} from 'console'
import fs from 'fs'

// membuat stream 
const logFile = fs.createWriteStream('./logFile.log')

const log = new Console({
    stdout : logFile,
    stderr: logFile
})
// ketika kita menggunakan console.info atau error dan lainnya maka akan ditulis ke logFile.log

log.info("Hello World !")
log.error("It Crashes !!!")

// menggunakan table
const player = {
    nama : "Harry Potter",
    nationality : "England"
}
log.table(player)



// NOTE : setelah kita run program ini, maka tidak akan muncul apapun di terminal tetapi info, error, dan table di atas ditulis di logFile.log




