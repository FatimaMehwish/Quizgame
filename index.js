// Toggle theme
const toggle = document.getElementById('Toggle-btn');
toggle.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme')
});


// working for Main section
const questions = [
    {
        question:"What does HTML stands for ?",
        options:["HyperText Language","HyperText Markup Language",'HyperLink Text Language'],
        answer:"HyperText Markup Language"
    },
    {
        question:"What is the most widely used Programming language is?",
        options:["Python","C++",'Javascript'],
        answer:"Javascript"
    },
    {
        question:"What is the name of the popular social media Platform founded by Mark Zuckberg ?",
        options:["Facebook","Instagram",'Twitter'],
        answer:"Facebook"
    },
     {
        question:"What does API Stands for?",
        options:["Advanced Programming Interface","Application Programming Interface",'Artificial Programming Interface'],
        answer:"Application Programming Interface"
    },
     {
        question:"What is the Primary function of a compiler?",
        options:["To interpret code line by line","To Debug code",'To translate source code into machine'],
        answer:"To translate source code into machine"
    },

];


let currentquestion = 0;
let score = 0;
let timer = 60;
       
     // Timer for questions
      function StartTimer(){

        let intervalID;
        const TimerElement = document.getElementById('Timer');
        if(TimerElement){

            timer = 60;
            TimerElement.textContent = ` Time ${timer} seconds `;
            
            intervalID = setInterval(()=>{
                if(currentquestion >= questions.length ){
                    TimerElement.textContent = `Your Time is over`;
                    clearInterval(intervalID);
                    return;
                }
                timer --;
                TimerElement.textContent = `Time ${timer} seconds`;
                
                if(timer<=0){
                    clearInterval(intervalID);
                      
                    Result.textContent = "Time over"
                    TimerElement.textContent =`sorry You Failed in quiz game`;
                };
            },1000)
        }
        else{
            console.error('Timer Element does not found');
        }

      }


// function for displaying questions;

function DisplayQuestion(){
          
      if(currentquestion>=questions.length){

        const Complete = document.getElementById('Complete-msg');
        if(Complete){
            Complete.textContent = 'Quiz Completed';
        }
        return;
      }

      const questionElement = document.getElementById('Question');
      const optionsElement = document.getElementById('option');

      questionElement.textContent = questions[currentquestion].question;
      optionsElement.innerHTML = " ";
      questions[currentquestion].options.forEach((options)=>{
        const button = document.createElement('button');
        button.textContent = options;
        button.style.backgroundColor = "Pink";
        button.style.border = "none";
        button.style.padding = "10px";
        button.style.margin = "10px";


        button.onclick = ()=>{
       checkAnswer(options)
        };

        optionsElement.appendChild(button);
        
      });
};

// Checking Answer

function checkAnswer(Selectoption){
  
     const correctAnswer = questions[currentquestion].answer;
     let Result = document.getElementById('Result');

     if(Selectoption === correctAnswer){
      Result.textContent = 'Correct';
      score++
     }

     else{
        Result.textContent = `Incorrect The answer is ${questions[currentquestion].answer}`
     }

     let ScoreElement = document.getElementById('Score');
     ScoreElement.textContent = `score :  ${score}`;

     currentquestion++
     DisplayQuestion();

};



DisplayQuestion();
StartTimer();
