// membuat file client

import net from 'net'

// melakukan koneksi (pastikan port dan host ditulis di dalam object dan sesuai dengan net-server)
const client = net.createConnection({port : 5000, host: "localhost"})


// ketika client menerima data
client.addListener("data", (data) => {
    console.log(`Receive data from server : ${data.toString()}`);
})

// tiap detik kita kirimkan client.write (artinya dikirimkan ke servernya "ingat kita perlu menambahkan enter (\n) pada stringnya")
setInterval(() => {
    client.write("Bondan\r\n")
}, 1000)

