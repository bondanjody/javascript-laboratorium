// TITLE : menambahkan property baru ke dalam constructor

// membuat object dengan constructor
// Note : biasakan mengawali constructor dengan huruf Kapital
function DataNegara(nama, ibukota, kemerdekaan){
    this.nama = nama;
    this.ibukota = ibukota;
    this.kemerdekaan = kemerdekaan;
}

// membuat object pertama
const negara1 = new DataNegara('Amerika Serikat', 'Washington D.C', 1878);
// // menampilkan data object pertama dengan menggunakan for in
// for(x in negara1){
//     console.log(negara1[x]);
// }

// membuat object kedua
const negara2 = new DataNegara('Britania Raya', 'London', 1212);

// menambahkan properti baru
negara2.chief = 'Queen Elizabeth';
// menampilkan data object kedua dengan menggunakan for in
for(x in negara2){
    console.log(negara2[x]);
}
// output :
// Britania Raya
// London
// 1212
// Queen Elizabeth
