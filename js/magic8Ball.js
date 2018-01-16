var magic8Ball = ["Yep. It's certain.", "No doubt!", "Most definitely!", "All things come with time.", "Yes", "Most likely.", "Lookin good.", "Signs point to yes.", "It's unclear, try again.", "Ask me again later.", "Hmmmm....Better not tell you now.", "Sorry, I can't determine that now.", "Concentrate harder and ask me again.", "Don't count on it Hommie.", "My reply is no.", "My sources say no.", "The outlook is not looking good friend.", "Doubtful"];

magic8Ball.askQuestion = function(question){
	var randomNumber = Math.random();
	console.log(randomNumber = "" + randomNumber);

	var randomNumberArray = randomNumber * magic8Ball.length;
	console.log(randomNumberArray = "" + randomNumberArray);

	var randomIndex = Math.floor(randomNumberArray);
	console.log(randomIndex = "" + randomIndex);

	var randomAnswer = magic8Ball[randomIndex];
  console.log(randomAnswer);


};
