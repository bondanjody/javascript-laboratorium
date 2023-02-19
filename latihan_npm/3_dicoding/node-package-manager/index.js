// mengimport package lodash
import __ from 'lodash'

// menggunakan method partition dari lodash
const myOddEvenArray = __.partition([21,22,23,24,25], (n) => n%2)
console.log(myOddEvenArray);
