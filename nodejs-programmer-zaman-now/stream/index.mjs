// https://nodejs.org/api/stream.html 
/*
    Contoh :
    - writeable stream : stream yang bisa ditulis
    - readable stream : stream yang bisa dibaca

*/

// contoh stream pada filesystem
import fs from 'fs'

// stream untuk menulis ke file
const writer = fs.createWriteStream("target.txt")
writer.write("Hello !")
writer.write("There !")
// method end() bisa juga diberi parameter untuk ditulis ke file atau bisa juga dibiarkan kosong
writer.end("Bondan")

// stream untuk membaca ke file
const reader = fs.createReadStream("target.txt")
reader.addListener('data', (data) => {
    console.log(data.toString());
})