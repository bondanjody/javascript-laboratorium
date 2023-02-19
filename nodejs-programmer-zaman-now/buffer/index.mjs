// Object Buffer ada di global, sehingga kita tidak perlu mengimpornya



// mengubah string menjadi buffer
const data1 = Buffer.from("Bondan Jody Setyawan")
console.log(data1);
// Output : <Buffer 42 6f 6e 64 61 6e 20 4a 6f 64 79 20 53 65 74 79 61 77 61 6e>



// mengubah / menampilkan data buffer dalam bentuk string
console.log(data1.toString());
// output : Bondan Jody Setyawan



// menggunakan buffer.reverse() untuk membalikkan nilainya
const data1Baru = data1.reverse()
console.log(data1Baru);
console.log(data1Baru.toString());
/*
    output :
    <Buffer 6e 61 77 61 79 74 65 53 20 79 64 6f 4a 20 6e 61 64 6e 6f 42>
    nawayteS ydoJ nadnoB
*/


/*
    Buffer adalah bentuk low level dari suatu data. Kita bisa mengubah gambar menjadi buffer.
*/




// menggunakan Buffer untuk mengubah encoding
const data2 = Buffer.from("MANCHESTER CITY", "ascii")

// untuk mengubah encoding, kita tinggal menambahkan jenis encoding sebagai argumen toString()
console.log(data2.toString("base64"));      
console.log(data2.toString("hex"));   
console.log(data2.toString("latin1"));   
/*
    Output :
    TUFOQ0hFU1RFUiBDSVRZ
    4d414e434845535445522043495459
    MANCHESTER CITY
*/


// sebaliknya , kita pun bisa menguba dari encoding lain seperti base64 -> utf8
const data2Baru = Buffer.from("TUFOQ0hFU1RFUiBDSVRZ", "base64")
const data3 = data2Baru.toString("utf-8")
console.log(data3);
// Output : MANCHESTER CITY
