// HANYA PROGRAM PENGISI GABUT

// DIGUNAKAN UNTUK LATIHAN FUNCTION DAN DESTRUCTURING

// referensi dari StackOverflow : https://stackoverflow.com/questions/46224895/javascript-pass-object-as-function-argument 


// MEMBUAT OBJEK YANG NANTINYA AKAN DIOLAH
const player = {
    nama : "Erling Haaland",
    nationality : "Norway",
    age : 21,
    club : "Manchester City"
}

// Tugas mu adalah membuat function yang menerima object player di atas , dan fungsi tersebut mengembalikan isi player dengan format : "Erling Haaland adalah pemain berusia 21 tahun berkebangsaan Norway yang bermain untuk klub Manchester City"

// CODE DI BAWAH INI TIDAK WORK 
// const showPlayer = (playerProfile) => {
//     // destructuring object
//     let {nama, nationality, age, club} = playerProfile
//     return `${nama} adalah pemain berusia ${age} tahun berkebangsaan ${nationality} yang bermain untuk klub ${club}`
// }
// console.log(showPlayer(player))

// CODE DI BAWAH INI WORK
function showPlayer(playerProfile){
    let {nama, nationality, age, club} = playerProfile
    return `${nama} adalah pemain berusia ${age} tahun berkebangsaan ${nationality} yang bermain untuk klub ${club}`
}
console.log(showPlayer(player))

// CODE DI BAWAH LANGSUNG MENDESTRUCTUR PADA PARAMETER FUNCTION
function tampilPemain({nama, nationality, age, club}){
    return `${nama} is a fantastic football player !`
}
console.log(tampilPemain(player))