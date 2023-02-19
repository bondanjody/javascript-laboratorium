// title : membuat function yang dapat menangani parameter fleksibel (berubah-ubah)

function kali(){
    // setiap nilai yang dimasukkan ke dalam parameter selalu disimpan didalam array bernama 'arguments'
    var res = 1;
    // melakukan looping untuk mengambil nilai array dan mengalikannya
    for(x in arguments){
        res *= arguments[x];
    }
    // mengembalikan nilai res yang terbaru (setelah kalkulasi)
    return res;
}

// walaupun kita menambahkan jumlah argumennya , maka function akan terus berjalan
console.log(kali(3,5,7,8));