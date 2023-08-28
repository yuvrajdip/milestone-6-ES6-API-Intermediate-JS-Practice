
// finds first element which matches the condition
const playerAge = [60,70,75, 85 ]

const selectedPlayers = playerAge.find((player)=> player%5===0 )
console.log(selectedPlayers);