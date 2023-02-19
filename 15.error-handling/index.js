/*
    Error Handling di Promise
    1. then() yaitu untuk menangkap resolve dari Promise
    2. catch() yaitu untuk menangkap reject dari Promise

    Error Handling di Async/Await
    1. try
    2. catch() karena kodenya kita buat seolah-olah synchronous

    Pada project ini kita akan menangani error handling pada fetch() dikarenakan method fetch() adalah API bawaan Javascript

    Di bawah ini adalah kode program yang diambli dari 13.refactor_fetch
*/
const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function () {
    /* seperti yang sudah diketahui bahwa pada async/await kita menangkap error dengan menggunakan try catch */
    try{
        const inputKeyword = document.querySelector('.input-keyword');
        const movies = await getMovies(inputKeyword.value);
        // updateUI(movies);
}   catch(err){
        console.log(err);
}
})

/* membuat function getMovies() */
function getMovies(keyword){
    return fetch('http://www.omdbapi.com/?apikey=45995037&s=' + keyword)
        .then(respon => {
            /* mengecek / Error handling apabila API key salah */
            if(!respon.ok){
                /* melemparkan erro ke try catch di atas */
                throw new Error(respon.statusText);
            }
                return respon.json();
        })
        .then(respon => respon.Search);
}

/* membuat function updateUI */
function updateUI(movies) {
    let cards = '';
    movies.forEach(m => cards += showCards(m));
    const movieContainer = document.querySelector('.movie-container');
    movieContainer.innerHTML = cards;
}

document.addEventListener('click', async function(e){
    if(e.target.classList.contains('modal-detail-button')){
        const imdbid = e.target.dataset.imdbid;
        const movieDetails = await getMovieDetails(imdbid);
        updateUIDetail(movieDetails);
    }
})

/* membuat function getMovieDetails */
function getMovieDetails(imdbid){
    /* Note : Bila kita menggunakan fetch , error yang ditangkap hanya error yang ada di dalam network nya / yang ada pada URL nya saja. Jadi sebenarnya error seperti kotak pencarian kosong atau film yang tidak ada itu bukan error dari fetch, melainkan error dari browser (dari kode yang program kita sendiri). Fetch hanya akan gagal / reject ketika network nya error (misal : kita salah menuliskan URL)*/
    return fetch('http://www.omdbapi.com/?apikey=45995037&i=' + imdbid)
    /* kode di bawah ini seharusnya hanya jalan ketika url nya benar, kotak pencariannya tidak kosong, dan filmnya ada. sehingga kita harus mengeceknya terlebih dahulu dengan pengkondisian.

    di dalam respon ada berbagai properti seperti ok yang berisi true/false, dll

    disini kita akan mengecek jika ok tidak true maka akan melemparkan statusText(yang mana juga merupakan properti dalam repon)

    dan else (jika ok true) maka akan mengembalikan json data yang di request (program berjalan normal)
    */
        .then(respon => respon.json())
        .then( m => m);
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
