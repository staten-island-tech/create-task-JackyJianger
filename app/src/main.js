import './style.css'

const DOMSelectors = {
  containerBox: document.getElementById("container"),
};

let rollHistory1 = []
function rollDice1P1(){
let random = Math.floor(Math.random() * 6) + 1;
console.log(random);
rollHistory1.push(random)
console.log(rollHistory1)
}
function rollDice2(){
  let random2 = Math.floor(Math.random() * 6) + 1;
  console.log(random2);
  rollHistory1.push(random2)
}
console.log(rollHistory1)


let rollHistory2 = []
function rollDice1P2(){
let random = Math.floor(Math.random() * 6) + 1;
console.log(random);
rollHistory2.push(random)
console.log(rollHistory2)
}


let a=[1,2,5];
let b=[1,2,4];
function compareDiceSums(a){
  let asum = 0
  let bsum = 0
  for (let i=0; i<a.length; i++){
    asum += a[i]
  console.log(asum)
  }
  for (let i=0; i<b.length; i++){
    bsum += b[i]
  console.log(bsum)
  }
  if (asum>bsum){
    console.log('A is the winner')
  } else if (asum=bsum){
    console.log('It is a tie')
  } else{
    console.log('B is the winner')
  }
}

compareDiceSums(a);

DOMSelectors.containerBox.addEventListener("click", async function (event) {
if(event.target && event.target.classList.contains("roll-1")){
  rollDice1P1()
}
});
