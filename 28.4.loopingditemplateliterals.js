// TITLE : looping HTML Fragments pada template literals

// membuat konstanta berisi array of objects
const coffeList = [
    {
        coffeName : 'Arabica',
        price : 20000
    },
    {
        coffeName : 'Robusta',
        price : 22000
    },
    {
        coffeName : 'Javanica',
        price : 18000
    }
];

// membuat konstanta template literals HTML fragments
// Penjelasan mengenai kode di bawah :
// di dalam div data-kopi terdapat list seluruh elemen yang ada di array coffeList
// untuk menampilkan elemen dari array coffeList kita melakukan looping menggunakan method array map()
// lalu untuk menghilangkan tanda koma yang memisahkan elemen-elemen array, kita tambahkan method join() setelah method map() selesai
const output = `<div class='data-kopi'>
    ${coffeList.map(c => `<ul>
        <li>${c.coffeName}</li>
        <li>${c.price}</li>
    </ul>`).join('')}
</div>`;

// menampilkan konstanta output di atas ke dalam DOM
document.body.innerHTML = output;