const alphabet = "abcdefghijklmnopqrstuvwxyz"
const alphabetArr = alphabet.split("")

console.log(alphabetArr)

document.onkeyup = function (event) {

    const userGuess = event.key;
    const computerGuesses = alphabetArr[Math.floor(Math.random() * alphabetArr.length)];

    console.log(computerGuesses)

}