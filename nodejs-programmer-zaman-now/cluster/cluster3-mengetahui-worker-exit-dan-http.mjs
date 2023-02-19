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
    Petunjuk :
    - jalankan file ini
    - buka browser (localhost:3000)
    - dan lihat tampilannya
    - lakukan refersh (maka response nya akan berbeda tiap worker)

    Note :
    - setiap kita melakukan request, kita balas / response dengan console.log lalu kita matikan workernya.
    - setelah semua workernya mati, maka aplikasinya pun ikut mati (tidak bisa diakses)
*/

