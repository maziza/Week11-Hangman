//modules
var Word = require("./word.js");
var prompt = require("prompt");
var game = require('./game.js');

//variables for the game
var words : ["summer", "winter", "mysql", "electron", "favourite", "mechanical", "vegetable"]
var guessedletters = [];



//prompt for user
inquirer.prompt([
	{
		type: "input",
		message: "Type a letter:",
		name: "guess",
	}