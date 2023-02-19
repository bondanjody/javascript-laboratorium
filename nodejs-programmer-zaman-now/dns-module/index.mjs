// menggunakan async dns callback version

import dns from 'dns'

const buatCallback = (error, ip) => {
    return ip
}

const dnsFacebook = dns.lookup("www.facebook.com",buatCallback)
console.log(dnsFacebook);