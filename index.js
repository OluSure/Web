
// Counting App

const decreaseBtn = document.getElementById('decreaseBtn');
const increaseBtn = document.getElementById('increaseBtn');
const resetBtn = document.getElementById('resetBtn');
const countLabel = document.getElementById('countLabel');
let count = 0;

increaseBtn.onclick = function() {
    count++;
    countLabel.textContent = count;
}
decreaseBtn.onclick = function() {
    count--;
    countLabel.textContent = count;
}
resetBtn.onclick = function() {
    count = 0;
    countLabel.textContent = count;
}


// Dice Roller

const rollBtn = document.getElementById('rollBtn');
const label1 = document.getElementById('label1');
const label2 = document.getElementById('label2');
const label3 = document.getElementById('label3');
const min = 1;
const max = 6;
let rand1;
let rand2;
let rand3;

rollBtn.onclick = function() {
     rand1 = Math.floor(Math.random() * max) + min;
     rand2 = Math.floor(Math.random() * max) + min;
     rand3 = Math.floor(Math.random() * max) + min;
    label1.textContent = rand1;
    label2.textContent = rand2;
    label3.textContent = rand3;
}

// Guess the Number Game

const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const resulti = document.getElementById('result');
let randomNumber = Math.floor(Math.random() * 100) + 1;
let userGuess;

guessBtn.onclick = function() {
    userGuess = Number(guessInput.value);

    if (userGuess < 1 || userGuess > 100) {
        resulti.textContent = "Please enter a number between 1 and 100";
    } else if (userGuess < randomNumber) {
        resulti.textContent = "Too low! Try again.";
    } else if (userGuess > randomNumber) {
        resulti.textContent = "Too high! Try again.";
    } else {
        resulti.textContent = "Congratulations! You've guessed the number!";

        // Generate a new random number for the next round
        randomNumber = Math.floor(Math.random() * 100) + 1;
    }
    guessInput.value = '';
    guessInput.focus();
}

// Temperature Converter

    const textbox = document.getElementById('textbox');
    const fahrenheitInput = document.getElementById('fahrenheitInput');
    const celsiusRadio = document.getElementById('celsiusInput');
    const resulta = document.getElementById('resulta');
    let temp;
function convert() {
    if (fahrenheitInput.checked){
            temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;
resulta.textContent = temp.toFixed(1) + "F";
    } else if (celsiusRadio.checked) {
            temp = Number(textbox.value);
        temp = (temp - 32) * (5 / 9);
resulta.textContent = temp.toFixed(1) + "C";
    } else {
       resulta.textContent = "Select a unit"
    }
}

// Dice Roller

function rollDice() {
const diceInput = document.getElementById('diceInput');
const diceResult = document.getElementById('diceResult');
const imgResult = document.getElementById('imgResult');
const values = [];
images = [];

    let dice = Number(diceInput.value);
    for (let i = 0; i < dice; i++) {
        let value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push('<img src="dice" + roll + ".png" alt="Dice" + roll +"h" width="50" height="50">');
    }
    diceResult.textContent = "You rolled: " + values.join(', ');
    //imgResult.innerHTML = images.join(' ');
}

// Password Generator

pass.onclick = function GeneratePassword() {
    const lengthInput = document.getElementById('lengthInput');
    const uppercaseInput = document.getElementById('uppercaseInput');
    const lowercaseInput = document.getElementById('lowercaseInput');
    const numbersInput = document.getElementById('numbersInput');
    const symbolsInput = document.getElementById('symbolsInput');
    const passwordResult = document.getElementById('passwordResult');
    const length = Number(lengthInput.value);
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';
    let allChars = '';
    let password = '';
    if (uppercaseInput.checked) {
        allChars += uppercaseChars ? uppercaseChars : ''; 
    }
    if (lowercaseInput.checked) {
        allChars += lowercaseChars ? lowercaseChars : '';
    }
    if (numbersInput.checked) {
        allChars += numberChars ? numberChars : '';
    }
    if (symbolsInput.checked) {
        allChars += symbolChars ? symbolChars : '';
    }
    if (allChars === '') {
        passwordResult.textContent = 'Please select at least one character type';
        return;
    }
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }
    passwordResult.textContent = password;
return password;
}

// Stopwatch 

function updateClock() {
    const hoursSpan = document.getElementById('hours');
    const minutesSpan = document.getElementById('minutes');
    const secondsSpan = document.getElementById('seconds');
    let hours = parseInt(hoursSpan.textContent);
    let minutes = parseInt(minutesSpan.textContent);
    let seconds = parseInt(secondsSpan.textContent);    
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
            if (hours >= 24) {
                hours = 0;
            }
        }   
    }
    hoursSpan.textContent = String(hours).padStart(2, '0');
    minutesSpan.textContent = String(minutes).padStart(2, '0');
    secondsSpan.textContent = String(seconds).padStart(2, '0');
}

let clockInterval;

document.getElementById('startBtn').onclick = function() {
    if (!clockInterval) {
        clockInterval = setInterval(updateClock, 1000);
    }
}
document.getElementById('stopBtn').onclick = function() {
    clearInterval(clockInterval);
    clockInterval = null;
}
document.getElementById('resetBtna').onclick = function() {
    clearInterval(clockInterval);
    clockInterval = null;
    document.getElementById('hours').textContent = '00';    
    document.getElementById('minutes').textContent = '00';    
    document.getElementById('seconds').textContent = '00';    
}



// Calculator    
let display = document.getElementById('calcDisplay');

function apend(enter){
    display.value += enter;
}
function clearBtn(){
    display.value ="";
}

function equalsBtn(){
    try {
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}



rockBtn = document.getElementById('rockBtn');
paperBtn = document.getElementById('paperBtn');
scissorBtn = document.getElementById('scissorBtn');
playerSpan = document.getElementById('player');
computerSpan = document.getElementById('computer');
resultb = document.getElementById('resultb');

let userChoice;
let computerChoice;
let Pwin = 0;
let Cwin = 0;
let choices = ['Rock', 'Paper', 'Scissor'];
rockBtn.onclick = function() {
    userChoice = 'Rock';
    playGame();
}
paperBtn.onclick = function() {
    userChoice = 'Paper';
    playGame();
}
scissorBtn.onclick = function() {
    userChoice = 'Scissor';
    playGame();
}
function playGame() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    computerChoice = choices[randomIndex];
    if (userChoice === computerChoice) {
        resultb.textContent = `It's a tie! You both chose ${userChoice}.`;
    }
    else if (
        (userChoice === 'Rock' && computerChoice === 'Scissor') ||
        (userChoice === 'Paper' && computerChoice === 'Rock') ||
        (userChoice === 'Scissor' && computerChoice === 'Paper')
    ) {
        resultb.textContent = `You win! ${userChoice} beats ${computerChoice}.`;
        Pwin++;
    } else {
        resultb.textContent = `You lose! ${computerChoice} beats ${userChoice}.`;
        Cwin++;
    }
    playerSpan.textContent = Pwin;
    computerSpan.textContent = Cwin;
}



