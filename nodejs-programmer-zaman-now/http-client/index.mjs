/*
    - salah satu fitur dalam modul http adalah http-client, dimana kita bisa melakukan simulasi http request menggunakan nodejs. 
    - terdapat 2 jenis modul http yaitu : http dan https
    https://nodejs.org/api/http.html
    https://nodejs.org/api/https.html
*/
import https from 'https'

// NOTE : menggunakan hookbin.com / webhook.site untuk membuat endpoint
const endpoint = "https://webhook.site/02d55bff-a0ce-4fc4-91c5-4360256fb51a"

// membuat https request
const request = https.request(endpoint, {
    method : 'POST',
    headers : {
        "Content-Type":"application/json",
        "Accept":"application/json"
    }
}, (response) => {      // callback untuk menangani apabila dari webhook mengirimkan response, yaitu kita menampilkan data yang dikirimkannya (oleh webhook)
    response.addListener("data", (data) => {
        console.log(`Receive : ${data.toString()}`);
    })
})

// membuat body
const body = JSON.stringify({
    firstName : "Bondan",
    lastName : "Jody"
})

// menggunakan stream
request.write(body)
request.end()
