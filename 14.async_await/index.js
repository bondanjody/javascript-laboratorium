/*
Asynchronous Function : sebuah function yang bekerja secara asynchronous (melalui event loop), yang menghasilkan (implisit) promise sebagai return valuenya. Tapi cara penulisan code nya menggunakan penulisan yang synchronous (standard).

Poin penting Asynchronous Function :
1. Fungsi yang berjalan secara Asynchronous
2. Menghasilkan promise
3. Cara penulisannya sama seperti synchronous function (function biasa)

Sebuah async function dapat memiliki keyword await di dalamnya untuk memberhentikan sementara eksekusi fungsinya sambil menunggu promise nya selesai (resolve)

Membuat kode program async await dengan menggunakan Promise yang kita buat sendiri
*/

/* Kode Program di bawah mendemonstrasikan bagaimana cara menangkap reject dari Promise pada async await (karena seperti kita tau dari kode program sebelumnya bahwa async await hanya menerima resolve) */
function cobaPromise(){
    /* dikarenakan kita juga akan menggunakan callback reject maka jangan lupa menuliskannya  */
    return new Promise((resolve, reject) => {
        const waktu = 7000;
        /* apabila waktu < 5000 maka akan menjalankan setTimeout jika tidak maka akan melakukan reject  */
        if(waktu < 5000){
            setTimeout(() => {
                resolve('Ter-resolve');
            }, waktu);
        }else{
            reject('Kelamaan !!!');
        }
})
}

// Ingat cara penulisan keyword async dan await seperti pada folder 13.
async function cobaASync(){
    /* solusi untuk menangkap reject pada async await adalah dengan menggunakan blok try catch */
    try{
        const coba = await cobaPromise();
        console.log(coba);
    }
    catch(err){
        /* mencetak pesan error */
        console.error(err);
    }
}

cobaASync();


