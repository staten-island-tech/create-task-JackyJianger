import './style.css'

const DOMSelectors = {
  containerBox: document.getElementById("container"),
  containerBox2: document.getElementById("container2"),
};

let a=[];
let b=[];

function rollDice1P1(){
let random = Math.floor(Math.random() * 6) + 1;
a.push(random)
console.log(a)
}
function rollDice2P1(){
  let random2 = Math.floor(Math.random() * 6) + 1;
  let random3 = Math.floor(Math.random() * 6) + 1;
  a.push(random2)
  a.push(random3)
  console.log(a)
}

function rollDice3P1(){
  let random1 = Math.floor(Math.random() * 6) + 1;
  let random2 = Math.floor(Math.random() * 6) + 1;
  let random3 = Math.floor(Math.random() * 6) + 1;
  a.push(random1)
  a.push(random2)
  a.push(random3)
  console.log(a)
}

function rollDice1P2(){
let random = Math.floor(Math.random() * 6) + 1;
b.push(random)
console.log(b)
}

function rollDice2P2(){
  let random = Math.floor(Math.random() * 6) + 1;
  let random2 = Math.floor(Math.random() * 6) + 1;
  b.push(random)
  b.push(random2)
  console.log(b)
  }
  
function rollDice3P2(){
  let random = Math.floor(Math.random() * 6) + 1;
  let random2 = Math.floor(Math.random() * 6) + 1;
  let random3 = Math.floor(Math.random() * 6) + 1;
  b.push(random)
  b.push(random2)
  b.push(random3)
  console.log(b)
  }
  
function compareDiceSums(){
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
  } if (asum===bsum){
    console.log('It is a tie')
  } if(asum<bsum){
    console.log('B is the winner')
  }
}


DOMSelectors.containerBox.addEventListener("click", async function (event) {
if(event.target && event.target.classList.contains("roll-1")){
  rollDice1P1()
}
});

DOMSelectors.containerBox.addEventListener("click", async function (event) {
  if(event.target && event.target.classList.contains("roll-2")){
    rollDice2P1()
  }
  });

DOMSelectors.containerBox.addEventListener("click", async function (event) {
  if(event.target && event.target.classList.contains("roll-3")){
    rollDice3P1()
  }
  });

DOMSelectors.containerBox2.addEventListener("click", async function (event) {
  if(event.target && event.target.classList.contains("roll-1-2")){
    rollDice1P2()
  }
  });
    
DOMSelectors.containerBox2.addEventListener("click", async function (event) {
  if(event.target && event.target.classList.contains("roll-2-2")){
    rollDice2P2()
  }
  });

DOMSelectors.containerBox2.addEventListener("click", async function (event) {
  if(event.target && event.target.classList.contains("roll-3-2")){
    rollDice3P2()
  }
  });


DOMSelectors.containerBox2.addEventListener("click", async function (event) {
  if(event.target && event.target.classList.contains("comparesum")){
    compareDiceSums()
  }
  });
