// press start to start game
// question appears with countdown
// if correct answer, show correct answer w/ photo/gif
// if incorrect answer, show correct answer w/photo/gif
// with no user input will go to next question
// end wil show correct, incorrect, and unanswered array
// start over does not reload page but resets the game

// global variables

// answers
var time = 5;

var correct = 0;
var wrong = 0;
var noResponse = 0;

// var questions = {
//     "q1": "Where did pizza originate from?"
//     answers1: "a" :"b",
//          "c":"d",
//          "e":"f",
//          "g":"h",
//         }
//     },
//     q2: {'The original name for "processed" cheese is...?':
//         {"a" :"b",
//         "c":"d",
//         "e":"f",
//         "g":"h",
//     }
// };
        
// }
    // new inquiry("Where did pizza originate from?", ["New York City", "Naples, Italy", "Paris, France", "Tokyo, Japan"], "Naples, Italy"),
    // new inquiry("The orignal name for 'processed' cheese is..?" ["embalmed cheese", "fake cheese", "cheese by-product", "pseudo-cheese"], "embalmed cheese")







// functions

function startGame() {
    // $("button").remove(".choice-button");
    $("#question-number").text("Click start to begin the game!");
    playGame();

}

function playGame(){
    $(".startButton").on("click", function(){
        $("button").remove(".startButton");
        // $("button").append(".choice-button");
    })
}

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
startGame();