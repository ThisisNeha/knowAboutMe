//  console.log("neha");
var readlineSync = require('readline-sync');

var score = 0;

var userName = readlineSync.question('Enter your name here!');

console.log("");
console.log("Welcome " + userName.toUpperCase() + " ! Lets start the quiz.");
console.log("");

function play(question, answer){
var userAns = readlineSync.question(question);

if (userAns===answer){
  console.log("You are right!");
  score++;
  
}else{
  console.log("oops! wrong answer!")
}
console.log("your score is : ", score);
console.log("--------");
}



var questions=[{
  question:'1. Where do I live (Hint: Heart of India) ?',
  answer:'Delhi'
},{
  question : '2. What I am studing currently?', 
  answer:'web development'
},{
  question: '3. Do i have a CS background?',
  answer:'No'
},{
  question:'4. Name the cuisine I absolutely love ?',
  answer:'Chinese'
},{
  question: '5. Which is my favourite drink?',
  answer:'Coffee'

}
]
for (var i =0; i<questions.length; i++){
  var currentQue= questions[i];
  play(currentQue.question, currentQue.answer);
}

console.log("Your final score : ", score);


