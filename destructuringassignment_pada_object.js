// TITLE : destructuring assignment pada object 

// membuat objek
const fruits = {
    a: 'Apple',
    b: 'Banana',
    c: 'Cherry',
    d: 'Durian'
}
// memasukkan nilai dari objek ke dalam variabel yang telah dibuat
// NOTE : nama variabel dan nama property objek harus sama
const {a,b, ...rest} = fruits;


console.log(a);
console.log(b);
console.log(rest);

// Contoh kode 2:
// "Assignment Tanpa Deklarasi Objek"
// Kita dapat melakukan assignment tanpa perlu melakukan deklarasi objek terlebih dahulu
// yaitu dengan menambahkan tanda () dan menghilangkan keyword const
({fr1, fr2, ...sisa} = {fr1: 'Apple', fr2: 'Banana', fr3: 'Cherry', fr4: 'Durian'});
console.log(sisa);
// Output : Object { fr3: "Cherry", fr4: "Durian" }