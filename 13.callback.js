// TITLE : Callback sederhana pada JavaScript

// Note : callback adalah apabila kita menggunakan fungsi sebagai argumen

// membuat fungsi untuk menampilkan hasil
function tampil(hasil){
    document.write(hasil);
}

// membuat fungsi untuk melakukan kalkulasi
function tambah(bil1, bil2, myCallback){
    // melakukan kalkulasi
    let res = bil1 + bil2;
    // menyatakan bahwa argumen myCallback adalah fungsi dan membuatnya menampung parameter yang berisi nilai dari hasil kalkulasi di atas
    myCallback(res);
}

// memanggil fungsi tambah() dengan menyertakan argumen yang merujuk pada fungsi 'tampil', jadi akan menampilkan hasil kalkulasi
// Note : ketika kamu menggunakan sebuah fungsi untuk argumen maka jangan gunakan tanda ()
tambah(25,34,tampil);

// Output :59