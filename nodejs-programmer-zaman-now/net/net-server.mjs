// https://nodejs.org/api/net.html   -> link documentation

// mengimpor net
import net from 'net'

// callback di bawah digunakan untuk menghandle setiap user terhubung ke server
const server = net.createServer((client) => {
    console.log("Client Connected");

    // data di bawah berupa buffer
    client.addListener("data", (data) => {
        console.log(`Data from : ${data.toString()}`);
        client.write(`Hello ${data.toString()}\r\n`)    // janganlupa tambahkan \n supaya melakukan enter (lanjut ke perintah selanjutnya)
    })
})

server.listen(5000, "localhost")

// Ketika program di atas dijalankan maka ia tidak akan menunjukkan apa". dikarenakan ia menunggu request dari client. Sehingga jalankan net-server.mjs beriringan dengan net-client.mjs
