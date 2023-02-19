/*
    Salah satu konsep besar dari paradigma Functional Programming (FP) adalah Pure Function. Apa artinya? Pure Function merupakan konsep dari pembuatan fungsi yang mengharuskan fungsi untuk tidak bergantung terhadap nilai yang berada di luar fungsi atau parameternya. Sehingga mau seperti apa keadaanya, fungsi yang dibuat selalu menghasilkan sesuatu yang sama, terkecuali bila fungsi tersebut diberikan nilai parameter yang berbeda.

    Selain dilarang untuk bergantung terhadap nilai luar, pure function juga dilarang keras untuk mengubah nilai yang berada di luar baik secara sengaja atau tidak sengaja. Pure function tidak boleh menimbulkan efek samping (no side effect) ketika digunakan.
*/

// Contoh pure function
function luasLingkaran(jari_jari){
    return 3.14*jari_jari*jari_jari
}
console.log(luasLingkaran(10))
/*
    Kode program di atas merupakan contoh pure function. Namun berbeda halnya jika nilai PI (3.14) berada di luar dari blok kode function. 
*/

// Agar lebih mudah dalam mengetahui apakah fungsi yang Anda buat sudah pure atau belum, pastikan 3 konsep ini ada pada fungsi yang Anda buat.

// - Mengembalikan nilai yang sama bila inputannya (nilai parameter) sama.
// - Hanya bergantung pada argumen yang diberikan.
// - Tidak menimbulkan efek samping.

// COntoh 2
const createPersonWithAge = (age, person) => {
    return { ...person, age };  // melakukan destructuring sekaligus menambahkan properti age
  };
  
  const person = {
    name: 'Bobo'
  };
  
  const newPerson = createPersonWithAge(18, person);
  
  console.log({
    person,
    newPerson
  });