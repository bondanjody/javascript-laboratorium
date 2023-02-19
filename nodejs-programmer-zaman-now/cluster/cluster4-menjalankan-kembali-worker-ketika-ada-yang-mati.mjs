import cluster from 'cluster'
import http from 'http'
import os from 'os'
import process from 'process'

// mengecek apakah clusternya primary
if(cluster.isPrimary){
    // tanda isPrimary jalan
    console.log(`Primary : ${process.pid}`);
    // mengecek cpu dan menjalankan worker berdasarkan core
    for (let i = 0; i < os.cpus().length; i++){
        cluster.fork()
    }

    // mengetahui jika ada worker yang exit
    cluster.addListener("exit", (worker) => {
        console.log(`Worker ${worker.id} is exit`);

        // MENJALANKAN KEMBALI WORKER SETELAH WORKER ITU DIMATIKAN
        cluster.fork()
    })
}

if(cluster.isWorker){
    // melakukan process http di worker
    console.log(`worker : ${process.pid}`);
    const server = http.createServer((request, response) => {
        response.write(`Response from worker : ${process.pid}`)
        response.end()
        process.exit()  // worker exit
    })

    server.listen("3000")
}

/*
    Note :
    - pada cluster.addListener di atas kita tambahkan cluster.fork() supaya ketika worker dimatikan pada process http, maka ia akan dijalankan kembali worker baru

    - Pastikan gunakan fitur ini pada saat production
*/