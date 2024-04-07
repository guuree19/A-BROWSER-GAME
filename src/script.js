var quizWrapper = document.getElementById("quiz_wraper");
var parentQuestion = document.getElementById("parent_question");
var question = document.getElementById("question");
var buttonNext = document.getElementById("btn_next");
var buttonStart = document.getElementById("btn_Start");
var scoreCard = document.getElementById("scoreCard");
var userAnswer = document.getElementById("user_answer");
var btnSubmit = document.getElementById("btn_submit"); // Moved here for single event listener setup
var count = 0;
var correctCount = 0;
var correctAnswer = 0; // Now a global variable

function checkForWin() {
    if (correctCount === 5) {
        celebrateSuccess(); // This now handles displaying the message and resetting the game after a delay.
    } else {
        askQuestion(); // Only ask a new question if the win condition isn't met
    }
}

function celebrateSuccess() {
    console.log("Displaying congratulations message.");
    if (scoreCard) {
        scoreCard.textContent = "Congratulations, you answered 5 in a row correctly!";
        // Temporarily disable the ability to submit a new answer or start a new game
        //if (btnSubmit) btnSubmit.disabled = true;
        //if (buttonStart) buttonStart.style.display = "none";

        setTimeout(() => {
            // Re-enable the submit button and show the start button for a new game
            if (btnSubmit) btnSubmit.disabled = false;
            resetGame();
        }, 3000); // Adjust time as needed for readability.
    }
}




function resetGame() {
    console.log("Game reset!");
    count = 0;
    correctCount = 0;

    if (userAnswer) {
        userAnswer.value = "";
    }
    toggleVisibility(false); 

    // Reset scoreCard back to the initial state after the message was shown
    if (scoreCard) {
        scoreCard.textContent = "Score: 0";
    }

    // Ensure the start button is displayed again for a new game session.
    if (buttonStart) {
        buttonStart.style.display = "block";
    }
}

function toggleVisibility(show) {
    var displayStyle = show ? "block" : "none";
    if (buttonNext)
        buttonNext.style.display = displayStyle;
    if (userAnswer)
        userAnswer.style.display = displayStyle;
    if (btnSubmit)
        btnSubmit.style.display = displayStyle; // Use btnSubmit directly
    if (scoreCard)
        scoreCard.style.display = displayStyle;
    if (question)
        question.style.display = displayStyle;
    if (userAnswer)
        userAnswer.value = "";
    if (scoreCard)
        scoreCard.textContent = "0";
}
function askQuestion() {
    var num1 = Math.floor(Math.random() * 10) + 1;
    var num2 = Math.floor(Math.random() * 10) + 1;
    correctAnswer = num1 * num2; // Update the global variable
    if (question) {
        question.textContent = " ".concat(num1, " and ").concat(num2, "?");
    }
    toggleVisibility(true);
}
// Define the event listener for btnSubmit once, outside askQuestion
if (btnSubmit) {
    btnSubmit.onclick = function () {
        let userAnswerValue = userAnswer ? Number(userAnswer.value) : NaN;
        if (userAnswerValue === correctAnswer) {
            console.log("User answer is correct!");
            count += 1;
            correctCount += 1;
        } else {
            console.log("Incorrect. Please try again.");
            count = 0;
            correctCount = 0;
        }

        checkForWin(); // Control flow based on win condition

        if (scoreCard) scoreCard.textContent = `Score: ${count}`;
        if (userAnswer) userAnswer.value = "";
    };
}



if (buttonStart) {
    buttonStart.addEventListener('click', function () {
        toggleVisibility(true);
        if (buttonStart) {
            buttonStart.style.display = "none";
        }
        askQuestion();
    });
}
