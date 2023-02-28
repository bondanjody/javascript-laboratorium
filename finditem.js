const arr1 = [
    {
        id:1,
        nama: "Bondan",
    },
    {
        id:2,
        nama: "Ajeng",
    },
    {
        id: 3,
        nama: "Fahri"
    }
];

const dataBaru = {
    id: 3,
    nama: "Suroto"
};

const existingData = arr1.findIndex(data => data.id === dataBaru.id);

console.log(existingData);
