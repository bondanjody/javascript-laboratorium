// mengimpor modul http
const http = require('http')

/**
 * Logika untuk menangani dan menanggapi request dituliskan pada fungsi ini
 * 
 * @param request: objek yang berisikan informasi terkait permintaan
 * @param response: objek yang digunakan untuk menanggapi permintaan
 */

/*
Request listener memiliki 2 parameter, yakni request dan response. Seperti yang tertulis pada contoh kode di atas, request merupakan objek yang menyimpan informasi terkait permintaan yang dikirimkan oleh client. Di dalam objek ini kita bisa melihat alamat yang diminta, data yang dikirim, ataupun HTTP metode yang digunakan oleh client.

Sementara itu, response merupakan objek yang digunakan untuk menanggapi permintaan. Melalui objek ini kita bisa menentukan data yang diberikan, format dokumen yang digunakan, kode status, atau informasi response lainnya.
*/
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html')
    response.statusCode = 200
    response.end("<h1>Server is running ...</h1>")
}

/*
Kode di atas merupakan contoh logika yang bisa dituliskan di dalam request listener. Request listener akan menanggapi setiap permintaan dengan dokumen HTML, kode status 200, dan menampilkan konten “Halo HTTP Server!”.

Lalu, bagaimana caranya agar server selalu sedia menangani permintaan yang masuk? Setiap instance dari http.server juga memiliki method listen(). Method inilah yang membuat http.server selalu standby untuk menangani permintaan yang masuk dari client. Setiap kali ada permintaan yang masuk, request listener akan tereksekusi.
*/

const server = http.createServer(requestListener)

const port = 5000
const host = "localhost"

/*
Method listen() dapat menerima 4 parameter, berikut detailnya:

1. port (number) : jalur yang digunakan untuk mengakses HTTP server.
2. hostname (string) : nama domain yang digunakan oleh HTTP server.
3. backlog (number) : maksimal koneksi yang dapat ditunda (pending) pada HTTP server.
4. listeningListener (function) : callback yang akan terpanggil ketika HTTP server sedang bekerja (listening).

Namun, keempat parameter di atas bersifat opsional. Kita bisa memberikan nilai port saja, atau kombinasi apa pun dari keempatnya. Hal itu tergantung terhadap kebutuhan Anda. Namun lazimnya, ketika memanggil method listen() kita memberikan nilai port, hostname, dan listeningListener.
*/

server.listen(port, host, () => {
    console.log(`Server berjalan di port : ${port} .....`)
})