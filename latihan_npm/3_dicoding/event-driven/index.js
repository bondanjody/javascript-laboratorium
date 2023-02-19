// Untuk menggunakan event-driven pada nodejs dapat menggunakan core modules nya yang bernama EventEmitter

// contoh kode program1
const {EventEmitter} = require('events')

const myEvent = new EventEmitter()

// fungsi yang akan dijalankan ketika 'order-kopi' terjadi
const buatKopi = ({pengguna}) => {
    console.log(`Kopi atas nama ${pengguna} !`)
}

// mendaftarkan fungsi buatKopi sebagai listener event 'order-kopi'
// ketika event 'order-kopi' terjadi, maka fungsi buatKopi akan dijalankan
myEvent.on('order-kopi',buatKopi)

// memicu event order-kopi terjadi
myEvent.emit('order-kopi',{pengguna : "Bondan"})
// argumen kedua adalah nilai parameter yang diberikan ke fungsi buatKopi. contoh : berupa objek dengan nama properti 'pengguna' Bondan

console.log("----------------------------------------------------------------");

// contoh kode program 2
// menggunakan lebih dari satu fungsi pada 'on'

const billHarga = ({harga}) => {
    console.log(`Harap bayar seharga Rp. ${harga}`)
}

myEvent.on('order-kopi',billHarga)
// sekarang kita memiliki dua 'on' dengan callback fungsi yang berbeda (buatKopi dan billHarga) 

myEvent.emit('order-kopi',{pengguna : "James", harga : 20000})

console.log("----------------------------------------------------------------");

// contoh kode program 3
// atau anda dapat memiliki satu fungsi khusus yang menampung callback tersebut
const onOrderedListener = ({pengguna, harga}) => {
    buatKopi({pengguna})
    billHarga({harga})
}
myEvent.on('kedaiKopiListener',onOrderedListener)
myEvent.emit('kedaiKopiListener',{pengguna : "Harold", harga : 35000})

console.log("----------------------------------------------------------------");


// contoh soal dari dicoding
const birthday = (nama) => {
    console.log(`Happy Birthday, ${nama}!. Wish you all the best!`)
} 
myEvent.on('birthdayListener', birthday)
myEvent.emit('birthdayListener', "Harry")