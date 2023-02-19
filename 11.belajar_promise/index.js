/* Promise 
adalah objek yang merepresentasikan keberhasilan / kegagalan sebuah event asynchronous di masa yang akan datang
seperti namanya 'Promise' artinya janji . jadi keadaanya bisa terpenuhi atau ingkar
Pada Javascript keadaan ini disebut state yang terdiri dari 3 macam : fulfilled (terpenuhi), rejected (ingkar), pending (waktu tunggu sebelum janjinya terpenuhi)
untuk menjalankan ketiga states tersebut ada 3 callback yang harus dibuat , yaitu :
1. resolve : ketika janji terpenuhi
2. reject : ketika tidak terpenuhi
3. finally : ketika waktu tunggunya selesai
di dalam Promise ada aksi ketika janjinya terpenuhi (then) atau tidak terpenuhi (catch)
then : akan menjalankan resolve
catch : akan menjalankan reject
 Promise biasanya digunakan untuk request ke API */


/* contoh Promise sederhana tanpa request API */

// let ditepati = false;
// const janji = new Promise((resolve, reject) => {
//     if(ditepati){
//         resolve('janji ditepati !');
//     }else{
//         reject('ingkar janji ...');
//     }
// }) 

// penjelasan kode :
// jika 'ditepati' bernilai true. maka akan menjalankan fungsi resolve yang mereturn string ('janji ditepati !') (dalam kasus real, ini bisa berupa request ke API , dll)
// jika 'ditepati' bernilai false. maka akan menjalankan fungsi reject yang mereturn string 'ingkar janji ...'


// jika kita ingin menangkap resolve dan reject nya, kita bisa menggunakan then dan catch. then untuk resolve, catch untuk reject.
// lanjutan kode di atas : 

// janji
//     .then(respon => console.log('OK :' + respon))  // output : OK :janji ditepati!
//     .catch(respon => console.log('Not OK :' + respon)); // output : Not OK :ingkar janji ...

// Note : nama rgumen 'respon' bisa apa saja. Disini 'respon' berarti apaun yang dihasilkan (return) baik dari function resolve() maupun function reject()





// contoh kode program 2 yang harus menunggu dulu (misal saat prosesnya kompleks)
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//     if(ditepati){
//         setTimeout(() => {
//             resolve('Janji ditepati !');
//         }, 2000);
//     }else{
//         setTimeout(() => {
//             reject('Janji TIDAK ditepati !');
//         }, 2000);
//     }
// })

// mencoba asynchronous

// console.log("mulai");

// jika menggunakan kode di bawah akan ada penjelasan pending nya di console :
// console.log(janji2.then(() => console.log(janji2)));

// tetapi jika menggunakan kode yang ini tidak akan ada penjelasan pending :
// janji2
//     .finally(() => console.log('Selesai menunggu ...')) // method finally dijalankan ketika Promise tidak pending. Apapun isi dari variabel 'ditepati' , method finally akan dijalankan terlebih dahulu 
//     .then(respon => console.log('OK :' + respon))  // output : OK :janji ditepati!
//     .catch(respon => console.log('Not OK :' + respon)); // output : Not OK :ingkar janji ...

// console.log("selesai");
// awalnya pending tapi setelah menunggu 2 detik langsung muncul output Promise nya









/* method Promise.all()
Promise.all digunakan untuk mengakses beberapa Promise secara sekaligus

 misal kita punya kode program untuk mengakses 2 buah API */

const film = new Promise(resolve => {
    setTimeout(() => {
        // functioin resolve mengreturn array of object
        resolve([{
            judul : 'Avengers',
            tahun : '2016'
        }])
    },1000)
});

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota : 'Wonogiri',
            temperatur : 25
        }])
    },500)
});

// jika kita ingin menjalankan 1 per 1 maka kodenya akan seperti ini : 
// film
    // .then(respons => console.log(respons)); /* perlu diingat bahwa pada kode di dalam then kita bisa melakukan banyak hal (seperti pada latihan callback 10.2) seperti menyimpan data request API ke dalam HTML, dll */
// cuaca
//     .then(respons => console.log(respons))

/* jika kita ingin menjalankannya sekaligus maka kita bisa menggunakan method Promise.all() dan kodenya akan menjadi seperti ini : */
// Promise.all([film, cuaca])  /* ingat bahwa kita menyimpan nama Promise nya di dalam array [] */
//     .then(respons => console.log(respons));


/* kode di atas akan mengembalikan dalam bentuk array. untuk memecahnya kita bisa menggunakan spread operator */
Promise.all([film, cuaca])  /* ingat bahwa kita menyimpan nama Promise nya di dalam array [] */
    .then(respons => {
        const [film, cuaca] = respons;
        console.log(film);
        console.log(cuaca);
    });