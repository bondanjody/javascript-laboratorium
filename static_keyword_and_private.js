// Static Property dan Function pada JavaScript

// Static property / function adalah property / function dari suatu class yang bisa diakses tanpa kita membuat instansiasi objek class tersebut

class footballPlayer{
    static isYoung(age){
        return (age <= 18) ? "Young" : "Mature"
    }
}

// untuk menggunakan functino / method isYoung kita tidak perlu membuat objek dari footballPlayer class
console.log(footballPlayer.isYoung(19))

// Private property / method
// private berarti hanya bisa diakses dari dalam class tersebut
class Mail{
    constructor(){
        this._sender = "bondanjodys@gmail.com"
    }
    
}

const mail1 = new Mail()
console.log(mail1.sender)