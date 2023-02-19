// https://nodejs.org/api/url.html   -> documentation untuk NodeJS URL

// import class URL
import {URL} from 'url'

const nodeURL = new URL("https://www.bondanbelajar.com/belajar?kelas=nodejs")

// salah satu contoh operasi yang bisa kita lakukan adalah mengubah host url tersebut
nodeURL.host = "www.facebook.com"
// NOTE : perlu diketahui bahwa method searchParams{} di bawah mengembalikan nilai berupa objek sehingga kita dapat melakukan manipulasi terhadapnya seperti melakukan penambahan properti di bawah ini
nodeURL.searchParams.append("status","ongoing")

console.log(nodeURL.toString());
console.log(nodeURL.protocol);      // output : https
console.log(nodeURL.hostname);      // output : www.facebook.com
console.log(nodeURL.host);      // output : www.facebook.com
console.log(nodeURL.pathname);
console.log(nodeURL.searchParams);