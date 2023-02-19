// Timer menggunakan promise
import timers from 'timers/promises'

// let nama = 'Bondan'

// await timers.setTimeout(6000)

// console.info(`Hello, ${nama}`)

// // contoh kode program 2 : setTimeout disimpan ke variabel (untuk memberi nilai suatu variabel)
// const limaMenitBerlalu = await timers.setTimeout(5000, `Lima menit berlalu sampai ${new Date()}`)
// console.log(limaMenitBerlalu);

// contoh kode program 3 (for await)
for await(const startTime of timers.setInterval(1000, new Date())){
    console.log(`Waktu dimulai pada : ${startTime}`);
}
// Kode di atas akan mencetak waktu yang sama (waktu dimulai perulangan) secara terus menerus , kalau mau waktunya dinamis , letakkan new Date() di dalam console.log di dalam for