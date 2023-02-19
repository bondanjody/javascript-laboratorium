// PENGGUNAAN SPREAD OPERATOR


const nilaiMtkSemester1 = [80, 78, 96, 100]
const nilaiMtkSemester2 = [98, 86, 88, 90]

// Code di bawah ini Worked
/*
let jumlahNilai = 0
for (let x of [...nilaiMtkSemester1, ...nilaiMtkSemester2]){
    jumlahNilai+=x
}
let ratarata = jumlahNilai/[...nilaiMtkSemester1,...nilaiMtkSemester2].length
console.log(ratarata) // Output : 89.5
*/


//atau kita bisa menggunakan variabel tambahan untuk menyimpan [...nilaiMtkSemester1,...nilaiMtkSemester2]
let totalRekapNilai = [...nilaiMtkSemester1,...nilaiMtkSemester2]
let jumlahNilai = 0
for (let x of totalRekapNilai){
    jumlahNilai+=x
}
let ratarata = jumlahNilai/totalRekapNilai.length
console.log(ratarata);