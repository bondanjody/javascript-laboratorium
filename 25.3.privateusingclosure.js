// TITLE : membuat program counter (penambahan) sederhana 

// Ini adalah salah satu kegunaan closure yaitu untuk membuat private elemen
// pada program di bawah ada 2 buah variabel dengan nama yang sama yaitu counter. tetapi variabel counter yang ada di dalam outer function bersifat private. sedangkan yang satunya bersifat global.
// mengakses variabel yang ada di dalam function(private) tidak akan ikut mengubah variabel yang satunya. begitupun sebaliknya  

// membuat outer function dengan metode function expression
let tambah = function(){
    // membuat variabel yang menampung nilai yang akan diincrement
    let counter = 0;
    return function(){
        return ++counter;
    }
}

// membuat variabel bernama sama (counter)
let counter = 123;

// membuat variabel untuk menampung outer func
let hitung = tambah();

// memanggil fungsi diatas
console.log(hitung());
console.log(hitung());
console.log(hitung());
// output :
// 1
// 2
// 3
// counter tidak akan berubah menjadi 123