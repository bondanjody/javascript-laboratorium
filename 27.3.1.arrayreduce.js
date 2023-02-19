// TITLE : menentukan nilai terbesar dan terkecil elemen array dengan method reduce

// membuat array
const num = [23,12,14,76,87,98,34];
// membuat function menentukan nilai maksimal untuk callback reduce
const maks = (x,y) => Math.max(x,y);
// membuat function menentukan nilai minimal untuk callback reduce
const minim = (x,y) => Math.min(x,y);

// membuat variabel untuk menampung nilai maksimal dan minimal
const nilaiMaks = num.reduce(maks);
const nilaiMinim = num.reduce(minim);

console.log(nilaiMaks);
console.log(nilaiMinim);
// output : 98
// 12

