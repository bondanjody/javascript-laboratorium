// membuat outer function
function ucapSalam(waktu){
    // outer function mengembalikan sebuah inner function
    // membuat inner function
    return function (nama) {
        console.log(`Selamat ${waktu}, ${nama}!`);
    }
}

// membuat variabel yang berisi function outer (dengan parameter dari function outer)
let pagi = ucapSalam('pagi');
let siang = ucapSalam('siang');
let malam = ucapSalam('malam');

// memanggil function dengan menggunakan nama variabel 
// lalu memberikan argumen berdasarkan parameter dari inner function
pagi('Bondan');

// melihat informasi alur, closure dan lain-lain
console.dir(pagi);
// Long NOTE :
// Intinya, ada 2 pemrosesan pada kode program di atas. yang pertama adalah pada baris 11 - 13, yaitu pembuatan function dengan cara function expression (dengan variabel) dan mengisinya dengan outer function (lengkap dengan argumen untuk outer function)
// proses yang kedua yaitu memanggil function expression tadi dan memberinya argumen BERDASARKAN PADA INNER FUNCTION