//TITLE = konteks 'this' pada object literal

//membuat object
var objek = {};
objek.hello = function(){

    //'this' berada di dalam function, dimana function nya berada di dalam objek
    console.log(this);
    console.log('Hello');
}
objek.hello();

//Kesimpulan : 'this' yang berada di dalam function / object akan mengembalikan atau menunjuk pada
//objek tersebut