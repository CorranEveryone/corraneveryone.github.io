// Game Variables
var min = 0;
var max = 0;
var lives = 0;
var number = 0;

document.getElementById('menuSetup').style.display = 'block';

function randomNumber() {
    number = Math.floor(Math.random()*(max-min+1))+min
};

function start() {
    min = 1;
    max = 10;
    lives = 3;
    randomNumber();
    document.getElementById('menuSetup').style.display = 'none';
    document.getElementById('menuGame').style.display = 'block';
    document.getElementById('gameGuess').value = '';
    document.getElementById('gameMessage').innerHTML = `Guess a number between ${min} and ${max}`;
    document.getElementById('gameLives').innerHTML = `Lives: ${lives}`;
};

function submit() {
    console.log(parseInt(document.getElementById('gameGuess').value))
    if (parseInt(document.getElementById('gameGuess').value) != parseString(NaN)) {
        document.getElementById('gameMessage').innerHTML = `good`;
    } else {
        document.getElementById('gameMessage').innerHTML = `Guess a NUMBER between ${min} and ${max}`;
    };
};