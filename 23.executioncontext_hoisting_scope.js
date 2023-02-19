// TITLE : Execution Context, Hoisting, Scope

// Proses Creation Phase pada Global Variable
// mencari :
// 1. fungsi apapun lalu mengisinya dengan fn() /tanpa dijalankan
// 2. nama var lalu mengisinya dengan 'undefined'
// hoisting
// 3. membuat object window
// 4. this = window

// Contoh kode program :
// pemanggilan nama sebelum deklarasi variabel dapat menyebabkan masalah
// console.log(nama);
// var nama = 'Bondan';
// // output dari kode di atas adalah undefined

// Contoh kode program 2:
// // hal yang sama , pemanggilan fungsi sebelum deklarasi variabel dapat menyebabkan masalah
// console.log(gabung());
// var namaDepan = 'Bondan';
// var namaBelakang = 'Jody';
// function gabung(){
//     return `Halo ${namaDepan} ${namaBelakang} !`;
// }
// output : Halo undefined undefined !
// Note : apabila kamu pengen menggali lebih dalam tentang bagaimana JavaScript mengeksekusi kode program, kunjungi : http://www.pythontutor.com/javascript.html


// Function membuat Local Execution COntext
// yang didalamnya terdapat creation dan execution phase
// selain memiliki akses ke window, kita juga memiliki akses ke argumen
// ada hoisting juga (tetapi hanya bersifat lokal pada function itu saja)
// hoisting function hanya terjadi ketika function itu dipanggil
// Contoh kode program untuk brainstorming :)
function bondan(){
    console.log('Bondan');

    function jody(){
        console.log('Jody');

        function setyawan(){
            console.log('Setyawan');
        }
        // memanggil function setyawan
        setyawan();
    }
    // memanggil function jody
    jody();
}
// memanggil function bondan
bondan();

// NOTE : point penting nya (karena ini merupakan dasar supaya bisa memahami closures) adalah harus tau tumpukan / stack eksekusi kode program JavaScript. Karena tidak semuanya dieksekusi 'dari atas ke bawah' 