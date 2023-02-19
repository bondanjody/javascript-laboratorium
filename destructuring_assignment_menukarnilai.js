// TITLE : menukar nilai atau swap nilai pada destructuring assignment

// membuat array dan memasukkannya ke dalam variabel
let [aldi, romas] = ['ford', 'hermes'];
console.log(aldi);
console.log(romas);
// output : 
// ford => nilai aldi
// hermes => nilai romas

//kode di bawah akan melakukan swap
[aldi, romas] = [romas, aldi];
console.log(aldi);
console.log(romas);
// output :
// hermes => nilai aldi sekarang
// ford => nilai romas sekarang