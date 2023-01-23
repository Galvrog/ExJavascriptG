// you can write js here
console.log('exo-3');


var myPlayerInput = prompt("Your choice ( rock, paper, scissors) ?");
myPlayerInput.toLowerCase();

function getPlayerChoice(playerInput){

    playerInput=myPlayerInput;

    if(playerInput == 'rock'){   // || (playerInput = 'paper') || (playerInput = 'scissor')){
        playerInput = 0;
        return playerInput;
    }else if(playerInput == 'paper'){
        playerInput = 1;
        return playerInput;
    }else if(playerInput == 'scissor'){
        playerInput = 2;
        return playerInput;
    }else{
        console.log ("Error");
    }
}


function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}


var myPlayerChoice = getPlayerChoice();
var myComputerChoice = getComputerChoice();



console.log(myPlayerChoice);
console.log(myComputerChoice);


function findWinner(PlayerChoice, ComputerChoice){

PlayerChoice=myPlayerChoice;
ComputerChoice=myComputerChoice;


    if(PlayerChoice == ComputerChoice){
        return ('Tied');
    }
    if((PlayerChoice == 0) && (ComputerChoice ==1) || (PlayerChoice ==1) && (ComputerChoice ==2) || (PlayerChoice ==2) && (ComputerChoice ==0)){
        return ('Lost');
    }
    if((ComputerChoice == 0) && (PlayerChoice==1) || (ComputerChoice == 1) && (PlayerChoice==2) || (ComputerChoice==1) && (PlayerChoice==0)){
        return('Won');
    }
}

console.log(findWinner());
/*
function playGame(){
    var Uchoice = findWinner();
    console.log(Uchoice);
}

//playGame();


/*
if (getComputerChoice = 0){
    console.log('rock')
}
else if (getComputerChoice = 1){
    console.log('paper')
}else{
    console.log('scissor')
}
*/