
    let humanWins;
    let computerWins;
    let options = ["rock", "paper", "scissors"];
    let humanScore = 0;
    let computerScore = 0;
    let results = document.querySelector('.results');
    let score = document.querySelector('.running-score');

    function rules(a,b){
        a = a.toLowerCase();
        b = b.toLowerCase();
        if(!(options.includes(b))){
            alert("Not a valid input");
            round();
        }
        else if(a===b){
            let outcome = document.createElement("p");
            outcome.textContent= "It's a draw!";
            results.appendChild(outcome);
            console.log(score);
            score.textContent = `"Human:" ${humanScore} "Computer:" ${computerScore}`;
        }
        else if ((a==="rock" && b==="scissors") || (a==="paper" && b==="rock") || (a==="scissors" && b==="paper") ) {
            let outcome = document.createElement("p");
            outcome.textContent= "Computer Wins!";
            results.appendChild(outcome);
            computerScore++;
            if(computerScore === 5){
                score.textContent = `"Human:" ${humanScore} "Computer:" ${computerScore} "Computer Wins!"`;
            }
            else{
            console.log(score);
            score.textContent = `"Human:" ${humanScore} "Computer:" ${computerScore}`;
            }

        }
        else {
            let outcome = document.createElement("p");
            outcome.textContent= "Human Wins!";
            results.appendChild(outcome);
            humanScore++;
            if(humanScore === 5){
            score.textContent = `"Human:" ${humanScore} "Computer:" ${computerScore} "Computer Wins!"`;
            }
            else{
            console.log(score);
            score.textContent = `"Human:" ${humanScore} "Computer:" ${computerScore}`;
            }
        
        }
    }
  
    const rockButton = document.querySelector(".rock");
    rockButton.addEventListener("click", () => setChoiceAndStartRound("rock"));
    
    const scissorsButton = document.querySelector(".scissors");
    scissorsButton.addEventListener("click", () => setChoiceAndStartRound("scissors"));
    
    const paperButton = document.querySelector(".paper");
    paperButton.addEventListener("click", () => setChoiceAndStartRound("paper"));

    function setChoiceAndStartRound(buttonId){
        round(buttonId);
    }

    function round(choice){
        let humanGuess=choice;
        let computerGuess;
        function computerSelectionNumber(){
            let selectionNumber = Math.floor(Math.random()*3);
            return selectionNumber;
        }
        computerGuess= options[computerSelectionNumber()];
        console.log(`"the human chose: " ${humanGuess} " and the computer chose: " ${computerGuess}` );
        rules(computerGuess,humanGuess);
        }

