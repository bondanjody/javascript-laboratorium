// TITLE : Destructuring Function mengembalikan objek

// pada contoh kode program sebelumnya apabila kita mengembalikan nilai dari sebuah function berupa array maka variabel yang kita buat harus urut dengan elemen array nya.
// apabila kita ingin membuat variabel yang tidak harus urut dengan elemen array nya maka kita dapat mengubah function tersebut supaya mengembalikan nilai berupa objek

// membuat function
function kalkulator(a,b){
    return {
        tambah : a+b,
        kurang : a-b,
        kali : a*b,
        bagi : a/b
    }
}

// membuat destructuring
const {kali, tambah, bagi, kurang} = kalkulator(7,6);
// seperti yang dapat dilihat pada statement di atas bahwa saat membuat variabel kita tidak harus menuliskan urut (tambah, kurang, kali, bagi) tetapi kita dapat mengacaknya karena destructuring object bergantung pada nama propertinya
console.log(kali);