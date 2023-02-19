// [1] list of abstractions
const canSendMessage = self => ({
    sendMessage: () => console.log('send message:', self.message)
  });

const checkIsValidPhone = self => ({
    isValid: () => console.log('valid phone', self.from)
  });

// [2] crate object composition
const personalEnterprise = (from, message, store) => {
  // [3] attributes
  const self = {
    from,
    message,
    store
  };
  // [4] method
  const personalEnterpriseBehaviors = self => ({
    createCatalog: () => console.log('Catalog has created: ', self.store)
  });
  
  // [5] create object composition
  return Object.assign(self, personalEnterpriseBehaviors(self), canSendMessage(self), checkIsValidPhone(self));

  /*
        Penjelasan :
        Dengan melakukan Object.assign artinya semua isi object seperti : sendMessage, isValid, dan createCatalog akan menjadi method milik personalEnterprise
  */
};

const pe1 = personalEnterprise('pengirim@gmail.com', 'hei produk baru nih', 'Dicoding Store');
pe1.createCatalog(); //Catalog has created:  Dicoding Store
pe1.sendMessage(); //send message: hei produk baru nih
pe1.isValid()

/*
    NOTE : Object Composition adalah suatu paradigma yang digunakan untuk menangani masalah yang muncul akibat classical inheritance. (Coba cari informasi lebih lengkapnya di Google)

    Penjabaran Kode di atas : 
    Kita membuat sebuah abstraksi (pemisahan) untuk method-method yang umum digunakan (di sini misalkan method mengirim pesan, dan validasi nomor hp).

    Kita membuat sebuah kelas baru dengan nama personalEnterprise, di mana seperti biasa kita dapat menggunakan parameter yang akan digunakan.

    Pada  object composition ini, penggunaan parameter biasa digunakan untuk mendaftarkan attribute-attribute dari kelas tersebut. Pada contoh di atas, kita mengumpulkan attribute tersebut pada konstanta bernama self atau state.

    Method, kita dapat juga menambahkan method/fungsi yang spesifik hanya ada pada kelas tersebut (kapabilitasnya hanya pada kelas tersebut / tidak umum).

    Proses pembuatan object dengan perintah Object.assign(attribute, method1, method2, methodN).
*/