import cluster from 'cluster'
import http from 'http'
import os from 'os'
import process from 'process'

// mengecek apakah clusternya primary
if(cluster.isPrimary){
    // tanda isPrimary jalan
    console.log(`Primary : ${process.pid}`);
    // jalankan workernya
    cluster.fork()  // ketika kita melakukan fork, cluster akan menjalankan file yang sama, tetapi bukan sebagai primary melainkan sebagai worker
    cluster.fork()
}

if(cluster.isWorker){
    // tanda process berganti ke worker
    console.log(`Worker : ${process.pid}`);
}

/*
    Penjelasan kode :
    - setelah masuk ke percabangan isPrimary maka akan mencetak console.log lalu menjalankan worker dengan menggunakan 'cluster.fork()'
    - file cluster.mjs dijalankan kembali tetapi dengan isPrimary bernilai 'false' dan isWorker bernilai true
    - process berganti dari Primary ke Worker (bisa dilihat di process.pid yang berbeda)

    Note :
    - kita bisa memiliki 2 atau lebih cluster.fork()
*/