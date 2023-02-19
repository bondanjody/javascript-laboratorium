const samplePromise = () => {
    return Promise.resolve('Promise berhasil dijalankan !')
}

const hasil = await samplePromise()
console.log(hasil);
// output : Promise berhasil dijalankan !

/*
    Kita tidak perlu membuat function dan membubuhkan 'async' di awalnya jika kita menggunakan JavaScript module. Ini dikarenakan secara default di function paling atas JavaScript modules, ia sudah merupakan Async
    Note : lihat perbedaanya dengan file async.js
*/