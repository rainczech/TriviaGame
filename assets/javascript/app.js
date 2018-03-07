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
var qCount = 0;
var correct = 0;
var wrong = 0;
var noResponse = 0;
var intervalId;
var choices;


var questions = [{
    "q": "Where did pizza originate from?",
    "answers":[
        "New York City, USA",
        "Naples, Italy",
        "Paris, France",
        "Tokyo, Japan"
        ],
    "q": 'The original name for "processed" cheese is....?',
    "answers":[
         "fake cheese",
         "cheese by-product",
         "embalmed cheese",
         "pseudo-cheese",
    ],
    // "q3":"Sriracha is a type of hot sauce named after a city located in what country?",
    // "answers2":[{
    //     "a":"b",
    //     "c":"d",
    //     "e":"f",
    //     "g":"h",
    //     // answer is thailand
    // }],
    // "q4": "Malbec, Sangiovese, and Syrah and all are a type of what?",
    // "answers1":[{ 
    //     "a" :"b",
    //      "c":"d",
    //      "e":"f",
    //      "g":"h",
    //     //  answer is wine
    //     }],

    // "q5": "In what country did Cheddar cheese originate?",
    // "answers1":[{ 
    //      "a":"b",
    //      "c":"d",
    //      "e":"f",
    //      "g":"h",
    //     //  answer is england
    //     }],

   

    }]
   







// functions

function startGame() {
    // $("button").remove(".choice-button");
    $("#question-number").text("Click start to begin!");
    playGame();
}

function playGame(){
    $(".startButton").on("click", function(){
        $("button").remove(".startButton");
        quest1(qCount);
    });
}

function quest1 (count){
    $("#question-number").text("Time Remaining: 5 seconds");
    $("#question").text(questions[count].q);
    $(".btncontainer").append('<button class="choiceA btn btn-lg btn-default"></button>');
    $(".btncontainer").append('<button class="choiceA btn btn-lg btn-default"></button>');
    $(".btncontainer").append('<button class="choiceA btn btn-lg btn-default"></button>');
    $(".btncontainer").append('<button class="choiceA btn btn-lg btn-default"></button>');        
    $(".choiceA").text(questions.answers[0]);
    intervalId = setInterval(timeCount, 1000);
}



function timeCount (){
    time--;
    console.log(time);
    $("#question-number").text("Time Remaining: "+ time + " seconds");
    if (time ===0){
        clearInterval(intervalId);
    }
}

function rightWrong (){

}

function correctAnswer(){
    if(userChoice === this.answer){
    correct++;
    qCount++;
    quest1(qCount)
}
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

// psuedocode
// ============
// create buttons and popular with answer choices in a for loop.
// create a function with an event listener for either a click or time out to add to the counter to bring up the next question
// also make the response screens to show the correct response
//at the end of the game, when the counter has reached the end of the array, have a screen which populates the wrong, correct, and unanswered questions tally. 
// have a restart button that shuffles the questions without refreshing the page.
