//possible words
var wordBank = [
    ["Seattle Seahawks", "Los Angeles Rams", "Minnesota Vikings", "Kansas City Chiefs", "Oakland Raiders", "Jacksonville Jaguars", 
    "Philadelphia Eagles", "Cleveland Browns", "New York Giants", "Atlanta Falcons", "New England Patriots", "New Orleans Saints"],
];
//function to choose random word from wordbank
var randomizeWord = function () {
    return word [Math.floor(Math.random() * wordBank.length)];
};

module.exports = randomizeWord;