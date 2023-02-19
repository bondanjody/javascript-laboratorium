// TITLE : Template Literals => menggunakan karakter backtick ` untuk membuat embedded expression

const nama = 'Bondan';
console.log(`Halo ${nama} !`);
// output : Halo Bondan !

// operasi matematik
let a,b;
a = 12;
b = 89;
console.log(`${a} * ${b} = ${a*b}`);
// Output : 12 * 89 = 1068

// memanggil function
console.log(`${alert('Warning!!!!')}`);

// membuat ternary
let umur = 18;
console.log(`${(umur >= 17) ? 'Selamat Menonton' : 'Dilarang Menonton'}`);