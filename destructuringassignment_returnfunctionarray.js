// TITLE : menggunakan array dari return value function langsung dimasukkan pada proses destructuring

// membuat function 
function menghasilkan(){
    // membuat function ini mengembalikan nilai berupa array
    return ['yahiko', 'nagato', 'konan'];
}

// karena function di atas langsung mengembalikan nilai (array)
// maka kita dapat langsung melakukan destructuring pada array tersebut
const [char1, char2, ...rest] = menghasilkan();
// note : jangan lupa tanda () pada function yang digunakan jadinya 'menghasilkan()'
console.log(char1);
console.log(char2);
console.log(rest);