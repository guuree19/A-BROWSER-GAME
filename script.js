let multiplier = Math.floor((Math.random() * 100) + 1);
let multiplicant = Math.floor((Math.random() * 100) + 1);

let answer = multiplier * multiplicant

let question = prompt("what is the product of  : " + multiplier  +  " X "  +  multiplicant + " ? ");
let student_answer = prompt("enter Answer here: " )

document.body.append(multiplier)
document.body.append(multiplicant)

// // ckeck the answer:

// if(student_answer === answer){

//     prompt("you are correct,congratulations")
// }else {prompt("not right, the answer is:"  + answer  )}

let questions = document.addEventListener("click", FiFunction);

    console.log(answer)

    function FiFunction() {
      document.getElementById("question").innerHTML = "questions:";
    //   let question = prompt("what is the product of  : " + multiplier  +  " X "  +  multiplicant + " ? ");
    //   let student_answer = prompt("enter Answer here: " )
    // 
}
    FiFunction();

