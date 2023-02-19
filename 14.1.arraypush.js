// TITLE : menggunakan method array push()

// method push() digunakan untuk menambahkan isi array dengan catatan elemen yang ditambahkan akan berada pada posisi indeks terakhir dari array tersebut

// deklarasi array
const countries = [];

// menambahkan elemen ke dalam array
countries.push('United States');
countries.push('United Kingdom');
countries.push('Russia');
countries.push('France');
countries.push('Netherlands', 'Germany', 'Belgium');

// menampilkan jumlah isi array (length()) dan elemen-elemennya (join())
console.log('Jumlah negara ada : ' + countries.length);
console.log('Nama-nama negara : ' + countries.join(' - '));