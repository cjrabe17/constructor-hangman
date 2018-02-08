var Letter = require("./Letter");

var Word = function () {
    this.lettersArr = [];
    this.isFound = false;
    this.wordGuess = "";
    this.remainingGuesses = 12;
    this.correct = "";
    this.getWordToDisplay = function(word) {
        this.wordGuess = "";
        for (var i = 0; i < word.length; i++) {
            var newLetter = new Letter(word[i]);
            this.lettersArr.push(newLetter);
        }
        for (var i = 0; i < this.lettersArr.length; i++) {
            this.wordGuess += this.lettersArr[i].underscore + " ";
        }
        console.log(this.wordGuess);
    }
    this.letterGuess = function(userGuess) {
        this.wordGuess = "";
        this.correct = false;
        var numCorrect = 0;
        for (var i = 0; i < this.lettersArr.length; i++) {
            if (this.lettersArr[i].guessed === false) {
                this.lettersArr[i].checkGuess(userGuess);

                if (this.lettersArr[i].guessed === true) {
                    this.correct = true;
                }
            }

            if (this.lettersArr[i].guessed === true) {
                numCorrect++;
                if (numCorrect === this.lettersArr.length) {
                    this.isFound = true;
                }
            }
        }
        for (var i = 0; i < this.lettersArr.length; i++) {
            this.wordGuess += this.lettersArr[i].underscore + " ";
        }

        if (this.correct === true) {
            console.log("Correct!".green);
            this.correct = true;
        } else {
            this.remainingGuesses--;
            console.log("Nope!".red + " You only have " + this.remainingGuesses + " guesses left.");
            this.correct = false;
        }
        console.log(this.wordGuess);
    }
}

module.exports = Word;