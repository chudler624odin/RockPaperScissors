
//function game(){

//}
//user selection
var userSelection = prompt("Select: Rock, Paper, Scissors").toLowerCase().toString()



//computer selection
let choices =["rock", "paper", "scissors"]
var randomIndex = Math.floor(Math.random() * choices.length); 
var computerSelection = choices[randomIndex];

//initialize counter
let userWins=0;
let computerWins=0;



//game rules

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




//console.log(userSelection)
//console.log(computerSelection)






function rockPaperScissors(){



    let rock
    let paper
    let scissors

    rock > scissors;
    scissors > paper;
    paper > rock;
}