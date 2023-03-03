
let playerChoice = document.querySelector('.playerChoice');


let button = document.querySelectorAll('.buttons');

let btns = document.querySelectorAll('#btn')

let computerChoice = document.querySelector('.computerChoice');

let matchResult = document.querySelector('.matchResult');


let playerScore = document.querySelector('.score');



let reset = document.querySelector('#reset')

let finalResult = document.querySelector('#yourScore')


let newbtn;


let compSelection

let showResult


let decision;


let result;
let myScore = 0
let numberOfGames = 0



function playGame() {
    for (let btn of button) {
        btn.addEventListener('click', function () {
        let newValue = btn.value
        newbtn = newValue
        console.log(newbtn)
        playerChoice.innerHTML = newbtn
        computerChoice1()
         matchDecision()
         matchResult.innerText = decision
          myScore += result
          console.log(myScore)
         playerScore.innerText = myScore
         numberOfGames++
         console.log(numberOfGames)
         gameDecision()
        
         function gameDecision() {
         for (let btn of btns) {
         if (numberOfGames === 5 && myScore > 0) {
            showResult = "Hurray You Win, Congratulations. (reset to play)"
            finalResult.innerHTML = showResult
            btn.disabled = true
          
           }
         else if (numberOfGames ===5 && myScore < 0) {
            showResult = "You Lost, Better Luck next time. (reset to play)"
            finalResult.innerHTML = showResult
            btn.disabled = true
    
           }
         else if (numberOfGames === 5 && myScore === 0) {
            showResult = "It was a Draw! (reset to play!)"
            finalResult.innerHTML = showResult
            btn.disabled = true
         }
           
        
        }
        } 
         
        })
    }
}
playGame()


function computerChoice1() {
    let compArray = ["Rock", "Paper", "Scissors"]

    let randSelection = Math.floor(Math.random() * compArray.length)

    let compRandSelection = compArray[randSelection]
    compSelection= compRandSelection
    console.log(compSelection)

    computerChoice.innerHTML = compSelection

   
}


function matchDecision() {
  

    if (newbtn == compSelection) {
        decision = "It was a Draw!"
        result = 0
    }
    else if (newbtn == "Rock" && compSelection == "Paper") {
        decision = "You Lose! Paper beats Rock"
        result = -1
    }
    else if (newbtn == "Rock" && compSelection == "Scissors") {
        decision = "You Win! Rock beats Scissors"
        result = 1
    }
    else if (newbtn == "Paper" && compSelection == "Scissors") {
        decision = "You Lose! Scissors beats Paper"
        result = -1

    }
    else if (newbtn == "Paper" && compSelection == "Rock") {
        decision = "You Win! Paper beats Rock"
        result = 1
    }
    else if (newbtn == "Scissors" && compSelection == "Rock") {
        decision = "You Lose! Rock beats Scissors";
        result = -1
    }
    else if (newbtn == "Scissors" && compSelection == "Paper") {
        decision = "You Win! Scissors beats Paper";
        result = 1
    }
    else {
        decision = "Wrong Input"
        result = 0
    }



}
function resetValues() {
    reset.addEventListener('click', function() {
        playerChoice.innerText = " "
        computerChoice.innerText = " "
        matchResult.innerText = " "
        playerScore.innerText = " "
        numberOfGames = 0
        myScore = 0
        finalResult.innerHTML = " "
        for (let btn of btns){
       btn.disabled = false
        }
    })
}
resetValues()

