// TITLE = Pengaplikasian indexof() sederhana

// membuat konstanta yang berisi lirik lagu
const standByMeLyrics = '\
Made a meal and threw it up on Sunday\
I\'ve got a lot of things to learn\
Said I would and I\'ll be leaving one day\
Before my heart starts to burn\
So what\'s the matter with you?\
Sing me something new\
Don\'t you know the cold and wind and rain don\'t know\
They only seem to come and go away\
';

// membuat fungsi untuk mencari kata tertentu pada konstanta
function cariKata(kata){

    // membuat kondisi apabila ditemukan kata yang dimaksud
    if(standByMeLyrics.indexOf(kata)!=-1){
        return 'Kata ' +kata + ' ada pada lirik lagu.';
    }else{
        // kondisi apabila kata tidak ditemukan
        return 'Kata ' + kata + ' tidak ada pada lirik lagu.';
    }
}

// memanggil fungsi dan memberikan argumen
console.log(cariKata('oasis'));
