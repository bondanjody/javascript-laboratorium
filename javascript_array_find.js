/*
Mirip dengan array.some(), array.find() sesuai namanya digunakan untuk mencari apakah di dalam deretan nilai terdapat nilai yang sesuai dengan kriteria yang kita definisikan pada callback function. 

Yang membedakan array.find() dengan array.some(), find akan menghasilkan satu nilai dari elemen yang pertama kali ditemukan berdasarkan kriteria tertentu dan akan menghasilkan nilai undefine bila tidak ada kriteria yang terpenuhi pada item array.
*/

// contoh kode program find (mencari nilai di suatu array of objects)
const dataSiswa = [
    {
        nama : "Bondan Jody Setyawan",
        nilai : 98,
        negara : "Indonesia"
    },
    {
        nama : "Kevin De Bruyne",
        nilai : 80,
        negara : "Belgia"
    },
    {
        nama : "Ahmad Dahlan",
        nilai : 90,
        negara : "Saudi Arabia"
    },
    {
        nama : "Jack Grealish",
        nilai : 88,
        negara : "Inggris"
    },
    {
        nama : "Phil Foden",
        nilai : 95,
        negara : "Inggris"
    }
]

const british = dataSiswa.find(elemen => elemen.negara==="Inggris")
console.log(british)
// output : { nama: 'Jack Grealish', nilai: 88, negara: 'Inggris' }
// objek pertama yang memiliki nilai sesuai kriteria find
