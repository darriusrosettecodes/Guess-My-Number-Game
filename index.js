//putting elements into javascript
const againButton = document.querySelector('.again-button')
const checkButton = document.querySelector('.check-number')
const secretNumber = document.querySelector('.secret-number')
const userGuess = document.querySelector('.user-guess')
const result = document.querySelector('.result')
const showScore = document.querySelector('.score')
const showHighscore = document.querySelector('.highscore')

//secret number
randomNumber = Math.trunc(Math.random()*20) + 1;

//score
let score = 20
let highscore = 0

showScore.textContent = `Score: ${score}`
showHighscore.textContent = `Highscore: ${highscore}`



//checking if the guess is correct
checkButton.addEventListener('click', function checkGuess(){

    //if there is no guess
    if(!userGuess.value){
        result.textContent =  'Put a number!!'
    }
    //if the guess is correct
    else if(userGuess.value == randomNumber){

        if(score > highscore){
            highscore = score
            showHighscore.textContent = `Highscore: ${highscore}`
        }

        document.querySelector('body').style.backgroundColor = 'green'

        secretNumber.textContent = randomNumber
        result.textContent = 'You are correct!!'
        userGuess.value = ''        

    }
    //if the guess is too high / low
    else if(userGuess.value > randomNumber){
        userGuess.value = ''

        result.textContent = 'Too high'

        score--
        showScore.textContent = `Score: ${score}`
        showHighscore.textContent = `Highscore: ${highscore}`
    }
    else if(userGuess.value < randomNumber){
        userGuess.value = ''
        result.textContent = 'Too low'

        score--
        showScore.textContent = `Score: ${score}`
        showHighscore.textContent = `Highscore: ${highscore}`
    }
    //if you lose the game
    if(score < 1){
        result.textContent = 'You lost the game'

        score = 0
        showScore.textContent = `Score: ${score}`
        showHighscore.textContent = `Highscore: ${highscore}`
    }
})

//resetting the game
againButton.addEventListener('click', function resetGame(){
    randomNumber = Math.trunc(Math.random()*20) + 1;
    secretNumber.textContent = '?'

    document.querySelector('body').style.backgroundColor = 'black'

    result.textContent = 'Start guessing...'

    score = 20
    showScore.textContent = `Score: ${score}`
})