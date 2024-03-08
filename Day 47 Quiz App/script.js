const quizData = [
    {
        question: "Which language runs in a web browser ?",
        a: "Java",
        b: "C",
        c: "Javascript",
        d: "python",
        correct: "c",
    },
    {
        question: "What does CSS stands for ?",
        a: "cascading style sheet",
        b: "Ca sa sb",
        c: "cb sb sc",
        d: "cc sc sd",
        correct: "a",
    },
    {
        question: "What does HTML stands for ?",
        a: "Hyper text markup language",
        b: "HTML1",
        c: "HTML3",
        d: "hyper text media langugae",
        correct: "a",
    },
    {
        question: "What year javascript was launched ?",
        a: "1990",
        b: "1994",
        c: "1996",
        d: "1995",
        correct: "d",
    },
];

const quiz_container = document.getElementById("quiz");
const quizHead = document.getElementById("header");
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const btn = document.getElementById("btn");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

var currentQuizCount = 0;
var score = 0;

loadQuiz();

function loadQuiz() {

    const currentQuizData = quizData[currentQuizCount];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let checkedAnswer;
    answerEls.forEach(answerElement => {
        if (answerElement.checked) {
            checkedAnswer = answerElement.id;
            // console.log(checkedAnswer)
        }
    });
    return checkedAnswer;
}

btn.addEventListener("click", () => {
    const answer = getSelected();
    // console.log(answer) this gives same o/p as checkedAnswer variable inside getSelected method

    if (answer) {
        if (answer === quizData[currentQuizCount].correct) {
            score++;
        }

        currentQuizCount++;
        // console.log(currentQuizCount)
        if (currentQuizCount < quizData.length) {
            loadQuiz();
        } else {
            quiz_container.innerHTML =
                `
                <h2>You have answered ${score} out of ${quizData.length} questions</h2>
                <button id="btn" onclick="location.reload()">Reload</button>
            `
        }
    }
})
