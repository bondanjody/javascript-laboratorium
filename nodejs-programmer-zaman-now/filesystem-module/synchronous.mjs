// menggunakan module synchronous dari filesystem module
import fs from 'fs'

const bacaFile = fs.readFileSync('./file-dibaca.txt')

// console.log(bacaFile);   Output : <Buffer > sehingga harus di convert ke string menggunakan toString()

console.log(bacaFile.toString());

// menulis file
fs.writeFileSync('./file-dibaca.txt',"Hello from the other side !")

console.log(fs.readFileSync('./file-dibaca.txt').toString());

// Note : untuk kode program async yang menggunakan callback hampir sama dengan synchronous, hanya saja ia ditambahkan callback pada saat kita menggunakan method write atau readFile nya

