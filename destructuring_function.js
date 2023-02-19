// TITLE : Destructuring Function

// membuat function
// function berikut mengembalikan nilai berupa array
// elemen pertama dari array tersebut adalah hasil penjumlahan bilangan yang dimasukkan
// elemen kedua dari array tersebut adalah hasil pengurangan bilangan yang dimasukkan
function penjumlahanPengurangan(x,y){
    return [x+y, x-y];
}

// melakukan destructuring dengan memasukkan nilai tiap elemen array ke dalam variabel
const [jumlah, kurang] = penjumlahanPengurangan(4,3);
console.log(jumlah);
console.log(kurang);