import {threadId, Worker} from 'worker_threads'

const worker1 = new Worker('./worker.mjs')     // kita akan menjalankan file worker1.mjs
const worker2 = new Worker('./worker.mjs')

// ketika postMessage diterima
worker1.addListener("message", (message) => {
    console.log(`Thread ${threadId} receives data from worker 1 . Message : ${message}`);
})

worker2.addListener("message", (message) => {
    console.log(`Thread ${threadId} receives data from worker 2 . Message : ${message}`);
})

worker1.postMessage(10)
worker2.postMessage(10)

/*
    Setelah dijalankan mungkin akan bertanya mengapa muncul receive dulu baru send nya pada console log. Ini dikarenakan kode program dijalankan secara paralel.
*/

/*
    Alur program :
    1. bikin worker
    2. bikin listener , kalau si worker mengirim data sehingga pada listener tersebut kita tangkap datanya
    3. kirim data ke worker nya (dengan postMessage) bernilai 10

    pindah ke file worker.mjs
    4. data 10 tadi di terima oleh worker (di listener nya)
    5. di worker dilakukan perulangan. dan di tiap perulangannya si worker mengirim pesan (dengan postMessage) , setelah selesai langsung di close (artinya si worker langsung di close)


*/