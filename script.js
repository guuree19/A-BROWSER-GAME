



let multiplier = Math.floor((Math.random() * 10) + 1);
let multiplicant = Math.floor((Math.random() * 10) + 1);
let answer = multiplier * multiplicant



let quizwraper = document.getElementById("quiz-wraper")
let questiontwo = document.getElementById("questiontwo");
let buttonnext = document.getElementById("btn_next")
let buttonstart = document.getElementById("btn_Start")
let buttonscore = document.getElementById("score-card")
let askquestions = document.getElementById("user-answer");



const count = 0
function time_table_practice_or_quize(){ 
    buttonstart.style.backgroundColor = "blue"
    let question = document.getElementById("question")
    question.textContent = `${multiplier} X ${multiplicant}  ?`
    let askquestions = document.getElementById("user-answer");
    askquestions.textContent = `${answer}`;


    time_table_practice_checking();
    
}

time_table_practice_or_quize();

     // checking function
    
    function time_table_practice_checking(){
        
        if(question === answer && question === user-answer){
            askquestions.innerHTML = "correct" 


        }
        else{
            askquestions.innerHTML = "try again" }

            


    };





