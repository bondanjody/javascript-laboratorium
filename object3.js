// TITLE = Membuat Object dengan cara Constructor

//Membuat function
function Mobil(tipe, pabrik, tahun){

    // NOTE : pada cara ini menggunakan keyword this
    this.tipe = tipe;
    this.pabrik = pabrik;
    this.tahun = tahun;

    // NOTE = pada cara ini tidak menggunakan 'return'
}

// Membuat objek spesifik

// NOTE : pada cara ini menggunakan keyword 'new'
var car1 = new Mobil('Avanza', 'Toyota', 2012);