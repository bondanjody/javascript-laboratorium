// DOM Selection

// getElementById()
// membuat variabel untuk menangkap elemen ber-ID judul
// Note : getElementById() hanya mengembalikan 1 elemen
const titel = document.getElementById('judul');
// menambahkan sytle ke elemen judul di atas
titel.style.color = 'tomato';
// Note : apabila kita menambahkan style elemen dengan menggunakan JavaScript, maka kita secara otomatis akan menambahkan inline CSS

// mengubah background elemen judul di atas
titel.style.backgroundColor = 'lightgrey';
// Note : property CSS seperty background-color pada Javascript tidak ditulis dengan tanda strip (-) karena akan dianggap sebagai operasi matematik. Melainkan ditulis dengan camelCase

// mengubah teks judul
titel.innerHTML = 'BondanJS';
// Teks akan berubah dari 'My Program' -> 'BondanJS'


// membuat variabel yang menampung method getElementsByTagName()
// Note : getElementsByTagName() mengembalikan elemen bertipe HTMLCollection
const parag = document.getElementsByTagName('p');

// untuk melakukan modifikasi pada elemen parag di atas harus ditulis index nya seperti mengakses array
// contoh program untuk mewarnai background parag 
// menggunakan for loop untuk mewarnai semua elemen
for (let i = 0; i < parag.length; i++){
    parag[i].style.backgroundColor = 'teal';
}
// atau bisa juga menggunakan for...of seperti berikut
// let i;
// for(i of parag){
//     i.style.backgroundColor = 'teal';
// }


// getElementsByTagName() digunakan pada elemen yang hanya terdapat 1 saja maka akan tetap dimasukkan ke dalam HTMLCollection, misalnya pada kode ini kita akan mengakses elemen h1
// script normalnya adalah : const header = document.getElementsByTagName('h1')
// apabila hanya terdapat satu elemen dan kita ingin membuat elemen tersebut langsung menjadi elemen yang dapat diakses maka bisa ditulis seperti berikut :
const header = document.getElementsByTagName('h1')[0];
// maksud dari kode di atas adalah kita langsung menangkap tag h1 elemen pertama dari HTMLCollectionnya, sehingga variabel header langsung merujuk pada elemen pertama HTMLCollection tersebut
// sehingga kita bisa langsung memodifikasinya
header.style.fontFamily = 'Arial, Sans-serif';

// untuk getElementsByClassName() sama seperti getElementsByTagName() yaitu mengembalikan data dalam bentuk HTMLCollection. Sehingga trik trik di atas dapat diimplementasikan

// querySelectorAll()
const p = document.querySelectorAll('p');
console.log(p[1].nodeName);
// output : P (yaitu nama node (nodeName) dari variabel 'p')

// NOTE : Perbedaan querySelector() dan querySelectorAll() adalah :
// 1. querySelector() menghasilkan elemen
// 2. querySelectorAll() menghasilkan NodeList