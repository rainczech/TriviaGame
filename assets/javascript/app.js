// press start to start game
// question appears with countdown
// if correct answer, show correct answer w/ photo/gif
// if incorrect answer, show correct answer w/photo/gif
// with no user input will go to next question
// end wil show correct, incorrect, and unanswered array
// start over does not reload page but resets the game

// global variables

// answers

var correct = 0;
var wrong = 0;
var noResponse = 0;

var question = [
    new inquiry("Where did pizza originate from?", ["New York City", "Naples, Italy", "Paris, France", "Tokyo, Japan"], "Naples, Italy"),
    new inquiry("The orignal name for 'processed' cheese is..?" ["embalmed cheese", "fake cheese", "cheese by-product", "pseudo-cheese"], "embalmed cheese")


]







// functions

function inquiry(text, choice, answer){
    this.text = text;
    this.choice = choice;
    this.answer = answer;


};

function correctAnswer(){
    if(userChoice === this.answer){
    correct++;}
};

function wrongAnswer(){
    if(userChoice === this.answer){
    wrong++;}
}

function noResponse (){
    if(timeLeft === 0) {
        noResponse++;
    }
}








function restart(){
    correct = 0;
    wrong = 0;
    noResponse = 0;
}

// main
inquire ()