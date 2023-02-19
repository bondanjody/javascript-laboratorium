/*
    Konsep selanjutnya yang ada di Functional Programming adalah rekursif. Apa itu rekursif? Rekursif merupakan teknik pada sebuah function yang memanggil dirinya sendiri.

    Kita akan mencoba mengubah fungsi countDown yang biasanya kita buat menggunakan sintaksis iterasi seperti for, foreach, while seperti kode di bawah menjadi bentuk rekursif.
*/

// Contoh kode program 1 (Tidak sesuai Functional Programming)
const countDown = start => {
    do {
      console.log(start);
      start -=1;
    }
    while(start > 0);
  };
   
  countDown(10);

console.log("-----------------------------------------------------")

// Contoh kode program 2 (sesuai Functional Programming)
const hitungMundur = start => {
    console.log(start);
    if(start > 0) hitungMundur(start-1);
  };
  
  countDown(10);

/*
Dengan teknik rekursif ini, kita sebenarnya bisa menggantikan operasi iterasi dengan rekursi. Namun tidak sebatas itu saja, dengan rekursi kita dapat membuat dan mengolah data structures seperti Tree dan Array.
*/