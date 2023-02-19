// LATIHAN ESKPORT DAN IMPORT

// menggunakan named default export
export default class Tiger{
    constructor(){
        this.strength = Math.floor(Math.random() * 100)
    }
    ngaum(){
        return "Harimau mengaum !"
    }
}
// const macan = new Tiger()
// console.log(macan.strength)
// console.log(macan.ngaum())

// module.exports = "Tiger"