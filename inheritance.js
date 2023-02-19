// Latihan Inheritance di JavaScript

class Mail{
    constructor(pengirim){
        this.pengirim = pengirim
        this._contactList = []
    }

    sendMessage(to, msg){
        console.log(`To : ${to}. ${this.pengirim} says : ${msg}`) 
        this._contactList.push(to)      // setelah mengirim , kita akan menambahkan email tujuan ke dalam daftar contactList 
    }
}

class WhatsApp extends Mail{
    constructor(){
        super()
        this.username = "Bondan"
        this._isBusinessAccount = false
    }

    myProfile(){
        return `Nama : ${this.username}. Businesss Account : ${(this._isBusinessAccount) ? "Benar" : "Salah"}`
    }
}

const wa1 = new WhatsApp("Bondan")
// console.log(wa1.myProfile())
console.log(wa1.myProfile())

const mail1 = new Mail("Jessi")
mail1.sendMessage("bondanjodys@gmail.com","Hi, Mr. Bondan !")