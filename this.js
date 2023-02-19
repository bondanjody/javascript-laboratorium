//TITLE = Konteks 'This' pada function
function Hello (nama){
    console.log(this);
    console.log("Halo " + nama);
}

// Memanggil function
Hello("Bondan");

// Kesimpulan
// 'this' pada function global akan mengembalikan nilai 'window'