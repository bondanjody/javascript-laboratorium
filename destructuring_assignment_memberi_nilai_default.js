// TITLE : memberi nilai default untuk variabel

// contoh kode program 1
// membuat objek 
const clubData = {
    nama : 'Manchester City',
    owner : 'Sheikh Manshour',
    est : 1894,
}

// melakukan destructuring
const {nama : n, owner : o, est : e, coach = 'Pep Guardiola'} = clubData;
// seperti diketahui bahwa pada objek 'clubData' tidak ada property coach. maka pada kode di atas kita tambahkan nilai default untuk property coach
console.log(n);
console.log(coach);
// output :
// Manchester City
// Pep Guardiola


// contoh kode program 2
// program jika objek memiliki properti yang dimaksud tetapi kita memberi nilai default pada properti tersebut
// membuat objek
const planetData = {
    planetName : 'Earth',
    no : 3,
    population : 'Humans'
};

// membuat destructuring
const {planetName, no, population = 'Titan'} = planetData;
// seperti diketahui pada kode di atas objek planetData memiliki property 'population'. Lalu saat kita membuat destructuring kita menambahkan nilai default untuk property 'population'. Maka yang akan tampil adalah nilai dari property 'population' PADA OBJEK TERSEBUT dan BUKAN NILAI DEFAULT YANG KITA BERIKAN
console.log(planetName);
console.log(population);


// pemberian nilai default pada array
const foods = ["Nasi Goreng"]

const [myFood, herFood = "Mie Ayam"] = foods
console.log(herFood)
// NOTE : jika kita mengakses elemen array yang tidak ada dan tidak diberi nilai default maka akan tampil "undefined"