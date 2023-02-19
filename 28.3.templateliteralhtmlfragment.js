// TITLE : HTML Fragment pada template literal

// kita dapat menyimpan tag HTML pada template literal

// membuat object
const dataMotor = {
    nama : 'Satria FU 150',
    pabrikan : 'Suzuki',
    tahun : 2012
};

// membuat variabel menampung template literal
const el = `<div class='data-motor'>
    <div class='nama-motor'>${dataMotor.nama}</div>
    <div class='tahun-motor'>${dataMotor.tahun}</div>
</div>`;

// setelah itu variabel el dapat ditampilkan ke dalam dokumen HTML melalui innerHTML atau juga dapat ditampilkan di console
console.log(el);

// atau tampilkan ke dalam DOM
document.body.innerHTML = el;

