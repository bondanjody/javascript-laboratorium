// TITLE = Membuat object dengan function declaration

// Mendeklarasikan function
function buatObjekOrang (nama, umur, agama, kebangsaan){
    //Membuat objek untuk menampung parameter di atas
    var org = {};
    org.nama = nama;
    org.umur = umur;
    org.agama = agama;
    org.kebangsaan = kebangsaan;
    //jangan lupa return nya supaya object dapat ditampilkan
    return org;
}

// Membuat object baru spesifik
var org1 = buatObjekOrang('Bruno', 24, 'Christian', 'Portuguese');

// Membuat objek kedua spesifik
var org2 = buatObjekOrang('Benjamin', 20, 'Jewish', 'Israeli');

// Sekarang kamu punya objek tersendiri
// Dan jika ingin membuat objek spesifik lain tinggal memanggil fungsi di atas
