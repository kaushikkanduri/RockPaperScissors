let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const uscore = document.querySelector("#user-score");
const cscore = document.querySelector("#comp-score");


const getcompChoice = ()=>{
    let options = ["rock","paper","scissors"];
    let index = Math.floor(Math.random()*3);
    return options[index];
};

const gameDraw = () =>{
    msg.innerText = "Game was draw. Play again."
    msg.style.backgroundColor = "rgb(152, 141, 71)";
};

const showWinner = (userWin) =>{
    if(userWin){
        userScore++;
        uscore.innerText = userScore;
        msg.innerText = "You Won!";
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        cscore.innerText = compScore;
        msg.innerText = "You lose."
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice)=>{
    
    let compChoice = getcompChoice(); 

    if(userChoice === compChoice){
        gameDraw();
    }
    else{

        let userWin = true;
        if(userChoice === "rock"){
            //paper,scis
            userWin = compChoice === "paper"? false:true;
        }
        else if(userChoice === "paper"){
            //rock,scis
            userWin = compChoice === "scissors"? false:true;
        }
        else{
            //rock,paper
            userWin = compChoice === "rock"? false:true;

        }
        showWinner(userWin);
    }
    
};


choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});