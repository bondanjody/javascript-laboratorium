// TITLE = Jenis Iteration (pengulangan) method

// pada javascript iteration method ada 2 :
// 1. imperative method (pengulangan yang biasanya kita kenal)
const bilangan = [];
for(bil=0;bil<=5;bil+=1.5){
    bilangan.push(bil);
}
console.log(bilangan);
// 2. declarative method (contoh pengulangan yang ada di higher-order function)
const bilanganKali2 = bilangan.map(x => x*2);
// function map meng-iterate (mengulang) variabel bilangan lalu x mewakili tiap elemen dari variabel bilangan
// kemudian meng-return x * 2
console.log(bilanganKali2); 
