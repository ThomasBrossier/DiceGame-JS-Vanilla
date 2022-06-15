// Fonction qui retourne un nombre aléatoire de 1 à 6
const rollDice = ()=>{
    const nombre = Math.trunc((Math.random()*6) + 1);
    return nombre
}

const displayModal = ()=>{
    let modalwrapper = document.querySelector(".wrapper-modal");
    if(modalwrapper.style.display === "none"){
        modalwrapper.style.display = "flex";
    }else{
        modalwrapper.style.display = "none";
    }
}

const switchButtons = (activeGame, newgamebutton)=>{
    const playButtons = document.getElementsByClassName("playButtons");
    if(activeGame){
        newgamebutton.style.display = "none";
        for (const button of playButtons) {
            button.style.display = "block"
        }
    }else{
        newgamebutton.style.display = "block";
        for (const button of playButtons) {
            button.style.display = "none"
        }
    }
}
const initPlayers = ()=>{
let player1 = prompt("Veuillez saisir le nom du joueur 1");
let player2 = prompt("Veuillez saisir le nom du joueur 2");

if(player1 === "" || player1 === null){
    player1 = "Joueur1";
}
if(player2 === "" || player2 === null){
    player2 = "Joueur2";
}
  return  [
            {name:player1,
             total:0},
            {name:player2,
            total:0}
        ]

}

