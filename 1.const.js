// TITLE = Menggunakan keyword const

// membuat array dengan const
const namaAnak = [
    'Brandon',
    'Baron',
    'Belle'
];

// mengubah obyek kedua array
namaAnak[1] = 'Brian';
// menampilkan nilai 'Brian'
console.log(namaAnak[1]);

// NOTE : keyword obyek yang dibuat dengan menggunakan keyword const dapat diubah nilainya. Tetapi akan menghasilkan error jika dideklarasikan kembali. Lihat kode di bawah :
// const namaKota = ['Semarang', 'Jakarta', 'Surabaya'];
// namaKota = ['Balikpapan', 'Pontianak', 'Samarinda'];
// console.log(namaKota[2]);
// Kode diatas akan menghasilkan error