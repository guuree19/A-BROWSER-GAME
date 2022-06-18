
let quizwraper = document.getElementById("quiz-wraper")
let question = document.getElementById("question")
let questiontwo = document.getElementById("parent-question");
let buttonnext = document.getElementById("btn_next")
let buttonstart = document.getElementById("btn_Start")
let buttonscore = document.getElementById("score-card")
let scorecard = document.getElementById("scoreCard")
let useranswer = document.getElementById("user-answer");
let  count = 0

buttonnext.addEventListener('click', ()=> {

    count += 5;
    scorecard.textContent = count;

    if(count === 35){
        questiontwo.style.display= "block"
        buttonstart.style.display = "block"
        question.style.display = "block"
        quizwraper.textContent = "congratulation ,your Score is: 35" 

    }
   })


function askquestion(){

    let multiplier = Math.floor((Math.random() * 10) + 1);
    let multiplicant = Math.floor((Math.random() * 10) + 1);
    let storeanswer = multiplier * multiplicant
    buttonstart.style.background = "blue"
    questiontwo.style.display = "none"
    buttonstart.style.display = "block"
    question.textContent = `${multiplier} X ${multiplicant}  ?`
    let askquestions = document.getElementById("user-answer");
    useranswer.textContent = 0 
    // /console.log(useranswer.textContent)


}

askquestion();


function nextquestion(){
    askquestion()
    console.log("count " + count)
}


function time_table_practice_or_quize(){ 
    buttonnext.addEventListener('click', nextquestion)
    
    time_table_practice_checking();
    
}

time_table_practice_or_quize();


// checking function
    
    function time_table_practice_checking(){
        buttonstart.addEventListener('click', () =>{
            questiontwo.style.display = "block"

            
            buttonnext.addEventListener('click', () =>{
            questiontwo.style.display = "block"
            })

        })
    }

    $('body').css("background-color", "white");
     