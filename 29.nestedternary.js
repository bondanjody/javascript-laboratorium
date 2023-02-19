// membuat variabel yang akan dites
let bil = 32;

// membuat variabel hasil yang akan menyeleksi 'bil'
// jika bil bukan angka maka akan menampilkan 'BUKAN ANGKA !'
// jika bil bertipe angka akan mengecek apakah habis dibagi 2 atau tidak . jika habis dibagi 2 maka merupakan bilangan genap, selain itu ganjil
const res = isNaN(bil) ? 'BUKAN ANGKA !' : (bil % 2 == 0 ? 'Bilangan Genap' : 'Bilangan Ganjil.') ;

console.log(res); 