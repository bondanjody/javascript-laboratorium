class Players{
    constructor(playerName, playerNationality){
        this.name = playerName
        this.nationality = playerNationality
    }
    sayHi(){
        return `Hello I'm ${this.name}. I'm from ${this.nationality}`
    }
}

const eH = new Players("Erling Haaland", "Norway")
console.log(eH.sayHi());