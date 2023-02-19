// TITLE = Refactoring Sederhana
// Refactoring = seminimal mungkin kode dengan hasil yang sama

//Contoh kode1 :

// function hitungVolumeBalok(panjang, lebar, tinggi){
//     var hasil = panjang * lebar * tinggi;
//     return hasil;
// }
// console.log(hitungVolumeBalok(12,4,8));



// Kode di atas dapat dipersingkat sebagai berikut :
function hitungVolumeBalok(panjang, lebar, tinggi){
    return panjang*lebar*tinggi;
}
console.log(hitungVolumeBalok(12,4,8));

