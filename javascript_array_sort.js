/*
array.sort() merupakan fungsi bawaan dari array yang berguna untuk melakukan pengurutan nilai dari sebuah deretan nilai. Secara default, fungsi sort akan mengubah semua nilai dalam deretan menjadi bentuk string dan mengurutkannya secara ascending.

*/

// Contoh kode program sort tanpa higher order function
const angka = [1,190, 1000, 28, 40, 39]
const urutAngka = angka.sort()
console.log(urutAngka)

console.log("------------------------------------------------------")

const hari = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"]
const urutHariAbjad = hari.sort()
console.log(urutHariAbjad)

/*
Contoh pengurutan di atas didasarkan pada pengurutan bentuk tipe data string. Oleh karena itu, ketika kita ingin mengurutkan sesuai dengan kriteria yang kita inginkan (berdasarkan tanggal ataupun berdasarkan nilai siswa) maka kita perlu membuat compare function tersendiri.
*/


// Contoh kode program sort dengan higher order function
const array1 = [1, 30, 4, 1000];

const compareNumber = (a, b) => {
  return a - b;
};
const sorting = array1.sort(compareNumber);
console.log(sorting);
/*
    Penjelasan kode :
    Pada compare function, fungsi akan membandingkan 2 nilai yang akan menghasilkan 3 result yaitu negatif (-), 0, dan positif (+).

    Jika, negative maka `a` akan diletakkan sebelum `b`
    Jika, positive maka `b` akan diletakkan sebelum `a`
    Jika, 0 maka tidak ada perubahan posisi.
*/