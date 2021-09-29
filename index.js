
var readlineSync = require('readline-sync');
const chalk = require('chalk');

console.log(chalk.cyanBright("Let's see how well you know me!❤️"));
var score = 0;

var userName = readlineSync.question('Enter your name here!');

console.log("");
console.log("Welcome " + chalk.yellowBright(userName.toUpperCase() )+ " ! Lets start the quiz. For each correct answer you'll get 1 mark!");
console.log("");

function play(question, answer){
var userAns = readlineSync.question(question);

if (userAns.toLowerCase()=== answer){
  console.log(chalk.greenBright("Yay! you are right! 🤩"));
  score++;
  
}else{
  console.log(chalk.redBright("oops! wrong answer!"));
}
console.log(chalk.greenBright("your score is : "), score);
console.log("--------");
}



var questions=[{
  question:'1. Where do I live (Hint: Heart of India) ?',
  answer:'delhi'
},{
  question : '2. What am I studing currently?', 
  answer:'web development'
},{
  question: '3. Do i have a CS background?',
  answer:'no'
},{
  question:'4. Name the cuisine I absolutely love ?',
  answer:'chinese'
},{
  question: '5. Which is my favourite drink?',
  answer:'coffee'
}
]
for (var i =0; i<questions.length; i++){
  var currentQue= questions[i];
  play(currentQue.question, currentQue.answer);
}

console.log(chalk.cyanBright("Your final score : "), score);
