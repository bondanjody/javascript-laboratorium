// mengoverride constructor dan override method class pada JavaScript

class Mail{
    constructor(nama){
        this.from = nama
    }

    intro(){
        console.log(`Hello, I'm ${this.from}`)
    }

    sendMessage(msg, to){
        console.log(`To : ${to}. Message : ${msg}`)
    }
}

class WhatsApp extends Mail{
    constructor(pengguna, isBusiness){
        // mengoverride constructor
        super(pengguna)     // jika kita tidak menambahkan ini maka akan tampil "undefined" dikarenakan kita mencoba mengakses property "from" (dari method intro()) yang tidak memiliki nilai
        // oleh karena itu kita memanggil class parent (Mail) dengan method "super" dan memberinya nilai dari argumen pengguna
        this.pengguna = pengguna
        this.isBusiness = isBusiness
    }

    // override method intro()
    sendMessage(pesan, tujuan){
        // untuk tetap dapat menggunakan parent method kita bisa menambahkannya dengan keyword super 
        super.sendMessage(pesan, tujuan)
        console.log("Message sent.")

        // NOTE :
        /*
            - super()  -> digunakan untuk memanggil constructor parent dan hanya dapat digunakan di constructor
            - super.namaMethod()    -> digunakan untuk mengakses nama method dalam class parent
        */
    }

}

const wa1 = new WhatsApp("James",true)
wa1.intro()
wa1.sendMessage("Hello","jennys@gmail.com")