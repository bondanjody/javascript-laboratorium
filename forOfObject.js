const daftarObject = [
    {
        id: 'e1', title: 'New Phone', amount: 34, date: new Date(2021, 3, 1)
    },
    {
        id: 'e2', title: 'New TV', amount: 1000, date: new Date(2021, 3, 8)
    },
    {
        id: 'e3', title: 'New Cigarette', amount: 2, date: new Date(2021, 2, 3)
    },
    {
        id: 'e4', title: 'Apartment', amount: 100, date: new Date(2021, 2, 7)
    },
];

const dataBulanan = [
    {label:'Jan' , value:0},
    {label:'Feb' , value:0},
    {label:'Mar' , value:0},
    {label:'Apr' , value:0},
    {label:'May' , value:0},
    {label:'Jun' , value:0},
    {label:'Jul' , value:0},
    {label:'Aug' , value:0},
    {label:'Sep' , value:0},
    {label:'Oct' , value:0},
    {label:'Nov' , value:0},
    {label:'Dec' , value:0}
];

for (const expense of daftarObject) {
    const expenseMonth = expense.date.getMonth();
    dataBulanan[expenseMonth].value += expense.amount;
}

console.log(dataBulanan);
