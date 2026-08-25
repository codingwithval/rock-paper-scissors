function getComputerChoice(){

    const choices = ['rock', 'paper', 'scissors'];

    let index = Math.floor(Math.random() * choices.length);

    return(choices.at(index).toLowerCase())

}

function getHumanChoice(){
    let choice = prompt("Rock, paper or scissors?");
    return(choice.toLowerCase())
}

function playGame(){

    let humanScore = 0;
    let computerScore = 0;


    function playRound(){

        
        let comp = getComputerChoice();
        let human = getHumanChoice();


        if (comp == human){
            alert("Its a tie!");
            return;

        }
        else if (computerScore == "rock"){
            if (human == "paper"){
                humanScore ++;
                alert("Human scores!")}
            else{
                computerScore ++;
                alert("Computer scores!")}}
        else if (comp == "paper"){
            if (human == "rock"){
                computerScore++;
                alert("Computer scores")
            }
            else
            {
                humanScore ++;
                alert("Human scores!");
            }
        }
        else{
            if (human == "paper"){
                computerScore ++;
                alert("Computer scores");
            }
            else{
                humanScore ++;
                alert('Human scores');
            }
        }
    }




    let rounds = 5;

    while (rounds > 0)
    {
        playRound();
        rounds --;
    }

    if (humanScore > computerScore)
    {
        alert("Human Wins!")
    } else{
        alert("Computer Wins!")
    }
}
