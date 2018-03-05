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
var intervalId;
var choices;

var questions = {
    "q1": "Where did pizza originate from?",
    "answers1":[{ 
        "a" :"b",
         "c":"d",
         "e":"f",
         "g":"h",
        }],
    // "q2": 'The original name for "processed" cheese is....?',
    // "answers2":[{
    //      "a":"b",
    //      "c":"d",
    //      "e":"f",
    //      "g":"h",
    // }],
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

    // "q6": "What dish, made from crushed Durum wheat, is a staple of western North Africa?",
    // "answers1":[{ 
    //     "a" :"b",
    //      "c":"d",
    //      "e":"f",
    //      "g":"h",
    //     //  answer is couscous
    //     }],
    // "q7": "To be legally sold as bourbon, a whiskey's mash must contain at least 51% of what grain?",
    // "answers1":[{ 
    //     "a" :"b",
    //     "c":"d",
    //     "e":"f",
    //     "g":"h",
    //     // answer is corn
    //     }],
    // "q8": "When found on a beer bottle, what does the acronym IPA stand for?",
    // "answers1":[{ 
    //     "a" :"b",
    //     "c":"d",
    //     "e":"f",
    //     "g":"h",
    //     // answer is india pale ale
    //     }],
    // "q9": "The first McDonald's restaurant opened in which US state?",
    // "answers1":[{ 
    //     "a" :"b",
    //     "c":"d",
    //     "e":"f",
    //     "g":"h",
    //     // answer is California
    //     }],
    // "q10": "Pupusas, handmade thick stuffed corn tortillas, are a traditional dish from what country?",
    // "answers1":[{ 
    //     "a" :"b",
    //     "c":"d",
    //     "e":"f",
    //     "g":"h",
    //     // answer is El Salvador
    //     }],

    };
   
    // new inquiry("Where did pizza originate from?", ["New York City", "Naples, Italy", "Paris, France", "Tokyo, Japan"], "Naples, Italy"),
    // new inquiry("The orignal name for 'processed' cheese is..?" ["embalmed cheese", "fake cheese", "cheese by-product", "pseudo-cheese"], "embalmed cheese")







// functions

function startGame() {
    // $("button").remove(".choice-button");
    $("#question-number").text("Click start to begin!");
    playGame();
}

function playGame(){
    $(".startButton").on("click", function(){
        $("button").remove(".startButton");
        quest1();
    });
}

function quest1 (){
    $("#question-number").text("Time Remaining: 5 seconds");
    $("#question").text(questions.q1);
    $(".btncontainer").append('<button class="choiceA btn btn-lg btn-default"></button>');
    $(".btncontainer").append('<button class="choiceA btn btn-lg btn-default"></button>');
    $(".btncontainer").append('<button class="choiceA btn btn-lg btn-default"></button>');
    $(".btncontainer").append('<button class="choiceA btn btn-lg btn-default"></button>');        
    $(".choiceA").text("boo");
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