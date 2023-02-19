// TITLE : menggunakan pengkondisian pada template literal

// membuat object
const motor = {
    nama : 'Satria FU 150',
    pabrikan : 'Suzuki',
    tahun : 2012,
    pemilik : 'Audia Ananda'
};

// membuat variabel template literal
const res = `<div class='output'>
    <ul>
        <li>${motor.nama}</li>
        <li>${motor.pabrikan}</li>
        <li>${motor.tahun}</li>
        ${motor.pemilik ? `<li>${motor.pemilik}</li>`:""}
    </ul>
</div>
`;

// bayangkan jika properti pemilik kadang tidak tersedia. maka jika kita hanya menuliskan <li>${motor.pemilik} maka akan tampil undefined 
// kode paling bawah ini berfungsi untuk mengecek apabila terdapat property pemilik pada objek motor, maka nilai property tersebut akan ditampilkan. dan apabila tidak ada property pemilik maka hanya akan menampilkan string kosong

document.body.innerHTML = res;