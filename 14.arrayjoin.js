// TITLE : Menggunakan method array join()

// method join() akan mengubah isi array menjadi string lalu menampilkannya secara default dipisahkan oleh tanda koma

// deklarasi array
const animals = [];
// mengisi array
animals[0] = 'Tiger';
animals[1] = 'Lion';
animals[2] = 'Pigeon';
// menampilkan isi array dengan menggunakan method join()
console.log(animals.join());
// output : Tiger,Lion,Pigeon

console.log(animals.join('_'));
// output : Tiger_Lion_Pigeon