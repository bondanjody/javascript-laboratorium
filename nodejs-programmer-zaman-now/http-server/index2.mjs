import http from 'http'

const server = http.createServer((request, response) => {
    if(request.method == "POST"){       // jika methodnya POST dan mengandung data
        request.addListener("data", (data) => {
            response.setHeader("Content-Type","application/json")
            response.write(data)
            response.end()
        })
    }
})

server.listen(3000)