import './style.css'

const DOMSelectors = {
  containerBox: document.getElementById("container"),
};

let a=[];
let b=[];

function rollDice1P1(){
let random = Math.floor(Math.random() * 6) + 1;
a.push(random)
console.log(a)
}
function rollDice2(){
  let random2 = Math.floor(Math.random() * 6) + 1;
  a.push(random2)
}
console.log(a)


function rollDice1P2(){
let random = Math.floor(Math.random() * 6) + 1;
b.push(random)
console.log(b)
}



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
