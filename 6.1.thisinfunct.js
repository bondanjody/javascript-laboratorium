let luar = () => {console.log(this)};
luar();

const material = {
    nama : "Mercury",
    suhu : () => {console.log(this)}
}
material.suhu();

// Output : baik this yang berada di dalam ataupun diluar obyek akan menampilkan / merujuk elemen yang sama (window)
