// LATIHAN ESKPORT DAN IMPORT

// menggunakan named export 
export class Wolf{
    constructor(){
        this.strength = Math.floor(Math.random() * 10)
    }
    ngaum(){
        return "Serigala mengaum !"
    }
}
// const macan = new Tiger()
// console.log(macan.strength)
// console.log(macan.ngaum())

// module.exports = "Wolf"