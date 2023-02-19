// Global Objects adalah object atau function yang langsung dapat kita gunakan tanpa perlu mengimpornya
// Contoh : require(), setTimeout(), setInterval(), dll
// https://nodejs.org/api/globals.html 

// setTimeout
let a = 2, b = 5
setTimeout(() => {
    console.log(`Hasil ${a}x${b}=${a*b}`);
},2500)
// Output : Hasil 2x5=10  (setelah 2.5 detik)
