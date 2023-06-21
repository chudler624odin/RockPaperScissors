//initialize counter
let userWins = 0;
let computerWins = 0;
let gamesPlayed = 0;

//user's selection
function getUserSelection() {
    var userSelection = prompt("Select: Rock, Paper, Scissors").toLowerCase();

    return userSelection;
}

//computer's selection
function getComputerSelection() {
    let choices = ["rock", "paper", "scissors"]
    var randomIndex = Math.floor(Math.random() * choices.length);
    var computerSelection = choices[randomIndex];

    return computerSelection;

}

//game rules
function gamePlay(userSelection, computerSelection){

    if(userSelection == "rock" && computerSelection == "scissors"){
    
        console.log(`You chose ${userSelection}, the Computer chose ${computerSelection}`); userWins++; console.log("User is Victorious!"); console.log(`User Wins: ${userWins} Computer Wins: ${computerWins}`)
    }
    else if(userSelection == "rock" && computerSelection == "paper"){
        console.log(`You chose ${userSelection}, the Computer chose ${computerSelection}`);computerWins++; console.log("computer wins this one"); console.log(`User Wins: ${userWins} Computer Wins: ${computerWins}`)
    }
    else if(userSelection == "paper" && computerSelection == "rock"){
        console.log(`You chose ${userSelection}, the Computer chose ${computerSelection}`);userWins++; console.log("User is Victorious!"); console.log(`User Wins: ${userWins} Computer Wins: ${computerWins}`)
    }
    else if(userSelection == "paper" && computerSelection == "scissors"){
        console.log(`You chose ${userSelection}, the Computer chose ${computerSelection}`);computerWins++; console.log("computer wins this one"); console.log(`User Wins: ${userWins} Computer Wins: ${computerWins}`)
    }
    else if(userSelection == "scissors" && computerSelection == "paper"){
        console.log(`You chose ${userSelection}, the Computer chose ${computerSelection}`);userWins++; console.log("User is Victorious!"); console.log(`User Wins: ${userWins} Computer Wins: ${computerWins}`)
    }
    else if(userSelection == "scissors" && computerSelection == "rock"){
        console.log(`You chose ${userSelection}, the Computer chose ${computerSelection}`);computerWins++; console.log("computer wins this one"); console.log(`User Wins: ${userWins} Computer Wins: ${computerWins}`)
    }
    else{
        console.log(`You chose ${userSelection}, the Computer chose ${computerSelection}`);console.log("Tie! No winner here")
    }

}       

function playRound(){
    userSelection = getUserSelection();
    computerSelection = getComputerSelection();
    gamePlay(userSelection, computerSelection);
}

function playGame(){

    //play x amount of rounts
    for(gamesPlayed=0; gamesPlayed < 5; gamesPlayed++){
        console.log("Round " + (gamesPlayed + 1) + " Start");
        playRound();
    }

    //display end game msg
    let endGameMsg = '';
    if(userWins > computerWins)
    {
        endGameMsg = `User Wins!`;
    } else {
        endGameMsg = 'Computer Wins!';
    }

    console.log(endGameMsg);
}

playGame();
    
    
    

