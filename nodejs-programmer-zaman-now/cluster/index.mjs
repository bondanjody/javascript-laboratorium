/*
    - seperti yang dijelaskan di awal, bahwa NodeJS itu secara default dia berjalan single thread, kecuali jika kita membuat thread manual menggunakan worker thread, tapi tetap dalam satu proses
    - NodeJS memiliki standard library bernama cluster, dimana kita dapat menjalankan beberapa proses NodeJS secara sekaligus
    - ini sangat cocok ketika kita menggunakan CPU yang multicore, sehingga semua core bisa kita utilisasi dengan baik, misal kita jalankan process NodeJS sejumlah CPU core
    - https://nodejs.org/dist/latest-v16.x/docs/api/cluster.html 
*/

/*
    - di dalam cluster terdapat 2 jenis aplikasi yaitu primary dan worker
    - primary biasanya digunakan sebagai koordinator atau manajer untuk para worker
    - sedangkan worker sendiri adalah aplikasi yang menjalankan tugasnya
*/
