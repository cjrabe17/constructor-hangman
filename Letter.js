var Letter = function(letterInWord) {
    this.letterInWord = letterInWord;
    this.guessed = false;
    this.underscore = "_";
    this.displayLetter = function() {
        if (this.guessed === true) {
            this.underscore = this.letterInWord;
        }
    };
    this.checkGuess = function (letterGuessed) {
        if (letterGuessed === letterInWord) {
            this.guessed = true;
        }
        this.displayLetter();
    };
};

module.exports = Letter;