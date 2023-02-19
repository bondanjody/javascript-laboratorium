// TITLE : Destructuring assignment dengan penambahan rest parameter

// membuat array dan memasukkannya ke dalam variabel x,y, rest
let [x, y, ...rest] = ['Halo', 'Hello', 'Hi', 'Hey'];
// maksud dari kode di atas adalah memasukkan elemen pertama dan kedua masing-masing ke dalam variabel x dan y. Lalu setelah elemen kedua akan dimasukkan ke dalam rest parameter

console.log(x);
console.log(y);
console.log(rest);