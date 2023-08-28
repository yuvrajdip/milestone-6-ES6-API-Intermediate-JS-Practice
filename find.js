
// finds first element which matches the condition
// find doesn't return any array, it returns a specific number or something alone value
const playerAge = [60,70,75, 85 ]

const selectedPlayers = playerAge.find((player)=> player%5===0 )
console.log(selectedPlayers);
console.log(typeof selectedPlayers);