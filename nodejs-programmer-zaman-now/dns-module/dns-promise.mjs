// NOTE : membutuhkan koneksi internet

// menggunakan library dns yang menggunakan promise
import dns from 'dns/promises'

const dnsGoogle = await dns.lookup("www.google.com")
console.log(dnsGoogle);     // maka outputnya akan berupa object, kita bisa melakukan distructruring
// family artinya jenis / versi IP

const {address, ...lainnya } = await dns.lookup("www.twitter.com")
console.log(address);       // output akan langsung ip address dari twitter

// https://nodejs.org/api/dns.html 