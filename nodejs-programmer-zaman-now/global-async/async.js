const samplePromise = () => {
    return Promise.resolve('Promise berhasil !')
}

const run = async () => {
    const hasil = await samplePromise()
    console.log(hasil);
}

run()
/*
    Untuk menjalankan Async/Await diluar JavaScript module, kita perlu mendefinisikan keyword 'async' tepat sebelum kita melakukan 'await'
    Namun berbeda dengan jika kita menggunakan JavaScript module.
*/