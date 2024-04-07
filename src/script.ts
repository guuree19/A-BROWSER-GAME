let quizWrapper = document.getElementById("quiz_wraper");
let parentQuestion = document.getElementById("parent_question");
let question = document.getElementById("question");
let buttonNext = document.getElementById("btn_next") as HTMLButtonElement | null;
let buttonStart = document.getElementById("btn_Start") as HTMLButtonElement | null;
let scoreCard = document.getElementById("scoreCard") as HTMLSpanElement | null;
let userAnswer = document.getElementById("user_answer") as HTMLInputElement | null;
let btnSubmit = document.getElementById("btn_submit") as HTMLButtonElement | null; // Moved here for single event listener setup
let count: number = 0;
let correctCount: number = 0;
let correctAnswer: number = 0; // Now a global variable

function resetGame() {
    console.log("Game reset!");
    count = 0;
    correctCount = 0;
    if (scoreCard) scoreCard.textContent = "0";
    if (userAnswer) userAnswer.value = "";
    toggleVisibility(false);
    if (buttonStart) buttonStart.style.display = "block";
}

function toggleVisibility(show: boolean) {
    const displayStyle = show ? "block" : "none";
    if (buttonNext) buttonNext.style.display = displayStyle;
    if (userAnswer) userAnswer.style.display = displayStyle;
    if (btnSubmit) btnSubmit.style.display = displayStyle; // Use btnSubmit directly
    if (scoreCard) scoreCard.style.display = displayStyle;
    if (question) question.style.display = displayStyle;
    if (userAnswer) userAnswer.value = "";
    if (scoreCard) scoreCard.textContent = "0";
}

function askQuestion() {
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    correctAnswer = num1 * num2; // Update the global variable

    if (question) {
        question.textContent = ` ${num1} X ${num2}?`;
    }
    toggleVisibility(true);
}

// Define the event listener for btnSubmit once, outside askQuestion
if (btnSubmit) {
    btnSubmit.onclick = function() {
        let userAnswerValue: number = userAnswer ? Number(userAnswer.value) : NaN;
        if (userAnswerValue === correctAnswer) {
            console.log("User answer is correct!");
            count += 1;
            correctCount += 1;
            if (correctCount === 5) {
                resetGame();
            } else {
                askQuestion();
            }
        } else {
            console.log("Incorrect. Please try again.");
            count = 0;
            correctCount = 0;
            askQuestion();
        }
        if (scoreCard) scoreCard.textContent = `Score: ${count}`;
        if (userAnswer) userAnswer.value = "";
    };
}

if (buttonStart) {
    buttonStart.addEventListener('click', function() {
        toggleVisibility(true);
        if (buttonStart) {
            buttonStart.style.display = "none";
        }
        askQuestion();
    });
}
