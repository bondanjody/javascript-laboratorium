import {threadId, parentPort} from 'worker_threads'

// ketika menerima nilai (message) pada parentPort
parentPort.addListener("message", (message) => {
    for(let i = 0; i <= message; i++){
        console.log(`Thread ${threadId} send message : ${i}`);
        parentPort.postMessage(i)
    }
    parentPort.close()  // close parentPort jika tidak di gunakan 
})