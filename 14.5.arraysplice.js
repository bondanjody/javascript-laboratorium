// TITLE : menambahkan elemen ke tengah-tengah array dengan menggunakan method splice()

// deklarasi array
const singers = [
    'judika',
    'ariel',
    'naga'
];
// menampilkan elemen-elemen awal array
console.log(singers.join(' . '));
// output : judika . ariel . naga

// menambahkan elemen kedalam indeks 1 yang memiliki nilai 'denny caknan'
singers.splice(1,0,'denny caknan');
// menampilkan elemen-elemen array dengan method join()
console.log(singers.join(' - '));
// output : judika - denny caknan - ariel - naga

// Note : rumus splice (indexAwal, mauDihapusBerapa, elemenYangDitambahkan1, elemenYangDitambahkan2, ...)

// menambahkan elemen ke indeks kedua, dan menghapus 1 buah elemen (elemen kedua sebelumnya)
singers.splice(2,1,'adam levine');
console.log(singers.join(' / '));
// output : judika / denny caknan / adam levine / naga

// menambahkan elemen ke indeks pertama, dan menghapus 2 buah elemen (elemen indek 1, dan 2)
singers.splice(1,2,'matt shadow');
console.log(singers.join(' _ '));
// output : judika _ matt shadow _ naga

// menambahkan 2 buah elemen dimulai dari indeks kedua, dan menghapus 1 buah elemen (elemen kedua) 
singers.splice(2,1, 'noel gallagher', 'chris martin');
console.log(singers.join(' & '));
// output : judika & matt shadow & noel gallagher & chris martin