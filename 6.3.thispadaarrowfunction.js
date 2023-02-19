// Contoh kode program 1:
// membuat object dengan constructor function
// Note : kita tidak bisa sembarangan mengubah function expression menjadi arrow function. contohnya pada constructor function, kita tidak dapat membuatnya dengan menggunakan arrow function
const Mobil = function(){
    this.merek = 'Avanza';
    this.tahun = 2012;
    // membuat method untuk menampilkan isi property pada object mobil dengan menggunakan arrow function
    this.showData = () =>{
        console.log(`Mobil ${this.merek} keluaran ${this.tahun}`);
        // apabila method ini kita panggil di console(mobilBondan.showData()) maka akan menghasilkan output : Mobil Avanza keluaran 2012
        // dan output kode di bawah ini merujuk pada objek mobil
        console.log(this);
        
    }
}
// membuat instance dari objek mobil
const mobilBondan = new mobil;

// Contoh kode program 2 :
// membuat objek dengan cara object literal
const motor ={
    merek: 'Honda Beat',
    tahun: 2008,
    // membuat method dengan menggunakan arrow function
    tampilData: ()=>{
        console.log(`Motor merek ${this.merek} keluaran tahun ${this.tahun}`);
        // output dari console.log diatas adalah : Motor merek undefined keluaran tahun undefined
        console.log(this);
        // output dari console.log diatas adalah : window
    }
}
// Penjelasan mengenai kode program kedua :
// Pada object literal, ARROW FUNCTION yang di dalamnya menggunakan THIS akan berperilaku berbeda. ia akan mencari ke scope di atasnya (lexical scope) dalam hal ini adalah objek motor 
// jika tidak ada yang bernama THIS.MEREK dan THIS.TAHUN maka ia akan mencari ke scope global
// sampai ia tau bahwa di scope global pun tidak ada yang namanya THIS.MEREK dan THIS.TAHUN maka akhirnya ia akan menampilkan UNDEFINED
// itulah sebabnya saat kita memanggil 'console.log(this)' akan menghasilkan output 'window' karena scope terakhir pencarian THIS.MEREK dan THIS.TAHUN adalah scope global (window)
// KESIMPULANNYA : arrow function TIDAK memiliki konsep THIS. 
// Walaupun arrow function tidak memiliki konsep this. hal ini dapat berguna di beberapa situasi.