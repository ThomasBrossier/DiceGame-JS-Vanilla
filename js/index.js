//creation des variables globales
let currentUser = true;
let players;
let currentRound = 0;
let finalScore = 10;
let activeGame = false;

//creation des variables representant des éléments du DOM
const newgamebutton = document.querySelector(".newgame");
const winner = document.getElementById("winner");
const closeButton = document.getElementById("closeButton");
const img = document.getElementById("dice");
const [scoreP1, scoreP2] = document.getElementsByClassName("played");
const [currentP1, currentP2] = document.getElementsByClassName("current");
const [player1Name , player2Name] = document.getElementsByClassName("name")
const played = document.getElementsByClassName("played")
const playButton = document.getElementById("play")
const holdButton = document.getElementById("hold")

//creation des Events
newgamebutton.addEventListener('click',()=>{
    players = initPlayers();
    player1Name.innerHTML = players[0].name
    player2Name.innerHTML =  players[1].name
    activeGame = !activeGame;
    switchButtons(activeGame,newgamebutton);
    scoreP1.innerText = 0;
    scoreP2.innerText = 0;
    currentP1.innerText = 0;
    currentP2.innerText = 0;
})

closeButton.addEventListener('click',()=>{
    activeGame = !activeGame;
    switchButtons(activeGame,newgamebutton)
    displayModal();
})

playButton.addEventListener('click',()=>{
    let dice = rollDice()
    currentRound = 0;
    img.src = "./assets/images/de-"+ dice +".gif" ;
    if(currentUser){
        scoreP2.innerHTML = 0
        scoreP1.innerHTML = dice;
    }else{
        scoreP1.innerHTML = 0
        scoreP2.innerHTML = dice;
    }
    currentRound = dice
    if(dice === 1){
        currentUser = !currentUser;
        currentRound = 0;
    }
})

holdButton.addEventListener('click',()=>{
    if (currentRound === 0){
        alert('Lancez le dé avant d\'utiliser ce boutton')
        return
    }
    if(currentUser){
        players[0].total += currentRound;
        if(players[0].total  >= finalScore){
            winner.innerHTML = players[0].name 
            displayModal();
        }
        scoreP1.innerHTML = 0;
        currentP1.innerHTML =  players[0].total;
    }else{
        players[1].total += currentRound;
        if( players[1].total >= finalScore){
            winner.innerHTML = players[1].name 
            displayModal();
        }
        scoreP2.innerHTML = 0;
        currentP2.innerHTML =  players[1].total;
    }
    currentUser = !currentUser;
    currentRound = 0;
})