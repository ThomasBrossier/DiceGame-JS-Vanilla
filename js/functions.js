// Function that init players names by asking the user
const initPlayers = ()=>{
    let player1 = prompt("Veuillez saisir le nom du joueur 1").trim().replace(/</g, "&lt;").replace(/>/g, "&gt;");
    let player2 = prompt("Veuillez saisir le nom du joueur 2").trim().replace(/</g, "&lt;").replace(/>/g, "&gt;");
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

// Function wich return a random number between 1 to 6 
const rollDice = ()=>{
    const nombre = Math.trunc((Math.random()*6) + 1);
    return nombre
}

// Function that switch active player style 
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

// Function that switch active game buttons  
const switchButtons = (activeGame, newGameButton, quitGameButton)=>{
    if(activeGame){
        newGameButton.style.display = "none";
        quitGameButton.style.display = "block"
    }else{
        newGameButton.style.display = "block";
        quitGameButton.style.display = "none"
    }
}
// Function that is showing or hiding modal 
const displayModal = ()=>{
    let modalwrapper = document.querySelector(".wrapper-modal");
    if(modalwrapper.style.display === "none"){
        modalwrapper.style.display = "flex";
    }else{
        modalwrapper.style.display = "none";
    }
}


