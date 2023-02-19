// querySelector()
// penggunaan querySelector sama seperti saat kita menentukan selector CSS dari elemen yang akan kita modifikasi
const parag2 = document.querySelector('section#bagian2 p');
console.log(parag2);
// Output pada console : <p>Welcome to section 2!</p>
// yaitu menunjuk pada paragrap pertama pada section ber-ID 'bagian2'
// mengubah parag2 menjadi berwarna teal
parag2.style.color = 'teal';
// dan pada console akan berubah menjadi : <p style="color:tea;l">Welcome to section 2!</p>

// memodifikasi elemen kedua dari list
const list2 = document.querySelector('section#bagian2 ul li:nth-child(2)');
// maksud dari kode di dalam querySelector di atas adalah mencari elemen kedua dari list (li:nth-child(2)) yang berada di dalam daftar (ul) section ber-ID 'bagian2'
// mengubah warna dan ukuran font elemen kedua dari list
list2.style.color = 'white';
list2.style.backgroundColor = 'orange';

// querySelector untuk menarget semua elemen
const allPar = document.querySelector('section#bagian1 p');
// NOTE : walaupun maksud dari kode di atas adalah kita menarget seluruh elemen p yang ada di section#bagian1, yang terjadi adalah kita hanya menarget elemen p PERTAMA dari section#bagian1. Hal ini terjadi karena querySelector hanya mengembalikan satu buah nilai.
// Lalu bagaimana jika kita ingin menarget semua elemen ? Disitulah kita menggunakan querySelectorAll()






// querySelectorAll()
const semuaP = document.querySelectorAll('p');
console.log(semuaP);
// outputnya adalah : NodeList(3)[p,p,p] -> yang artinya variabel semuaP berupa NodeList yang terdiri dari 3 elemen p
// memodifikasi querySelectorAll
semuaP[1].style.backgroundColor = 'yellow';
// kode di atas mengubah warna background dari elemen p kedua
// untuk memodifikasi semua elemen bisa menggunakan perulangan for seperti pada latihan1





// mengubah node root
// misalkan kita ingin mengakses section 2, maka kodenya adalah :
const sect2 = document.getElementById('bagian2');
// sekarang jika kita ingin mengakses elemen p pertama pada section 2 kita bisa menuliskan seperti ini :
const firstPar = sect2.querySelector('p');
// lalu tinggal kita bisa memodifikasi
firstPar.style.backgroundColor = '#000';
