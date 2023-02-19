// TITLE : modifikasi dari kode 25.3

// membuat closure tanpa harus 2 kali proses (menampung outer function ke dalam variabel , baru kemudian memanggilnya)

// POIN PENTING : mengubah outer function menjadi IIEF (immidiately invoked) / self invoking function 
let tambah = (function(){
    // membuat variabel yang menampung nilai yang akan diincrement
    let counter = 0;
    return function(){
        return counter +=5;
    }
})();

// memulai counter 
console.log(tambah());
console.log(tambah());
console.log(tambah());
// output :
// 5
// 10
// 15