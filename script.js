
    let humanWins;
    let computerWins;
    let options = ["rock", "paper", "scissors"];
    let humanScore = 0;
    let computerScore = 0;

    function rules(a,b){
        a = a.toLowerCase();
        b = b.toLowerCase(  );
        if(!(options.includes(b))){
            alert("Not a valid input");
            round();
        }
        else if(a===b){
            console.log("It's a draw!");
        }
        else if ((a==="rock" && b==="scissors") || (a==="paper" && b==="rock") || (a==="scissors" && b==="paper") ) {
            console.log("The computer is the winner");
            computerScore++;
        }
        else {
            console.log("The human wins");
            humanScore++;
        }
    }

    function round(){
        let humanGuess;
        let computerGuess;
        humanGuess = prompt("rock, paper or scissors?");
        function computerSelectionNumber(){
            let selectionNumber = Math.floor(Math.random()*3);
            return selectionNumber;
        }
        computerGuess= options[computerSelectionNumber()];
        rules(computerGuess,humanGuess);
        }

    function game(){
    for (let i = 0; i < 5; i++) {
        round(); 
        }
        function winner(){
            if(humanScore===computerScore){
                return "It's a draw!";
            }
            else if(computerScore > humanScore){
                return "Computer wins!!";
            }
            else {
                return "Human Wins!!";
            }
        }
        console.log(`The scores are:
            human: ${humanScore}
            computer: ${computerScore}
            
            ${winner()}`)
    }
    game();
