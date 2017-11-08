var letterBlanks = require('./letter.js');

//verifies chosen word from randomize word function
var chosenWord = function(word, inputChoice) {
    this.word = word;
    this.lets = [];
    this.splitWord = ('');
    this.inputChoice = inputChoice;
    this.createBlanks = function() {
        for (var i = 0; i < this.word; i++) {
            var newLet = new letterBlanks(this.word[i]);
            if (this.word[i].valueOf() !== " ") {
                this.lets.push(newLet.blank());
            } else {
                this.lets.push(newLet.space());
            }
        }
    };
    this.check = function(guessedLetter) {
        var lower = guessedLetter.toLowerCase();
        var upper = guessedLetter.toUpperCase();
        for (var i = 0; i < this.lets.length; i++) {
            if (this.word[i].valueOf() === lower || this.word[i].valueOf() === upper) {
                this.lets[i] = this.word[i].valueOf();
            }
        }
        
    };
    this.wordFound = function() {
        if (this.lets.join('') === this.word) {
            found = true;
        } else {
        }
    };
    this.render = function() {
        return this.lets.join(' ');
    };
};

module.exports = chosenWord;