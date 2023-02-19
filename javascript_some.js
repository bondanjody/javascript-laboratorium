// Some adalah salah satu contoh reusable function . Some sama seperti map, filter, reduce yang juga merupakan higher order function

// array.some() merupakan fungsi bawaan dari array yang cukup sering digunakan. Fungsi ini akan menghasilkan nilai boolean.


// Nilai yang dihasilkan didasarkan pada pernyataan apakah ada setidaknya satu dari deretan nilai dalam array tersebut lolos berdasarkan kriteria yang kita tuliskan dalam callback function.

// contoh kode program 1 (mengecek apakah di dalam array ada bilangan genap)
const bilangan = [9,0,2,45,24,20,80,89]
console.log(bilangan.some(elemen => elemen%2 == 0))