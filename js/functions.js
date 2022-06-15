// Fonction qui retourne un nombre aléatoire de 1 à 6
const initPlayers = ()=>{
    let player1 = prompt("Veuillez saisir le nom du joueur 1").trim().replace(/</g, "&lt;").replace(/>/g, "&gt;");
    let player2 = prompt("Veuillez saisir le nom du joueur 2").trim().replace(/</g, "&lt;").replace(/>/g, "&gt;");;
    console.log(player1)
    if(player1 === "" || player1 === null || player1.length > 20){
        player1 = "Joueur1";
    }
    if(player2 === "" || player2 === null || player1.length > 20){
        player2 = "Joueur2";
    }
      return  [
                {name:player1,
                 total:0},
                {name:player2,
                total:0}
            ] 
    }
   
const rollDice = ()=>{
    const nombre = Math.trunc((Math.random()*6) + 1);
    return nombre
}


const switchPlayers = (currentUser,circle1,circle2,body)=>{
    if(currentUser){
        circle1.style.display = "block";
        circle2.style.display = "none";
        body.style.background = "linear-gradient(to right, #F6F6F6 0% 50%, white 50% 0%)";
    }else{
        circle1.style.display = "none";
        circle2.style.display = "block";
        body.style.background = "linear-gradient(to left, #F6F6F6 0% 50%, white 50% 0%)";
    }
}

const switchButtons = (activeGame, newGameButton, quitGameButton)=>{
    if(activeGame){
        newGameButton.style.display = "none";
        quitGameButton.style.display = "block"
    }else{
        newGameButton.style.display = "block";
        quitGameButton.style.display = "none"
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


