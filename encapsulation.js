// Encapsulation in JavaScript

class footballPlayer{
    constructor(nama, usia){
        this.nama = nama
        this.usia = usia
        this._ability = "Football"      // private property
    }

    profile(kebangsaan){
        return `${this.nama} is ${this._ability} player from ${kebangsaan}`     // penggunaan private property hanya ada di dalam class tersebut
    }
}

const messi = new footballPlayer("Messi",34)
console.log(messi.profile("Argentina"))