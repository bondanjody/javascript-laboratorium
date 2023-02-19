/*
    - Standard library HTTP tidak hanya bisa digunakan untuk membuat HTTP Client, tetapi juga bisa digunakan untuk membuat HTTP Server
    - Untuk kasus sederhana cocok sekali kita menggunakan standard library HTTP yang disediakan oleh NodeJS (koding manual), namun jika project kita sudah kompleks disarankan untuk menggunakan library atau framework yang lebih memudahkan, seperti : ExpressJS
    https://nodejs.org/api/http.html#class-httpserver

*/

import http from 'http'

const server = http.createServer((request, response) => {
    console.log(request.statusCode);
    console.log(request.httpVersion);
    console.log(request.method);
    console.log(request.url);

    if(request.url == "/bondan"){       // jika url : localhost:3000/bondan
        response.write("Hello Bondan")
    }else if(request.url == "/ajeng"){  // jika url : localhost:3000/ajeng
        response.write("Hello Ajeng")
    }else{
        response.write("This is HTTP Server")
    }
    

    
    response.end()
})

server.listen(3000)


// lakukan request dari browser dengan mengetikkan :

// localhost:3000/bondan
//  localhost:3000/ajeng
// localhost:3000