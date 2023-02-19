/*
    Fetch adalah API pada javascript modern yang tugasnya untuk mengambil data secara asynchronous (AJAX) sama seperti kita melakukan XMLHttpRequest pada vanila Javascript atau juga menggunakan method AJAX pada jQuery
    fetch bisa menerima 2 parameter , yaitu : 'resources' dan 'init'
    'resources' bisa berupa :
    1. URL : alamat dari sumber yang kita ambil
    2. Request Object : representasi permintaan sumber

    'init'(optional):
    konfigurasi tambahan pada sebuah request berbentuk object , contoh : method, header, dll.

    response  (hasil dari fetch berupa promise) di dalamnya ada property dan method.
    property contohnya : headers, ok, redirected, status, statusText, type, url, body
    method, contohnya : clone(), error(), redirect(), blob(), formData(), json(), text()

    penjelasan lengkapnya bisa dilihat di web MDN


    kode berikut di copy dari folder 10.2belajar_callback
*/

/* MENGGUNAKAN AJAX DAN JQUERY */
// // menghandle ketika tombol search di klik
// $('.search-button').on('click', function(){

//     $.ajax({
//         // 
//         url:'http://www.omdbapi.com/?apikey=45995037&s=' + $('.input-keyword').val(),
//         // success digunakan untuk menampilkan data hasil request kita
//         success: results => {
//             // menghilangkan tulisan Search dari hasil request
//             const movie = results.Search;
//             // membuat variabel cards kosong (yang nantinya digunakan untuk menampung template literals yang didalamnya disisipkan data hasil request kita)
//             let cards = '';
//             // membuat loop forEach terhadap json (objek) data request kita
//             movie.forEach(m => {
//                 cards += showCards(m);
//                 // mengisi class html movie-container dengan menggunakan jQuery diisi dengan cards
//                 $('.movie-container').html(cards);
    
//                 // ketika tombol detail di klik
//                 $('.modal-detail-button').on('click', function(){
//                     $.ajax({
//                         url:'http://www.omdbapi.com/?apikey=45995037&i='+$(this).data('imdbid'),
//                         success: m => {
//                             const movieDetail = showMovieDetails(m);
//                             $('.modal-body').html(movieDetail);
//                         }
//                     })
//                 })
//             })
            
//         },
//         error : (e) => {
//             // jika terjadi error
//             console.log(e.responsetext)
//         }
//     })

// });










// /*
//     BACA KODE INI SEBELUM LANJUT KE KODE BAWAH
//     Pertama-pertama kita harus membuat event handler untuk search button
// */ 
// const searchButton = document.querySelector('.search-button');
// searchButton.addEventListener('click', function(){
//     /* variabel untuk menampung textbox pencarian */
//     const inputKeyword = document.querySelector('.input-keyword');
//     /* berikut cara penulisan fetch. parameter pertama adalah url untuk request data
//         di bawah ini kita tambahkan kode supaya yang dicari di API sesuai dengan apa yang diketikkan di teksboks pencarian
//         NOTE : fetch adalah fungsi di Javascript yang mengembalikan promise. Sehingga kita perlu menangani ketika datanya sudah fulfilled (ditepati/dipenuhi) yaitu method then , dll.
//     */
//     fetch('http://www.omdbapi.com/?apikey=45995037&s=' + inputKeyword.value)
//         /* method then yang pertama adalah mengubah data yang diperoleh saat request supaya berupa json  */
//         .then(respon => respon.json())
//         /* setelah menggunakan method json() data yang dikembalikan masih berupa Promise. Walaupun kita sudah bisa melihat datanya, tetapi yang namanya Promise supaya kita bisa menjalankannya secara asynchronous , maka kita harus menjalankannya lagi ke dalam method then (jadi ada dua kali  pemanggilan method then) */
//         .then(respon => console.log(respon))
//         /* sekarang output nya berupa objek */
// })

/*
    Pertama-pertama kita harus membuat event handler untuk search button
*/ 
const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', function(){
    /* variabel untuk menampung textbox pencarian */
    const inputKeyword = document.querySelector('.input-keyword');

    fetch('http://www.omdbapi.com/?apikey=45995037&s=' + inputKeyword.value)
        /* method then yang pertama adalah mengubah data yang diperoleh saat request supaya berupa json  */
        .then(respon => respon.json())
        .then(respon => {
            /* variabel movies mengambil Search, supaya kita tidak berada di luar property Search , sehingga langsung dapat mengakses property-property di dalamnya */
            const movies = respon.Search;
            /* membuat variabel cards dengan menggunakan 'let' supaya dapat ditumpuk (dinamis) */
            let cards = '';
            /* melakukan perulangan pada cards sama seperti pada kode yang menggunakan jquery di atas. sehingga sekarang cards berisi data-data film */
            movies.forEach(m => cards += showCards(m));
            /* menangkap class movie-container dan disimpan pada variabel movieContainer */
            const movieContainer = document.querySelector('.movie-container');
            /* menimpa movieContainer dengan cards */
            movieContainer.innerHTML = cards;

            /* ketika tombol detail di klik */
            /* menggunakan querySelectorAll() dikarenakan tombol yang di klik ada banyak */
            const modalDetailButton = document.querySelectorAll('.modal-detail-button');
            /* dikarenakan modalDetailButton bukan single element (sekarang berupa NodeList) kita tidak bisa langsung memberikan event-handler (addEventListenet), sehingga kita perlu melakukan looping dulu.
            menggunakan forEach arti kode di bawah ini adalah : ketika setiap button di klik akan menjalankan fungsi
            */
            modalDetailButton.forEach(btn => {
                btn.addEventListener('click', function (){
                    /* variabel imdbid mengambil data imdbid di setiap film yang detailnya di klik. 
                        NOTE : jika kita menggunakan arrow function kita tidak bisa mengakses keyword 'this' oleh karena itu kita menggunakan keyword function disini saat kita perlu menggunakan this
                    */
                    const imdbid = this.dataset.imdbid;
                    /* tinggal kita lakukan fetch lagi */
                    fetch('http://www.omdbapi.com/?apikey=45995037&i=' + imdbid)
                        .then(respon => respon.json())
                        .then(m => {
                            const movieDetail = showMovieDetails(m);
                            const modalBody = document.querySelector('.modal-body');
                            modalBody.innerHTML = movieDetail;
                        })
                })
            })
        })

})


function showCards(m){
    return `<div class="col-md-4 my-5">
    <div class="card">
    <img src='${m.Poster}' class="card-img-top">
    <div class="card-body">
        <h5 class="card-title">${m.Title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
        <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid='${m.imdbID}'>Movie Details</a>
    </div>
    </div>
</div>`;
}

function showMovieDetails(m){
    return `<div class="container-fluid">
    <div class="row">
    <div class="col-md-3">
        <img src="${m.Poster}" class="img-fluid">
    </div>
    <div class="col-md">
        <ul class="list-group">
        <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
        <li class="list-group-item"><strong>$Director :</strong> ${m.Director}</li>
        <li class="list-group-item"><strong>Actors :</strong> ${m.Actors}</li>
        <li class="list-group-item"><strong>Writer :</strong> ${m.Writer}</li>
        <li class="list-group-item"><strong>Plot :</strong> <br> ${m.Plot}</li>
        </ul>
    </div>
    </div>
</div>`;
}