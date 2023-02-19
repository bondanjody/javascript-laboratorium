// menggunakan modul events
import { EventEmitter } from "events";

// membuat instance dari EventEmitter
const jalan = new EventEmitter()

// menambahkan event listener
// parameter pertama merupakan nama event
// parameter kedua merupakan callback jika event tersebut dijalankan
jalan.addListener("+", (x,y) => console.log(x+y))
jalan.addListener("-", (x,y) => console.log(x-y))
jalan.addListener("x", (x,y) => console.log(x*y))
jalan.addListener("/", (x,y) => console.log(x/y))

// menjalankan event dengan method emmit
jalan.emit("+", 3,4)
jalan.emit("/", 40,6)
jalan.emit("x", 28,49)

// contoh event listener dengan nama event yang sama
jalan.addListener("hello", (nama) => console.log(`Hello, ${nama} !`))
jalan.addListener("hello", (nama) => console.log(`How are you today, ${nama} ?`))
// mentrigger event "hello"
jalan.emit("hello", "Bondan")


// EventEmitter sangat sering digunakan di NodeJS
// link documentation : https://nodejs.org/api/events.html
