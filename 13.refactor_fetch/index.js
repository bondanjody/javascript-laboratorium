/* Disini kita akan melakukan refactoring (pengrapian) dari kode program 12.fetch, dan juga mengenal sekilas tentang async await */


const searchButton = document.querySelector('.search-button');
/* NOTE : kita perlu memberitahu Javascript bahwa di dalam function berikut akan ada event yang asynchronous (karena secara default Javascript akan menganggap kodingan kita adalah synchronous) dengan cara menambahkan keyword 'async' di depan function asynchronous tersebut */
searchButton.addEventListener('click', async function () {
    
    const inputKeyword = document.querySelector('.input-keyword');
    /* Jika pada kode sebelumnya kita langsung menuliskan fetch, maka disini kita akan memisahkan fetch ke dalam sebuah function tersendiri yaitu function getMovies() yang menerima parameter dari value inputKeyword */
    /* NOTE : dikarenakan method getMovies lah yang berbentuk asynchronous (karena di dalamnya ada fetch) maka di depan pemanggilan function getMovies kita beri keyword 'await' */
    const movies = await getMovies(inputKeyword.value);
    /* fungsi updateUI melakukan looping terhadap cards dan menumpuknya ke dalam container */
    updateUI(movies);
})

/* membuat function getMovies() */
function getMovies(keyword){
    return fetch('http://www.omdbapi.com/?apikey=45995037&s=' + keyword)
        .then(respon => respon.json())
        .then(respon => respon.Search);
}

/* membuat function updateUI */
function updateUI(movies) {
    let cards = '';
    movies.forEach(m => cards += showCards(m));
    const movieContainer = document.querySelector('.movie-container');
    movieContainer.innerHTML = cards;
}

/* Event Binding : yaitu kita memberikan sebuah event pada suatu elemen yang awalnya belum ada, namun jika suatu saat elemen tersebut muncul maka event yang tadinya sudah kita siapkan akan dijalankan. */
/* argumen 'e' disini mewakili segala sesuatu yang kita klik di dalam halaman web (elemen apapun di halaman web) */
/* jangan lupa bahwa disini nantinya kita juga ada event aynchronous, sehingga kita perlu memberikan keyword async dan await */
document.addEventListener('click', async function(e){
    /* maksud kode di bawah yaitu : jika e adalah elemen yang nama class nya mengandung/berisi 'modal-detail-button' maka  */
    if(e.target.classList.contains('modal-detail-button')){
        const imdbid = e.target.dataset.imdbid;
        const movieDetails = await getMovieDetails(imdbid);
        updateUIDetail(movieDetails);
    }
})

/* membuat function getMovieDetails */
function getMovieDetails(imdbid){
    return fetch('http://www.omdbapi.com/?apikey=45995037&i=' + imdbid)
        .then(respon => respon.json())
        .then(m => m)
}

/* membuat function updateUIDetail */
function updateUIDetail(m){
    const movieDetail = showMovieDetails(m);
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = movieDetail;
}

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