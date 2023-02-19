// TITLE : Sama seperti pada latihan 20 bedanya cuma kali ini kita menggunakan class
class DataPresiden{
    // sama seperti membuat function constructor bedanya kali ini kita hanya perlu menuliskan 'constructor' saja
    constructor(nama,jumlahPeriode){
        this.nama = nama;
        this.jumlahPeriode = jumlahPeriode;
    }

    // membuat function/method didalam class tidak perlu menggunakan keyword function
    lamaMenjabat(){
        return `Lama Presiden ${this.nama} adalah selama ${this.jumlahPeriode*4} tahun.`
    }
}

// membuat objek
const sby = new DataPresiden('Susilo Bambang Yudhoyono', 2);
// memanggil fungsi lamaMenjabat()
console.log(sby.lamaMenjabat());
// NOTE : hanya sebuah ide tambahan untuk program ini, tambahkan pengkondisian untuk mengecek apabila jumlahPeriode tidak boleh bernilai lebih dari 2 atau kurang dari 1