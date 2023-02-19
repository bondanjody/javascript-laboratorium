// kode program 1:
// var username = 'bondanjs';
// function instagramURL(username){
//     console.log('https://www.instagram.com/'+username);
// }
// instagramURL(username);
// // output : https://www.instagram.com/bondanjs


// kode program 2 :
// var username = 'bondanjs';
// function instagramURL(username){
//     console.log('https://www.instagram.com/'+username);
// }
// instagramURL('jasonclarke');
// // output : https://www.instagram.com/jasonclarke
// // hal ini terjadi karena pada saat invoke function kita memberikan argumen yang menjadi local variabel


// // kode program 3 : 
// var username = 'bondanjs';
// function instagramURL(){
//     console.log('https://www.instagram.com/'+username);
// }
// instagramURL('jasonclarke');
// output : https://www.instagram.com/bondanjs
// hal ini terjadi karena function instagramURL tidak memiliki parameter , sehingga pada saal console.log.... 'username' akan mencari ke Object argumen apakah ada 'username' jika tidak ada baru ke  variabel dengan nama yang sama yaitu 'username' di scope global