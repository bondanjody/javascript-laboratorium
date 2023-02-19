// TITLE : menghapus elemen terakhir array dengan method pop()

// deklarasi array
const presidents = [];

// mengisi array dengan menggunakan method push()
presidents.push('Obama', 'Trump', 'Reagan', 'Bush');

// menghapus elemen terakhir array dengan menggunakan method pop()
presidents.pop();
console.log(presidents.join(', '));
// Output : Obama, Trump, Reagan

presidents.pop();
console.log(presidents.join(', '));
// Output : Obama, Trump