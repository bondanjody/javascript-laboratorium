// mengimpor Tiger dan Wolf

// cara mengimpor dengan named default export
import Tiger from './Tiger.js'

// cara mengimpor dengan named export
import {Wolf} from './Wolf.js'

const hewan1 = new Tiger()
const hewan2 = new Wolf()

console.log(hewan1.ngaum());
console.log(hewan2.ngaum());

// const hewan1 = new Macan()
// const hewan2 = new Serigala()

// console.log(`${hewan1.ngaum()}`);
