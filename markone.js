var readlineSync = require('readline-sync');
var username = readlineSync.question("hey! what's your name?");
var useranswer = console.log("THANK YOU ! GREETING FROM US TO  " + username);
var userreply = readlineSync.question("do you wanna play DO YOU KNOW ME QUIZ?");
if (userreply === "yes") {
    console.log("let's play ");
} else {
    console.log("try it once,later on");
    return;
}
var score = 0;

function quiz(question, answer) {
    var userattempt = readlineSync.question(question);
    if (userattempt === answer) {
        console.log("well done!");
        score++;
        console.log("score is : " + score);
    } else {
        console.log("oh! wrong");
        score--;
        console.log("score is: " + score);
    }
}
var questions = [{
    question: "WHEN DID NARENDRA MODI CONTEST FOR LOK SABHA FIRST TIME ?",
    answer: "2014"
},
{ question: "FROM WHICH LOK SABHA SEAT HE FILE HIS NOMINATION ? ", answer: "VARANASI" },
{ question: "WHICH STATE DID HEADED AS CHIEF MINISTER ? ", answer: "GUJRAT" },
{ question: "WHERE DID HE BORN ? ", answer: "VADNAGAR" },
{ question: "WHICH TERM IS  CURRENTLY GOING AS PRIME MINISTER BY HIM? ", answer: "SECOND" }];

for (let i = 0; i < questions.length; i++) {
    var currentquestion = questions[i];
    quiz(currentquestion.question, currentquestion.answer)
}