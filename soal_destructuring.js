const footballPlayers = [
    "Ederson",
    "De Bruyne",
    "Bernardo",
    "Gundogan"
];
const [brazil, belgium, portugal, germany] = footballPlayers;
console.log(`${belgium} vs ${portugal}`);

console.log("==================================");

const bondanTower = {
    lantai_1 : ['lamborghini', 'ferrari', 'bmw'],
    lantai_2 : ['harley davidson', 'ducati', 'hayabusa'],
    lantai_3 : {
        1 : ['apple', 'orange', 'grape'],
        2 : ['banana', 'strawberry', 'blueberry']
    },
    lantai_4 : ['library', 'laboratory'],
    lantai_5 : ['office', 'bedroom']
};
const {lantai_1, lantai_2,...noImportant} = bondanTower;
for (x of noImportant.lantai_3[1]){
    console.log(`I like ${x}`);
}
// console.log(noImportant.lantai_3[1][1]);

console.log("==================================");



console.log("==================================");

const players = {
    goalKeeper : ['ederson','steffen','carson'],
    defender : ['laporte', 'dias', 'stones', 'walker', 'cancelo', 'zinchenko'],
    midfielder : ['de bruyne', 'fernandinho', 'bernardo', 'rodri', 'gundogan', 'palmer'],
    attacker : ['sterling', 'grealish', 'jesus', 'foden', 'torres']
};
const {goalKeeper, defender, ...penting} = players;
console.log(goalKeeper);