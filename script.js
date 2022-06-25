
let quizWraper = document.getElementById("quiz_wraper")
let question = document.getElementById("question")
let questionTwo = document.getElementById("parent_question");
let buttonNext = document.getElementById("btn_next")
let buttonStart = document.getElementById("btn_Start")
let buttonScore = document.getElementById("score_card")
let scoreCard = document.getElementById("scoreCard")
let userAnswer = document.getElementById("user_answer");
let  count = 0


askQuestion(); 
function askQuestion(){   
    let multiplier = Math.floor((Math.random() * 10) + 1);
    let multiplicant = Math.floor((Math.random() * 10) + 1);
    buttonStart.style.background = "blue"
    questionTwo.style.display = "none"
    buttonNext.style.display = "block"
    scoreCard.style.display = "block"
    buttonScore.style.display = "block"
    buttonStart.style.display = "block"
    buttonNext.style.display = "none"
    question.textContent = `${multiplier} X ${multiplicant}  ?`
    let storedAnswer = multiplier * multiplicant;

    document.getElementById("Btn_submit").onclick = function(){ 
        let userAnswer = document.getElementById("user_answer").value;
        if(userAnswer == storedAnswer)
        {   console.log("user answer is" + " " + userAnswer)
            console.log("user answer is correct!" )
            count += 5;
            scoreCard.textContent = count;
        } else
        {console.log("please try again")
        count -= 1;
        scoreCard.textContent = count;
        }
    }
}

function nextQuestion()
{    buttonNext.addEventListener('click', nextQuestion)
    {  

        question.style.display = "block"
        buttonStart.style.display = "none"
        questionTwo.style.display = "block"
        scoreCard.style.display = "block"
        buttonScore.style.display = "block"
        buttonNext.style.display = "block"
    }

    askQuestion(); 
 

}

nextQuestion();


function time_table_practice_or_quize()
{ 
    time_table_practice_checking();
    
}

time_table_practice_or_quize();

function time_table_practice_checking()
{
    buttonStart.addEventListener('click', () =>{
        questionTwo.style.display = "block"
        buttonNext.style.display = "block"
        buttonStart.style.display = "none"
    })

    buttonNext.addEventListener('click', () =>{
        questionTwo.style.display = "block"
        buttonStart.style.display = "none"
    })


   
}

$('body').css("background-color", "white");


askQuestion(); 
