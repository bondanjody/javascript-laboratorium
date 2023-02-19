class FootballClub{
    constructor(nama, league, country){
        this.nama = nama;
        this.league = league;
        this.country = country;
    }
    // Note : method di dalam class tidak boleh memakai keyword function
    showInfo(){
        // jangan lupa kita menggunakan console.log bukan print :D
        console.log(`${this.nama} is a football club based in ${this.country} and competes in ${this.league}`);
    }
}

// jangan lupa keyword new
const manCity = new FootballClub("Manchester City", "Premier League", "Manchester");

// mencoba mengubah nilai manCity
manCity.country = "Spain"
manCity.showInfo();