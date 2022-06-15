// Fonction qui retourne un nombre aléatoire de 1 à 6
const rollDice = ()=>{
    const nombre = Math.trunc((Math.random()*6) + 1);
    return nombre
}
const switchPlayers = (currentUser,p1,p2)=>{
    if(currentUser){
        p1.style.color = "red";
        p1.style.border = "1px solid red";
        p2.style.color = "black";
        p2.style.border = "none";
    }else{
        p2.style.color = "red";
        p2.style.border = "1px solid red";
        p1.style.color = "black";
        p1.style.border = "none";
    }
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

