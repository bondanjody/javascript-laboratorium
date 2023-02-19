// Title : contoh callback dengan built-in function setTimeout()

// argumen pertama merujuk pada fungsi yang dibuat sendiri
// argumen kedua adalah nilai (dalam milisecond) untuk menjalankan argumen pertama
setTimeout(fungsiKu, 5000);

function fungsiKu(){
    console.log('I love you.');
}

// Output : I love you. 
// setelah menunggu 5 detik (5000 milisecond)