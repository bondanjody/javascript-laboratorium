class Persegi {
    constructor(panjang){
        this.panjang = panjang;
        this.lebar = panjang;
    }

    // menentukan luas dengan menggunakan getter
    get luasPersegi(){
        return this.panjang * this.lebar;
    }

    // misal jika kita mengetahui luas dan kita ingin menentukan panjang sisi persegi
    // maka kita bisa menggunakan setter seperti pada kode di bawah ini
    set luasPersegi(luas){
        // apabila mengetahui nilai luasnya maka kita akan mengeset nilai property panjang sesuai dengan akar dari luas tersebut 
        this.panjang = Math.sqrt(luas);
    }
}

// membuat objek
kotak1 = new Persegi(15);
console.log(kotak1.luasPersegi); // Note : kita tidak perlu menambahkan kurung saat memanggil method yang dibuat dengan getter

// menggunakan setter
// kita mengeset nilai luas menjadi 100
// perhatikan bahwa penulisan setter seperti di bawah ini
kotak1.luasPersegi = 100;
console.log(kotak1.panjang);  // sekarang nilai panjangnya merupakan akar dari 100