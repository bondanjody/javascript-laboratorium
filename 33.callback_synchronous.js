// TITLE : contoh program sederhana tentang callback dengan orientasi synchronous

// membuat function callback
function say(nama){
    alert(`Hay, ${nama} !`);
}

// function yang nantinya akan dipanggil
function mainSay(callback){
    // mendapatkan nilai dari inputan user
    const nama = prompt('Siapa nama mu ?');
    // parameter 'callback' adalah function yang menerima parameter nilai inputan user
    callback(nama);
}

// memanggil function mainSay dengan parameternya function 'say'
mainSay(say);
// Mengapa 'say' tidak ditulis dengan tanda ()? Yaitu supaya function 'say' dijalankan belakangan
