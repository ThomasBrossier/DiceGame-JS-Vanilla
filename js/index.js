//creation des variables representant des éléments du DOM
let newgamebutton = document.querySelector(".newgame");
let playButtons = document.getElementsByClassName("playButtons")
let [scoreP1, scoreP2] = document.getElementsByClassName("played");
let [currentP1, currentP2] = document.getElementsByClassName("current")
//creation des Events
newgamebutton.addEventListener('click',()=>{
    newgamebutton.style.display = "none";
    for (const button of playButtons) {
            button.style.display = "block"
    }
    scoreP1.innerText = 0;
    scoreP2.innerText = 0;
    currentP1.innerText = 0;
    currentP1.innerText = 0;
    newgame();
})