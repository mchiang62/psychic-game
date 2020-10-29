// const alphabet = "abcdefghijklmnopqrstuvwxyz"
const alphabet = "abc"
const alphabetArr = alphabet.split("")
console.log(alphabetArr)


let wins = 0;
let losses = 0;
let guessesRemaining = 10;


const winsText = document.getElementById("winCount");
const lossesText = document.getElementById("lossCount");


document.onkeyup = function (event) {

    const userGuess = event.key
    console.log(userGuess + " userguess")


    const computerGuesses = alphabetArr[Math.floor(Math.random() * alphabetArr.length)];
    console.log(computerGuesses)


    if (userGuess === computerGuesses) {
        wins++
    } else if (userGuess !== computerGuesses) {
        losses++
    }


    winsText.textContent = wins;
    lossesText.textContent = losses;






}