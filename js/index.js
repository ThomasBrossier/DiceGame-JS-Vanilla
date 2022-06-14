//creation des variables globales
let currentUser = true;
let currentRound = 0;
let globalPlayer1 = 0;
let globalPlayer2 = 0 ;
//creation des variables representant des éléments du DOM

let newgamebutton = document.querySelector(".newgame");
let img = document.getElementById("dice");
let [scoreP1, scoreP2] = document.getElementsByClassName("played");
let [currentP1, currentP2] = document.getElementsByClassName("current");
let playButtons = document.getElementsByClassName("playButtons")
let played = document.getElementsByClassName("played")
let playButton = document.getElementById("play")
//creation des Events
newgamebutton.addEventListener('click',()=>{
    newgamebutton.style.display = "none";
    for (const button of playButtons) {
            button.style.display = "block"
    }
    scoreP1.innerText = 0;
    scoreP2.innerText = 0;
    currentP1.innerText = 0;
    currentP2.innerText = 0;
    //initplayers();
})

playButton.addEventListener('click',()=>{
    let dice = rollDice()
    currentRound = 0;
    img.src = "./assets/images/de-"+ dice +".gif" ;
    if(currentUser){
        scoreP2.innerHTML = 0
        scoreP1.innerHTML = dice;
        currentRound = dice
    }else{
        scoreP1.innerHTML = 0
        scoreP2.innerHTML = dice;
    }
    if(dice === 1){
        currentUser = !currentUser;
    }
})