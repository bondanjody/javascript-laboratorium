// TITLE : memanggil function pada parameter

// membuat function
let tambah = (a,b) => a+b;
let kurang = (a,b) => a-b;
let kali = (a,b) => a*b;

// meminta input user dan mengubahnya menjadi integer
let bil1 = parseInt(prompt('Masukkan bilangan pertama :'));
let bil2 = parseInt(prompt('Masukkan bilangan kedua :'));
// melakukan kalkulasi
let res = kali(tambah(bil1,bil2), kurang(bil2,bil1));

window.alert('Hasil ('+bil1+'+'+bil2+')*('+bil2+'-'+bil1+') = '+ res);