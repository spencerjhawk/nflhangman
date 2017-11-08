var chosenWord = require('./word.js');
var inquirer = require('inquirer');
var randomizeWord = require('./game.js');
var letterBlanks = require('./letter.js');

var startGame = function() {
    gameover = false;
    found = false;
    guesses = [];
    tries = 10;
    var word = new randomizeWord();
    randomWord = word.wordSelect;
    console.log();
    console.log("\n=====================================");
    console.log("This is NFL Team Hangman");
    console.log("\nTries remaining:", tries);
    currentWord = new chosenWord(randomWord);
    currentWord.createBlanks();
    console.log("\n" + currentWord.render() + "\n");
    userPrompt();
};

var playAgain = function() {
    if (gameover) {
        if (tries < 1) {
            console.log("\nYou lost!\n");
        } else {
            console.log("\nYou won!\n");
        }
        inquirer.prompt([{
            type: "confirm",
            name: "again",
            message: "Would you like to play again?"
        }]).then(function(restart) {
            if (restart.again) {
                console.log("Great!");
                startGame();
            } else {
                console.log("\nOkay, bye bye!\n");
            }
        });
    }
};

var userPrompt = function() {
    currentWord.wordFound();
    if (tries < 1 || found) {
        gameover = true;
        playAgain();
    } else {
        inquirer.prompt([{
            name: "guess",
            message: "Type a letter to guess the team."
        }]).then(function(answers) {
            if (guesses.find(function(item) {
                    return item === answers.guess.toUpperCase();
                })) {
                console.log("\nYou already guessed that letter. Try again!\n");
                userPrompt();
            } else {
                guesses.push(answers.guess.toUpperCase());
                console.log("\nYour Guesses: " + guesses);
                letFound = currentWord.check(answers.guess);
                console.log("\nTries remaining: ", tries);
                console.log("\n" + currentWord.render() + "\n");
                userPrompt();
            }
        });
    }
};

startGame();