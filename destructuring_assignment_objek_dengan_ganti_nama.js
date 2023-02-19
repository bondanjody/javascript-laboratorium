// TITLE : Destructuring Assignment pada objek tetapi dengan menggunakan nama yang berbeda

// jika sebelumnya pembuatan destructuring assignment pada objek harus menggunakan nama yang sama dengan nama propertinya. Maka ada cara supaya kita dapat menentukan kata apa yang digunakan (dengan kata lain tidak harus sama dengan properti objeknya)
// membuat objek 
const personData = {
    nama : 'Bondan',
    usia : 21
}

// membuat destructuring assignment
// dan mengatur supaya 'n' mewakili properti nama, dan 'u' mewakili properti usia
const {nama : n, usia : u} = personData;

console.log(n);
console.log(u);