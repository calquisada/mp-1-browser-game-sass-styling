let Questions = 
[{
    q: "What international country does Lionel Messi play for?",
    a: [{ text: "Argentina", isCorrect: true},
    { text: "Brazil", isCorrect: false},
    { text: "Uruguay", isCorrect: false},
    { text: "Spain", isCorrect: false}
    ]
},

{
    q: "Which international team won the 2018 World Cup in Russia?",
    a: [{ text: "Iran", isCorrect: false, isSelected: false},
    { text: "Russia", isCorrect: false},
    {text: "Croatia", isCorrect: false},
    { text: "France", isCorrect: true}
    ]
},

{
    q: "What team did Lionel Messi originally played for?",
    a: [{ text: "Real Madrid", isCorrect: false},
    { text: "FC Barcelona", isCorrect: true},
    { text: "Paris Saint-Germain", isCorrect: false},
    { text: "Inter Miami", isCorrect: false},
    ]
},

{
    q: "What team did Cristiano Ronaldo originally played for?",
    a: [{ text: "Real Madrid", isCorrect: false},
    { text: "Manchester United", isCorrect: false},
    { text: "Sporting Lisbon", isCorrect: true},
    { text: "Al-Nassr Club", isCorrect: false},
    ]
},

{
    q: "What international country does Cristiano Ronaldo plays for?",
    a: [{ text: "Spain", isCorrect: false},
    { text: "Portugal", isCorrect: true},
    { text: "Saudi Arabia", isCorrect: false},
    { text: "Morocco", isCorrect: false},
    ]
},

{
    q: "Which country won the 2022 Men's World Cup?",
    a: [{ text: "England", isCorrect: false},
    { text: "Morocco", isCorrect: false},
    { text: "France", isCorrect: false},
    { text: "Argentina", isCorrect: true},
    ]
},

{
    q: "Which country won the 2023 Women's World Cup?",
    a: [{ text: "Spain", isCorrect: true},
    { text: "Philippines", isCorrect: false},
    { text: "France", isCorrect: false},
    { text: "Brazil", isCorrect: false},
    ]
},

{
    q: "Which organization is the governing body of soccer/football all around the world?",
    a: [{ text: "UEFA", isCorrect: false},
    { text: "CONCACAF", isCorrect: false},
    { text: "FIFA", isCorrect: true},
    { text: "CONMEBOL", isCorrect: false},
    ]
},

{
    q: "Which two teams compete in the event called, 'El Clasico'?",
    a: [{ text: "Inter Milan & AC Milan", isCorrect: false},
    { text: "FC Barcelona & Real Madrid", isCorrect: true},
    { text: "Manchester City & Manchester United", isCorrect: false},
    { text: "Los Angeles FC & Los Angeles Galaxy", isCorrect: false},
    ]
},

{
    q: "Which country was soccer invented in?",
    a: [{ text: "England", isCorrect: true},
    { text: "Mexico", isCorrect: false},
    { text: "France", isCorrect: false},
    { text: "Argentina", isCorrect: true},
    ]
},

]

let currentQuestions = 0
let score = 0

function loadQuestions() {
    let question = document.getElementById("questions2")
    let answer = document.getElementById("answers2")

    question.textContent = Questions[currentQuestions].q;
    answer.innerHTML = ""

    for (let i = 0; i < Questions[currentQuestions].a.length; i++) {
        let choicesdiv = document.createElement("div");
        let choice = document.createElement("input")
        let choiceLabel = document.createElement("label");
        
        choicesdiv.classList.add("answer-box") /* added with help from Cody Jarrett! */
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;

        choiceLabel.textContent = Questions[currentQuestions].a[i].text;

        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        answer.appendChild(choicesdiv);
    }
}

loadQuestions();

function loadScore(){
    let totalScore = document.getElementById("score")
    totalScore.textContent = `You scored ${score} out of ${Questions.length}!`
}

function nextQuestion() {
    if (currentQuestions < Questions.length - 1) {
        currentQuestions++;
        loadQuestions();
    } else {
        document.getElementById("answers2").remove()
        document.getElementById("questions2").remove()
        document.getElementById("buttons").remove()
        loadScore();
    }
}

function checkAnswers() {
    let selectedAnswers = parseInt(document.querySelector('input[name="answer"]:checked').value);

    if (Questions[currentQuestions].a[selectedAnswers].isCorrect) {
        score++;
        console.log("Correct!")
        nextQuestion();
    } else {
        nextQuestion();
    }
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// This was a bonus stuff-request from the instructor so I had to search some things up on how to add this timer! This was not part of my original project, this was an experiment! Not my codes but wanted to see how it would look! ////
let myLet = setInterval(function(){ myTimer() }, 1000);
let secondlimit = 45;

function myTimer() {
if(secondlimit == 0)
{
    myStopFunction();
}

document.getElementById("timerDisplay").innerHTML = '00:' + zeroPad(secondlimit,2);
secondlimit = secondlimit  - 1;

}

function myStopFunction() {
    clearInterval(myLet);
}

function zeroPad(num, places) {
  let zero = places - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join("0") + num;
}