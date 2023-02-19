const http = require('http')

/*
Di latihan sebelumnya, web server yang kita buat sudah berhasil merespons sesuai request method yang dilakukan client. That’s nice! 

Nah, di latihan kali ini kita akan coba mendapatkan data pada body request ketika client mengirimkan request menggunakan method POST. 

Buatlah web server merespons permintaan method POST dengan menampilkan sapaan dan nama berdasarkan data body yang dikirim oleh client. Bila client mengirimkan nama “Dicoding”, maka respons akan menampilkan “Hai, Dicoding!”.  

Client akan mengirimkan data nama tersebut menggunakan format JSON seperti ini:
*/
const requestListener = (request, response) => {
    response.setHeader('Content-Type','type/html')
    response.statusCode = 200

    const {method} = request

    if(method === 'POST'){
        let body = []
        request.on('data', (chunk) => {
            body.push(chunk)
        })
        request.on('end', () => {
            body = Buffer.concat(body).toString()
            // melakukan parse JSON
            const {name} = JSON.parse(body)
            response.end(`Hai, ${name}`)
            /*
                Perhatikan kode di atas! Kita memindahkan proses respons di dalam callback event end. Hal ini diperlukan karena data body siap dikonsumsi hanya ketika event end telah dibangkitkan. Dalam arti lain, server tidak akan mengirimkan respons bila proses stream belum selesai.
            */
        })
    }
}

const server = http.createServer(requestListener)

const host = "localhost"
const port = 5000

server.listen(port, host, () => {
    console.log(`Server berjalan di http://${host}:${port}`);
})