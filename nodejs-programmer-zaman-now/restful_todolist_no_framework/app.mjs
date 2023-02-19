import http from 'http'
import { ToDoListService } from './2todolist-service.mjs'

// membuat objek TodoListService
const todo = new ToDoListService()

// membuat server
const server = http.createServer((request,response) => {
    // membuat supaya mengembalikan berupa JSON 
    response.setHeader("Content-Type", "application/json")
    // jika request nya GET maka akan memanggil method getTodoList()
    if(request.method == "GET"){
        todo.getTodoList(request,response)
    }else if(request.method == "POST"){
        todo.createJSONTodoList(request,response)
    }else if(request.method == "PUT"){
        todo.updateTodoList(request,response)
    }else if(request.method == "DELETE"){
        todo.deleteTodoList(request,response)
    }
})

server.listen('3000')

/*
    untuk melakukan request disarankan untuk menggunakan POSTMAN
*/

/*  UPDATE
    Untuk melakukan update (mengubah data) gunakan postman , lalu pada bagian Body ketikkan :

    {
    "id" : 0,
    "todo":"Berjalan-jalan"
    }   

    maka akan mengubah data pada id=0 dengan dengan nilai todo menjadi = "Berjalan-jalan"
*/
/*DELETE
    Untuk melakukan DELETE (menghapus data) gunakan postman , lalu pada bagian Body ketikkan :

    {
    "id" : 1
    } 

    maka id:1 akan terhapus dan akan ditempati oleh id 3 tadinya
    Note : jika id yang diminta (atau dikirimkan ke server) tidak ada , maka tidak akan terjadi apa-apa. Sehingga bisa kamu tambahkan sendiri logic untuk menangani apabila id tidak ada
*/