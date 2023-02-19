function main(){
    let nama = 'Bondan'; // local variabel
    function showNama(){    // inner function (closure)
        console.log(nama);  // mengakses ke parent variabel
    }
    showNama();
}
main();
// Note :
// untuk mengecek tentang informasi closure dan scope pada kode program di atas ganti, modifikasi kode menjadi seperti ini :

// function main(){
//     let nama = 'Bondan'; // local variabel
//     function showNama(){    // inner function (closure)
//         console.log(nama);  // mengakses ke parent variabel
//     }
//     console.dir(showNama);
// }
// main();