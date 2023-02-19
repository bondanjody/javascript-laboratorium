// TITLE : menggunakan Object.create() method
// konsep ini "mirip" atau tidak sepenuhnya sama dengan inheritance pada pemrograman berorientasi objek


// membuat object yang khusus berisi method
const superheroEquipment = {
    superShoes : function(){
        // mengubah nilai dari property power atau speed
        this.speed += 50;
        console.log(this.name + ' menggunakan equipment Super Shoes.');
    },
    silverPlate : function(){
        this.speed += 40;
        console.log(this.name + ' menggunakan equipment Silver Plate.');
    },
    handSmash : function(){
        this.power += 90;
        console.log(this.name + ' menggunakan equipment Hand Smash.');
    },
    brockenFinger : function(){
        this.power += 60;
        console.log(this.name + ' menggunakan equipment Brocken Finger.');
    },
}

// membuat fungsi untuk menampung objek
function DataSuperhero(name, nationality, power, speed){
    // menghubungkan objek data dengan parent nya (dalam hal ini adalah objek superheroEquipment)
    let data = Object.create(superheroEquipment);
    data.name = name;
    data.nationality = nationality;
    data.power = power;
    data.speed = speed;
    return data;
}

// membuat object pertama
let finnRoger = DataSuperhero('Finn Roger', 'Irish',0,0);
// akses object di atas melalui console dengan mengetikkan finnRoger
console.log(finnRoger.speed); // nilai speed finnRoger sebelum memanggil method superShoes()
console.log(finnRoger.superShoes()); // memanggil method superShoes()
console.log(finnRoger.speed); // nilai speed finnRoger sesudah memanggil method superShoes

// membuat object kedua
let gabiReno = DataSuperhero('Gabi Reno', 'Brazillian',0,0);