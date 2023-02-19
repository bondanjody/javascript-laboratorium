

export class ToDoListService{

    todolist = ["Mancing","Jalan","Lari"]

    // menangani method GET (menampilkan data)
    getJSONTodoList(){
        return JSON.stringify({
            code:200,
            status:"OK",
            data:this.todolist.map((value,index) => {
                return {
                    id:index,
                    todo:value
                }
            })
        })
    }


    getTodoList(request,response){
        response.write(this.getJSONTodoList())
        response.end()
    }

    // menangani method POST (menambah data)
    createJSONTodoList(request, response){
        request.addListener("data", (data) => {
            const body = JSON.parse(data.toString())    // karena data masih berupa buffer, maka perlu di parsing 
            this.todolist.push(body.todo)   // di dalam body request post kita ada todo , kita ambil nilainya dan tambahkan ke todolist

            response.write(this.getJSONTodoList())  // setelah selesai kita panggil getJSONTodoList
            response.end()
        })
    }

    // menangani method PUT (update data)
    updateTodoList(request, response){
        request.addListener("data", (data) => {
            const body = JSON.parse(data.toString())    // karena data masih berupa buffer, maka perlu di parsing 

            if(this.todolist[body.id]){     // mengecek apakah data yang ingin diubah (diupdate) ada. Jika tidak ada maka tidak akan diubah
                this.todolist[body.id] = body.todo      // menggunakan method splice supaya elemennya bergeser jika suatu elemen dihapus
            }

            response.write(this.getJSONTodoList())  // setelah selesai kita panggil getJSONTodoList
            response.end()
        })
    }

    // menangani method DELETE (menghapus data)
    deleteTodoList(request, response){
        request.addListener("data", data => {
            const body = JSON.parse(data.toString())    // karena data masih berupa buffer, maka perlu di parsing 

            if(this.todolist[body.id]){     // mengecek apakah data yang ingin diubah (dihapus) ada. Jika tidak ada maka tidak akan dihapus
                this.todolist.splice(body.id, 1)
            }

            response.write(this.getJSONTodoList())  // setelah selesai kita panggil getJSONTodoList
            response.end()
        })
    }
}