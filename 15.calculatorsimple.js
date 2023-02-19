// TITLE : membuat kalkulator pertambahan sederhana

// membuat function untuk melakukan kalkulasi
function tambah(a,b){
    return a+b;
}

// membuat variabel untuk menampung nilai yang akan dimasukkan user
// method parseInt() digunakan untuk mengubah string(default) dari input user
let x = parseInt(prompt('Masukkan bilangan pertama :'));
let y = parseInt(prompt('Masukkan bilangan kedua :'));
// menampilkan hasil kalkulasi
window.alert('Hasil '+x+' ditambah '+y+' adalah :' + tambah(x,y));