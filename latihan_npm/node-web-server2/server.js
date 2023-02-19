// mengimpor modul http
const http = require('http')


const requestListener = (request, response) => {
    // NOTE PENTING : kode berikut harus diletakkan sebelum percabangan penentuan method 
    response.setHeader('Content-Type', 'text/html')
    response.statusCode = 200

    const {method} = request
    if(method === 'DELETE'){
        response.end("<h1>Method yang digunakan adalah DELETE ...!!!</h1>")
    }
    if(method === 'GET'){
        // console.log('Method yang digunakan adalah GET');
        response.end("<h2>Menggunakan method GET...</h2>")
    }
    if(method === 'POST'){
        response.end('Method yang digunakan adalah POST');
    }
    if(method === 'PUT'){
        response.end('<h2>Method yang digunakan adalah PUT ...</h2>')
    }
    

    /*
        Coba ketikkan request, misal : curl -X POST http://localhost:5000
        dan lihat di command line tempat kode dijalankan. maka akan tampil 'Method yang digunakan adalah POST'
        Note : kita bisa melakukan apasaja di dalam if(method) diatas
    */

    
    // response.end("<h1>Server is running ...</h1>")
}

const server = http.createServer(requestListener)

const port = 5000
const host = "localhost"


server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port} .....`)
})