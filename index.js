let min =1;
let max=6;
let num;

const myButton=document.getElementById("myButton");
const dice=document.getElementById("dice");

myButton.onclick=function(){

  num = Math.floor(Math.random()*6)+1;
  dice.textContent=num;
}
