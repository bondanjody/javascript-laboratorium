// TITLE : Perulangan for..0f 

// perulangan for of mulai diperkenalkan pada ES6

// membuat array
const cities = ['Jakarta', 'Kuala Lumpur', 'Manila', 'Bangkok'];

// membuat perulangan
for (const kota of cities) {
    console.log(kota);
}
// output :
// Jakarta
// Kuala Lumpur
// Manila
// Bangkok

// membuat kostanta string
const queen = `Elizabeth`;
for (const ratu of queen) {
    console.log(ratu);
}
// Output :
// E
// l 
// i 
// z 
// a 
// b 
// e 
// t 
// h 

// membuat array angka
let score = [20,30,40,50];
for (let nilai of score) {
    nilai*=3.5;
    console.log(nilai);
}