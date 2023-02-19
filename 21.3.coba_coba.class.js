// coba-coba membuat program game dengan menggunakan style OOP

class Hero{
    constructor(nama, health, attackPower){
        this.nama = nama;
        this.health = health;
        this.attackPower = attackPower;
    };

    info(){
        return `${this.nama} memiliki health: ${this.health} dan attack power: ${this.attackPower}.`;
    }

    // membuat method menyerang Hero lain
    menyerang(lawan){
        console.log(`${this.nama} menyerang ${lawan.nama}.`);
        // memanggil method diserang milik lawan
        lawan.diserang(this.attackPower);
    }

    // membuat method diserang yang menerima argumen nilai attackPower milik lawan
    diserang(attackPowerLawan){
        // mengurangi health Hero dengan attackPower milik lawan
        this.health -= attackPowerLawan;
    }
}

// membuat objek
balmond = new Hero('Balmond', 100, 21);
alucard = new Hero('Alucard', 90, 35)

console.log(balmond.info());
console.log(alucard.info()); // info alucard sebelum diserang balmond
balmond.menyerang(alucard);
console.log(alucard.info()); // info alucard sesudah diserang balmond