// untuk menggunakan module dalam contoh ini adalah modul os, kita bisa menggunakan perintah import
// namun karena file 'file-mjs.mjs' bukan suatu module, maka kita perlu menyimpannya dalam format .mjs
import os from 'os'

info(os.platform())     // output : linux
table(os.cpus())        // output : (cpu yang digunakan)