const getPlayer = () => {
    return {
        name:"Erling Haaland",
        nationality:"Norway"
    }
}

const {playerName, playerNationality} = getPlayer()
console.log(playerName, playerNationality);
