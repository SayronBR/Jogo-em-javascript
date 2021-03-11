
'use strict';
/*
document.querySelector('.message').textContent=' ✔✨Correct Number!'

document.querySelector('.number').textContent='13'
document.querySelector('.score').textContent='10'
document.querySelector('.guess').value=10

*/
let SecretNumber = Math.floor(20*Math.random())+1;
let score =  20;
let highScore=0

document.querySelector('.check').addEventListener
('click',function (){
const guess = Number(document.querySelector('.guess').value) 
//sem numero
if(!guess){
  document.querySelector('.message').textContent='No Number 📛'

  // quando o jogador ganha 
}else if (guess === SecretNumber) {
document.querySelector('.message').textContent='✨Correct✨'
document.querySelector('.number').textContent=SecretNumber
document.querySelector('body').style.backgroundColor='#54e346'
document.querySelector('.number').style.width='30rem'
document.querySelector('.number').style.fontSize='10rem'
if(score > highScore){
  highScore=score
  document.querySelector('.highscore').textContent=highScore
}
  //quando numero é alto
}else if (guess !== SecretNumber){
  if(score > 1){
    document.querySelector('.message').textContent= guess > SecretNumber ?'📈To High' : '📉To Low';
    score--;
    document.querySelector('.score').textContent=score;
  }
  //quando ele perde
  else{
    document.querySelector('.message').textContent='You Lost 😥';
    document.querySelector('.score').textContent=0;
  }
}
/*
else if (guess > SecretNumber){
  
 //quando numero é baixo
}else if (guess < SecretNumber){
  if(score > 1){
    document.querySelector('.message').textContent='📉To Low';
    score--;
    document.querySelector('.score').textContent=score;
  }
  else{
    document.querySelector('.message').textContent='You Lost 😥';
    document.querySelector('.score').textContent=0;
  }
}
}
)*/

document.querySelector('.again').addEventListener
('click',function (){
  score=20;
  SecretNumber = Math.floor(20*Math.random())+1;

  document.querySelector('.score').textContent=score;
  document.querySelector('.number').textContent='?';
  document.querySelector('body').style.backgroundColor='#222';
  document.querySelector('.number').style.width='15rem'
document.querySelector('.number').style.fontSize='6rem'
  document.querySelector('.message').textContent='Start guessing...'
  document.querySelector('.guess').value='';
 
}
)})