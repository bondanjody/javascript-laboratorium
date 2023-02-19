/*
JavaScript memiliki kemampuan First Class Functions, karena itu fungsi pada JavaScript dapat diperlakukan layaknya sebuah data. Kita bisa menyimpan function dalam variabel, memberikan function sebagai parameter pada fungsi lainnya, hingga mengembalikan function di dalam function.
*/

// COntoh kode program 1
const hello = () => {
    console.log('Hello!')
  };
  
const say = (someFunction) => {
    someFunction();
  }
  
const sayHello = () => {
      return () => {
          console.log('Hello!');
      }
  }
  
hello();
say(hello);
sayHello()();

/*
Karena dengan kemampuan First Class Functions-nya itu, kita dapat membuat Higher-Order Function secara mudah. Tunggu, tunggu. Apa itu Higher-Order Function?

Higher-Order Function menjadi bagian konsep pada paradigma FP. Higher-Order Function merupakan fungsi yang dapat menerima fungsi lainnya pada argumen; mengembalikan sebuah fungsi; atau bahkan keduanya.

Teknik Higher-Order Function biasanya digunakan untuk:
- Mengabstraksi atau mengisolasi sebuah aksi, event, atau menangani alur asynchronous menggunakan callback, promise, dan lainnya.
- Membuat utilities yang dapat digunakan di berbagai tipe data.
- Membuat teknik currying atau function composition.

Array map() merupakan salah satu contoh Higher-Order Function yang ada di JavaScript. Karena dalam penggunaanya, ia menerima satu buah argumen yang merupakan sebuah function.

Dengan mengetahui adanya Higher-Order Function, Anda bisa membuat fungsi map() versi Anda sendiri!
*/

console.log("-----------------------------------------------------------------")

// Contoh kode program higher order function kompleks (disertai rekursif)
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

// method higher order function
const arrayMap = (arr, action) => {     // menerima 2 parameter, arr : nantinya untuk menampung array, action : nantinya digunakan untuk function (lihat di bawah)
  const loopTrough = (arr, action, newArray = [], index = 0) => {   // method loopThrough menerima 2 parameter tadi (arr, dan action) serta 2 parameter tambahan yaitu : newArray = yang berfungsi untuk menampung nilai array baru, dan index = untuk mengakses index array sebelumnya 
    const item = arr[index];    // variabel item digunakan untuk mengakses tiap item pada array sebelumnya
    if(!item) return newArray;      // jika item sudah tidak dapat diakses (misalnya indeks nya sudah melampaui yang seharusnya , maka ia akan menutup keseluruhan fungsi dengan mereturn array yang baru)
    return loopTrough(arr, action, [...newArray, action(arr[index])], index + 1);   // rekursif
  }

  return loopTrough(arr, action);
}


const newNames = arrayMap(names, (name) => `${name}!` );        // parameter "name" menunjuk pada parameter "action" pada fungsi rekursif "loopTrough". ia menunjuk pada nilai item array sebelumnya

console.log({
    names,
    newNames,
});
