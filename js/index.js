//creation des variables globales
let currentUser = true;
let players;
let currentRound = 0;
let finalScore = 100;
let activeGame = false;
let redColor = "#dc3545";

//creation des variables representant des éléments du DOM
const body = document.getElementById("body");
const newGameButton = document.querySelector("#newgame");
const quitGameButton = document.querySelector("#quitgame")
const winner = document.getElementById("winner");
const closeButton = document.getElementById("closeButton");
const img = document.getElementById("dice");
const [scoreP1, scoreP2] = document.getElementsByClassName("total");
const [currentP1, currentP2] = document.getElementsByClassName("current");
const[player1Name,player2Name] = document.getElementsByClassName("name")
const [circle1 , circle2] = document.getElementsByClassName("circle")
const rollDiceButton = document.getElementById("play")
const holdButton = document.getElementById("hold")
rollDiceButton.disabled = true;
holdButton.disabled = true;

//creation des Events
newGameButton.addEventListener('click',()=>{
    finalScore = prompt("Veuillez saisir le nombre de point à atteindre. Le score finale doit être un nombre compris entre 20 et 500.").trim().replace(/</g, "&lt;").replace(/>/g, "&gt;");
    if(!Number.isInteger(finalScore) || finalScore > 500 || finalScore < 20 ){
        finalScore = 100;
    }
    players = initPlayers()
    rollDiceButton.disabled = false;
    holdButton.disabled = false;
    player1Name.innerHTML = players[0].name
    player2Name.innerHTML =  players[1].name
    switchPlayers(currentUser,circle1,circle2,body)
    activeGame = !activeGame;
    switchButtons(activeGame,newGameButton, quitGameButton);
    scoreP1.innerText = 0;
    scoreP2.innerText = 0;
    currentP1.innerText = 0;
    currentP2.innerText = 0;
})
quitGameButton.addEventListener('click',()=>{
    location.reload();
})
closeButton.addEventListener('click',()=>{
    location.reload();
})

rollDiceButton.addEventListener('click',()=>{
    let dice = rollDice()
    img.src = "./assets/images/de-"+ dice +".png" ;
    currentRound = currentRound + dice;
    if(currentUser){
        currentP2.innerHTML = 0
        currentP1.innerHTML = currentRound;
    }else{
        currentP1.innerHTML = 0
        currentP2.innerHTML = currentRound;
    }
    console.log(currentRound)
    if(dice === 1){
        currentUser = !currentUser;
        switchPlayers(currentUser,circle1,circle2,body)
        currentRound = 0;
    }
})

holdButton.addEventListener('click',()=>{
    if (currentRound === 0){
        alert('Lancez le dé avant de garder votre score !');
        return
    }
    if(currentUser){
        players[0].total += currentRound;
        if(players[0].total  >= finalScore){
            winner.innerHTML = players[0].name 
            displayModal();
            return
        }
        scoreP1.innerHTML = players[0].total;
        currentP1.innerHTML =  0 ;
    }else{
        players[1].total += currentRound;
        if( players[1].total >= finalScore){
            winner.innerHTML = players[1].name 
            displayModal();
            return
        }
        scoreP2.innerHTML = players[1].total;
        currentP2.innerHTML =  0;
    }
    currentUser = !currentUser;
    switchPlayers(currentUser,circle1,circle2,body)
    currentRound = 0;
})