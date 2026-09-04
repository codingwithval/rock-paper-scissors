/** ==> if the 'start' button is clicked, display these lines in the "game" div:
 * 
 * <h3>Scores: </h3>
        <p> <span class="human"></span> | <span class="comp"></span></p>
        <div id="choices">
            <button value="rock">Rock</button>
            <button  value="paper">Paper</button>
            <button  value="scissors">Scissors</button>
        </div> 

    ==> start a counter that counts to five and increments every time a button is clicked:
        - counter is triggered when the first button is pressed
        - The first score is first recorded then the user clicks 4 more times
        ==> Each time a button is clicked, check the value and use it to compute and record score

    ==> Once the loop ends, display winner
*/



function checkButton(){
    const play = document.querySelector('#choices');
    const choice = play.addEventListener('click', (event)=>{
        return event.target.value;
    })

    return choice;
}
function getComputerChoice(){

    const choices = ['rock', 'paper', 'scissors'];

    let index = Math.floor(Math.random() * choices.length);

    return(choices.at(index).toLowerCase())

}

let humanScore = 0;
let computerScore = 0;


function playRound(choice){

    
    let comp = getComputerChoice();
    let human = choice;


    if (comp == human){
        ;

    }
    else if (comp == "rock"){
        if (human == "paper"){
            humanScore ++;}
        else if (human == "scissors"){
            computerScore ++; }}
    else if (comp == "paper"){
        if (human == "rock"){
            computerScore++;
        }
        else if (human == "scissors")
        {
            humanScore ++;
        }
    }
    else{
        if (human == "paper"){
            computerScore ++;
        }
        else{
            humanScore ++;
        }
    }
}

document.addEventListener("click", (event)=>{

    if (event.target.id == "start"){
        let i = 0;

        const oldP = document.querySelector("p")

        if (oldP){
            oldP.remove()
        }

        const div = document.querySelector("#game")
        const lines = `<h3>Scores: </h3>
            <p> <span class="human"></span> | <span class="comp"></span></p>
            <div id="choices">
                <button value="rock">Rock</button>
                <button  value="paper">Paper</button>
                <button  value="scissors">Scissors</button>
            </div>`;
        div.insertAdjacentHTML('beforeend', lines)

        const go = document.querySelector("#start");
        go.remove();


        const startGame = document.querySelector("#choices");
        startGame.addEventListener("click",(event)=>{
            
            playRound(event.target.value);
            i++;

            let humanPoints = document.querySelector(".human");
            humanPoints.textContent = ` You: ${humanScore}`;

            let compPoints = document.querySelector(".comp");
            compPoints.textContent = `Computer: ${computerScore}`;

            if (i == 5){

            switch(true){
                case (humanScore > computerScore):
                    alert("Congrats, you win!");
                    break;
                case (computerScore > humanScore):
                    alert("Sorry the robots got ya");
                    break;
                case(computerScore == humanScore):
                    alert("Hooray its a tie!")
                    break;
                }

                const toClear = document.querySelector('#game');
                toClear.innerHTML='';

                const heading =document.querySelector('h1');
                const newLine = `<p>Thanks for playing!</p>
                <button id="start">Click to play again!</button>`;
                heading.insertAdjacentHTML('beforeend', newLine);

                humanScore = 0;
                computerScore = 0;
            }
        })
    }

    
})


