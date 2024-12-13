import './style.css'

let rollHistory = []
function rollDice1(){
let random = Math.floor(Math.random() * 6) + 1;
console.log(random);
rollHistory.push(random)
}
function rollDice2(){
  let random2 = Math.floor(Math.random() * 6) + 1;
  console.log(random2);
  rollHistory.push(random2)
}
rollDice1()
rollDice1()
console.log(rollHistory)
