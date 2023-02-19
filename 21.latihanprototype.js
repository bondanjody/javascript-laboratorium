// TITLE : menambahkan method ke dalam constructor function pada javascript dengan menggunakan prototype
// secara default constructor functions sudah memiliki prototype

// membuat object
function DataPresiden (nama, jumlahPeriode){
    this.nama = nama;
    this.jumlahPeriode = jumlahPeriode;
}

// menambahkan method ke dalam constructor function DataPresiden menggunakan prototype
DataPresiden.prototype.lamaMenjabat = function(){
    return `Lama ${this.nama} menjabat adalah ${this.jumlahPeriode*4} tahun.`;
}
const jokowi = new DataPresiden('Joko Widodo', 2);