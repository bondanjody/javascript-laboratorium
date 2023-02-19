// menghandle ketika tombol search di klik
$('.search-button').on('click', function(){

    $.ajax({
        // 
        url:'http://www.omdbapi.com/?apikey=45995037&s=' + $('.input-keyword').val(),
        // success digunakan untuk menampilkan data hasil request kita
        success: results => {
            // menghilangkan tulisan Search dari hasil request
            const movie = results.Search;
            // membuat variabel cards kosong (yang nantinya digunakan untuk menampung template literals yang didalamnya disisipkan data hasil request kita)
            let cards = '';
            // membuat loop forEach terhadap json (objek) data request kita
            movie.forEach(m => {
                cards += showCards(m);
                // mengisi class html movie-container dengan menggunakan jQuery diisi dengan cards
                $('.movie-container').html(cards);
    
                // ketika tombol detail di klik
                $('.modal-detail-button').on('click', function(){
                    $.ajax({
                        url:'http://www.omdbapi.com/?apikey=45995037&i='+$(this).data('imdbid'),
                        success: m => {
                            const movieDetail = showMovieDetails(m);
                            $('.modal-body').html(movieDetail);
                        }
                    })
                })
            })
            
        },
        error : (e) => {
            // jika terjadi error
            console.log(e.responsetext)
        }
    })

});


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