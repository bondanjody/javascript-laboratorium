/*
    Recursion / Recursive merupakan suatu kondisi dimana sebuah fungsi memanggil dirinya sendiri di dalam fungsi tersebut.

    Catatan penting :
    1. suatu recursion harus memiliki minimal 1 kondisi dimana perulangannya berhenti (false condition)
    2. kondisi yang brfungsi menyetop sebuah function dalam memanggil dirinya sendiri disebut "base case"

    mungkin permasalahan ini bisa ditangani dengan looping (for, while). tetapi dalam bahasa pemrograman seperti clojure yang tidak ada looping, recursion menjadi sangat penting.

    selain itu, jika kamu menggunakan for loop , maka kamu harus tau berapa jumlah looping yang kamu harus lakukan. tetapi recursion dan while loop memungkinkan kamu membuat sebuah perulangan tanpa harus mengetahui lebih dulu jumlah perulangannya. Kamu hanya perlu tau kondisi ketika looping itu berhenti

    CARA MEMBACA SEBUAH BLOK KODE PROGRAM YANG MENGGUNAKAN RECURSION :
    1. Selalu identifikasi terlebih dahulu "base case"
    2. Berikan argumen ke fungsi yang akan segera mencapai kasus dasar.
    3. identifikasi argumen yang akan membuat recursion berjalan minimal sekali
*/

// contoh kode program 1 (mencetak bilangan di bawah 10)
const looping1 = num => {
    if(num > 10) return
    console.log(`Bilangan ke-${num}`)
    looping1(num + 1)
}
looping1(1)

console.log("--------------------------------------- 1")

// mencetak bilangan dengan rentang tertentu
const looping2 = (awal, jumlah) => {
    if(awal > jumlah) return
    console.log(`No. ${awal}`)
    looping2(awal + 1, jumlah)
}
looping2(5,20)