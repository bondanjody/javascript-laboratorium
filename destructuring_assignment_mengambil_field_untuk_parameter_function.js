// TITLE : mengambil salah satu property objek untuk digunakan pada function dengan menggunakan destructuring

// membuat objek
const book1Data = {
    id : 534978,
    bookName : 'Harry Potter and The Deathly Hollows',
    author : 'J.K. Rowling'
}

// membuat function
// pada parameter function langsung dilakukan destructuring {id}  , yaitu untuk mengambil nilai property id
// function berikut mengembalikan nilai dari id
function getBookId({id}){
    return id;
}

// saat kita memanggil functionnya pada parameter function kita perlu mengarahkan pada objek yang dituju
console.log(getBookId(book1Data));
// output :
// 534978