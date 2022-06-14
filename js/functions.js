function newgame(){
let player1 = {}
let player2 = {}
player1.name = prompt("Veuillez saisir le nom du joueur 1");
if(player1.name === ""){
    player1.name = "Joueur1";
}
player2.name = prompt("Veuillez saisir le nom du joueur 2");
if(player2.name === ""){
    player2.name = "Joueur2";
}
namePlayer1 = document.getElementById("player1");
namePlayer2 = document.getElementById("player2");
namePlayer1.innerText = player1.name;
namePlayer2.innerText = player2.name
}