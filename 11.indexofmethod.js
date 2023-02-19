// TITLE = Menggunakan method string indexOf()

// membuat konstanta
const slogan = 'God bless Iron Man. God bless America.';
// melakukan pengecekan apakah ada kata 'Iron' di dalam konstanta slogan
console.log(slogan.indexOf('Iron'));
// Output : 7 artinya kata 'Iron' dimulai pada indeks ke 7 (ingat bahwa penghitungan karakter dimulai dari 0)

console.log(slogan.indexOf('Mn'));
// Output : -1 karena tidak menemukan kata 'Mn'
