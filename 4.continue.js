// TITLE = Melewati suatu nilai / kondisi di dalam loop

let a = 0;
// Loop berikut akan melewati angka 10
while(a<15){
    a++;
    if(a===10){continue;};
    console.log(a);


}
// Note : urutan continue pada while loop harus sama seperti pada kode di atas supaya dapat bekerja sebagaimana mestinya 


for(a = 23;a >= 15;a--){
    // Angka 20 tidak akan ditampilkan (dilewati)
    if(a===20){continue;}
    // Menampilkan nilai variabel a
    console.log(a);
    // Note : kondisi yang dilewati(continue) harus ditulis sebelum statement menampilkan nilai variabel supaya program work properly 
}