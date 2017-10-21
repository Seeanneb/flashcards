var inquirer = require('inquirer')

function newOrOld(){

	inquirer.prompt([
  {
	type: "list",
	name: "q1",
	message: "Would you like to create a new deck or play with an existing deck? ",
	choices: ["New Deck", "Existing Deck"] 
  }
	]).then(function(answer1){
		if (answer1.q1 === "New Deck") {
			inquirer.prompt([
			{
				type: "input",
				name: "newTheme",
				message: "What is the theme of the new deck? "
			}
		]).then(function(answer2){
			// decks.push(answer2.newTheme)
			var newDeck = new Deck (answer2.newTheme)
			decks.push(newDeck)
			getCards();
			
	  })
	 }
	 else{
	 	playCards()
	 }
    })	
   }

var cards = []
function Card (question, answer){
	this.question = question;
	this.answer = answer;
}

var decks = []
function Deck (theme){
	this.theme = theme;
}

function Controller (command){

}

function getCards(){
var	i = 0;


inquirer.prompt([	
			
			{
				type: "input",
				name: "newQ",
				message: "What is question you want on the card? "
			},
			{
				type: "input",
				name: "newA",
				message: "What is the answer you want on the card? "
			},
			{
				type: "confirm", 
				name: "continue", 
				message: "Would you like to add another card?",
			}

		 ]).then(function(answer3){
		 	var newCard = {};
		 	newCard[i] = new Card (answer3.newQ, answer3.newA) 
		 	cards.push(newCard[i])
		 	if (answer3.continue == true) {
		 		i++
		 		console.log( "Card was added to the deck!")
		 		getCards();
		 	}
		  	else {console.log("Your new deck has been added!")
		  		// for (var j = 0; j < decks.length; j++) {
		  		// 	console.log(decks[j])
		  		// 	for (var b = 0; b < cards.length; b++) {
		  		// 		console.log(cards[j])
		  		// 	}
		  		// }
		 		  newOrOld();

		 		 }
		 	
		 })
		}

		newOrOld();

		function playCards(){
			for (var i = 0; i < decks.length; i++) {
					 console.log ( i + " : " + decks[i])
			}
			inquirer.prompt([
		{
			type: "list",
			message: "What deck do you want to use? ",
			name: "q4",
			choices: i
		}
			])//.then(function(answer4){}
		}
		
/*
<--
 functions 
 	ask users for a new or existing Deck
 		1. new = function asks user for theme, pushes to decks array
			1a. function creates a card with a Q, A and asks if they want to make a new card
				once they are done, cards go into that deck object

 		2. existing = function grabs cards from array with theme name given 
			2a. user randomly gets a card
			prompted the question awaits input
			+1 for every correct answer 
 -->
 */