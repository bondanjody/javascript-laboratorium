// MEMBUAT PROGRAM UNTUK MEMBACA FILE INPUT.TXT DAN MEMASUKKANNYA KE OUTPUT.TXT DENGAN DIKURUNG PER KURUNG 15 KARAKTER
const fs = require('fs')

const readableStream = fs.createReadStream('input.txt', {highWaterMark:15})
const writeableStream = fs.createWriteStream('output.txt')

// membuat variabel penampung readableStream
let penampung = ""

readableStream.on('readable', () => {
    try{
        // penampung = `[${readableStream.read()}]`
        penampung = `${readableStream.read()}\n`
        writeableStream.write(penampung)
    }catch(error){
        // console.log(error)
    }
})


// PERCOBAAN :
// readableStream.on('readable', () => {
//     try{
//         penampung = `[${readableStream.read()}]`
//         console.log(penampung)
//     }catch(error){

//     }
// })

// console.log(penampung)


// writeableStream.end()

