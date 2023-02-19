//TITLE = konteks 'this' pada constructor

//membuat function
function Hello(){
    console.log(this);
    console.log("Hello World!");
}

var halo1 = new Hello();

//Kesimpulan : 'this' yang terletak pada object yang dibuat dengan constructor 
//akan mengembalikan atau menunjuk pada object tersebut