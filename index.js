var inquirer = require("inquirer");
var colors = require("colors");
var Word = require("./Word");

var wordsArr = ["eleven", "demogorgon", "hawkins", "upsidedown", "eggo", "madmax", "pollywog", "mindflayer", "walkietalkie", "digdug", "eighties"];

var magicWord = wordsArr[Math.floor(Math.random() * 10)];

var word = "";
var game = {
    start: function() {
        word = new Word();
        word.getWordToDisplay(magicWord);
        this.round();
    },
    round: function() {
        if (word.correct === false && word.remainingGuesses === 0) {
            this.end();
        } else if (word.isFound === true) {
            this.end();
        } else {
            this.promptUser();
        }
    },
    promptUser: function() {
        var that = this;
        inquirer.prompt([
            {
                type: "input",
                message: "Type a letter!",
                name: "userGuess"
            }
        ]).then(function(answers) {
            word.letterGuess(answers.userGuess);
            that.round();
        });
    },
    end: function() {
        var that = this;
        if (word.isFound === true) {
            console.log("\nYou win! The mind flayer isn't going to get you!\n---------------------------------------------".magenta);
            inquirer.prompt([
                {
                    type: "confirm",
                    name: "restart",
                    message: "Would you like to play again?"
                }
            ]).then(function(answers){
                if (answers.restart === true) {
                    that.start();
                } else {
                    console.log("\nLame... Enjoy getting stuck in the Upside Down.\n---------------------------------------------".yellow);
                }
            });
        } else {
            console.log("\nThe demogorgons ate you. You lose.".red + "\nThe word was " + magicWord + ".\n---------------------------------------------");
            inquirer.prompt([
                {
                    type: "confirm",
                    name: "restart",
                    message: "Would you like to play again?"
                }
            ]).then(function(answers){
                if (answers.restart === true) {
                    that.start();
                } else {
                    console.log("\nLame... Enjoy getting stuck in the Upside Down.\n---------------------------------------------".yellow);
                }
            });
        }
    }
}

game.start();