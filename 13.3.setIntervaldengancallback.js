// TITLE : menggunakan callback pada setInterval

// membuat function yang selanjutnya digunakan sebagai argumen
let hello = () => document.write('Hello World <br/>');

setInterval(hello, 2000);
// 'hello' pada statement di atas disebut 'callback' karena merupakan function yang digunakan sebagai argumen
// sedangkan setInterval dinamakan 'Higher Order Function' karena merupakan function yang menggunakan argumen berupa function(callback) 
// output : akan mencetak 'Hello World' setiap 2 detik



