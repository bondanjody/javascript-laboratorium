// TITLE : spread operator

// spread operator digunakan untuk memecah nilai dari iterable menjadi single element
// iterable contohnya : string, array, map, nodelist, dll

// contoh kode program 1
// membuat array
const fruits = ['Banana', 'Strawberry', 'Orange'];
// menggunakan spread operator 
console.log(...fruits);
// output : Banana Strawberry Orange (ditampilkan dalam bentuk BUKAN array karena sudah dipecah)


// Contoh penerapan spread operator adalah pada saat kita ingin menggabungkan 2 buah array 
// contoh kode program 2
// membuat array1 dan array2
const cars = ['Lamborgini', 'BMW', 'Mercedes-Benz'];
const motorcycle = ['Ducati', 'Suzuki', 'Yamaha'];
// membuat array3 yang merupakan gabungan dari array1 dan array2 MENGGUNAKAN SPREAD OPERATOR
const vehicles = [...cars, ...motorcycle];
console.log(vehicles);
console.log(vehicles[3]);
// output : Array(6) [ "Lamborgini", "BMW", "Mercedes-Benz", "Ducati", "Suzuki", "Yamaha" ]


// kelebihan menggabungkan array dengan menggunakan spread operator adalah kita dapat menyisipkan / menambahkan elemen array lain ditengah-tengah array yang digabungkan (lebih fleksibel)
// contoh kode program 3
const mancityPlayer = ['De Bruyne', 'Sterling', 'Ederson'];
const liverpoolPlayer = ['Thiago', 'Salah', 'Alisson'];
// menyisipkan elemen di tengah -tengah penggabungan array
const footballPlayer = [...mancityPlayer, 'Aubameyang', ...liverpoolPlayer];
console.log(footballPlayer);
// output : Array(7) [ "De Bruyne", "Sterling", "Ederson", "Aubameyang", "Thiago", "Salah", "Alisson" ]


// selain itu spread operator juga dapat digunakan apabila kita ingin men-copy array (Note : dan kita tidak ingin array yang dicopy(array sumber) nilai nya ikut berubah apabila kita mengubah nilai array baru)
// contoh kode program 4
// membuat array1 (array sumber yang akan dicopy)
const factoryNames = ['Aisin', 'AHM', 'TMMIN'];
// membuat array baru yang mengcopy array1 
const multiFactory = [...factoryNames];
// melakukan modifikasi pada array kedua 
multiFactory[1] = 'Daihatsu';
console.log(multiFactory);
console.log(factoryNames);
// output :
// Array(3) [ "Aisin", "Daihatsu", "TMMIN" ]
// Array(3) [ "Aisin", "AHM", "TMMIN" ]
// seperti yang kamu lihat array1 tidak terpengaruh setelah kita memodifikasi array kedua