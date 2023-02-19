
const filling = (...v) => {
    return v.map(value => value**2)
}
console.log(filling(3,1,2,12).map(value => value**2));