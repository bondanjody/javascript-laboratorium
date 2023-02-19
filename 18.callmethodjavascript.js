// TITLE : built-in call() method javascript

// NOTE :
// 1. call() method adalah built-in / bawaan javascript
// 2. dengan call() sebuah object bisa menggunakan sebuah method yang menjadi milik dari object lain
// 3. call() dapat menggunakan object lain sebagai parameter . lihat contoh kode di bawah


// membuat function untuk menggabungkan dua buah property object
const fungsi = {
    fullName : function(){
        // keyword this di bawah akan fleksibel terhadap obyek yang dipanggil
        return this.firstName + this.lastName;
    }
}

// membuat 2 buah object
const person1 = {
    firstName:'John',
    lastName:'Welker'
}

const person2 = {
    firstName : 'Paul',
    lastName : 'Branson'
}

// memasukkan argumen object di atas dalam method object fungsi dengan menggunakan method built-in call()
console.log(fungsi.fullName.call(person1));