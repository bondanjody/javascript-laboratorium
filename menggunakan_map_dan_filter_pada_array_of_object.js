// MENGGUNAKAN MAP DAN FILTER UNTUK MENANGANI ARRAY OF OBJECT

// membuat array yang berisi banyak objek
// NOTE : data seperti di bawah mungkin akan banyak ditemui terutama pada JSON
const dataPemain = [
    {
        nama : "Erling Haaland",
        age : 21,
    },
    {
        nama : "Kevin De Bruyne",
        age : 29,
    },
    {
        nama : "Phil Foden",
        age : 21
    },
    {
        nama : "Bernardo Silva",
        age : 27
    },
    {
        nama : "Julian Alvarez",
        age : 22
    },
    {
        nama : "John Stones",
        age : 25
    }
]

const pemainMuda = dataPemain.filter(pemain => pemain.age<25)
// console.log(pemainMuda)      kode di atas akan menyeleksi objek-objek anggota array yang memiliki age < 25. dan akan dimasukkan ke dalam variabel pemainMuda
const namaPemain = pemainMuda.map(pemain => `Mr. ${pemain.nama}`)
// console.log(namaPemain)      kode di atas akan mengambil properti nama dari tiap objek dalam array "pemainMuda" dan memasukkannya ke dalam variabel namaPemain
console.log(namaPemain[2])      // mengakses elemen ketiga dari array "namaPemain"
