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

}

if(cluster.isWorker){
    // tanda process berganti ke worker
    console.log(`Worker : ${process.pid}`);
}

