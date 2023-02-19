// TITLE = slice() method pada javascript

// Note : pada penggunaan slice() penghitungan karakter dimulai dari 0 (nol)

const nama = 'Aleksandar Grevosky';
console.log(nama.slice(5));
// Output = andar Grevosky karena menampilkan nama dimulai setelah karakter ke 5

console.log(nama.slice(7,16));
// Output = dar Grevo karena hanya menampilkan nilai antara karakter ke 5 dan 16 (Note : karakter ke 7 dimasukkan tetapi karakter ke 16 tidak dimasukkan)

const band = "Hoobastank";
console.log(band.slice(3,7));
// Output = bast karena hanya menampilkan nilai antara karakter ke 3 dan ke 7 (Note : karakter ke 3 dimasukkan tetapi karakter ke 7 tidak dimasukkan)

// Note = apabila kita menggunakan slice() dengan nilai argumen negatif , maka akan dihitung dari belakang
const song = "You are the reason.";
console.log(song.slice(-10, -4));
// Output = karakter ke-10 dari belakang tidak dimasukkan tetapi karakter 4 dari belakang dimasukkan 