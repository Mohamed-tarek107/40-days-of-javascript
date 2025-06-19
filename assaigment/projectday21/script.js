const quizData = [
  {
      question: "What does DOM stand for?",
      options: [
          "Document Order Model",
          "Document Object Model",
          "Data Object Method",
          "Direct Object Management"
      ],
      correct: 1
    },
     {
      question: "Which method selects by ID?",
      options: [
        "getElementById()",
        "querySelectorAll()",
        "getElement()",
        "getElementsByClassName()"
      ],
      correct: 0
    },
    {
      question: "Which event fires on input change?",
      options: ["click", "submit", "change", "keydown"],
      correct: 2
    }
];
//sort takes a compreator function
let questions = [...quizData].sort(() => Math.random() - 0.5)
let currentQuestion = 0;
let score = 0;
let timer;
let timeleft;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const timerEl = document.getElementById("timer");
const resultEl = document.getElementById("result");

function loadQuestion() {
    clearInterval(timer);
    timeleft = 10;
    updateTimer();
    timer = setInterval(countdown, 1000)//one second
    const q = questions[currentQuestion];
    questionEl.textContent = `Question ${currentQuestion + 1}. ${q.question}`
    optionsEl.innerHTML = "" //refreshes each time so options will be deleted

    q.options.forEach((option, index) => {
      const btn = document.createElement("button")
      btn.classList.add("option-btn")
      btn.textContent = option
      optionsEl.appendChild(btn);
      btn.addEventListener("click", () => selectAnswer(index, true) )
       
    });

    nextBtn.style.display = "none"
  }

  function countdown(){
    timeleft--;
    updateTimer();
    if(timeleft === 0){
      clearInterval(time)
      selectAnswer(questions[currentQuestion]?.correct, false)
    }
  }

  function updateTimer(){
    timerEl.textContent = `⏱️ ${timeleft}`;
  }

  function selectAnswer(index, shouldScore){
    clearInterval(timer);
    const q = questions[currentQuestion]
    const buttons = document.querySelectorAll('.option-btn')
    buttons.forEach(btn => btn.disabled = true);
    if(index === q.correct){
      buttons[index].classList.add("correct")
      shouldScore && score++;
    }else{
      buttons[index].classList.add("wrong");
      buttons[q.correct].classList.add("correct")
    }

    nextBtn.style.display = "inline-block";
  }

  nextBtn.addEventListener("click", () => {
    currentQuestion++;

    if(currentQuestion < questions.length){
      loadQuestion()
    }else{
      //show results
      showResult();
    }
  })


  function showResult(){
    nextBtn.style.display = "none"
    const highScore = localStorage.getItem("quizhighscore") || 0;

    const isNew = score > highScore;
    if(isNew){
      localStorage.setItem("quizhighscore", score)
    }
    resultEl.innerHTML= `
    <h2>Hurray!!!! Quiz Completed</h2>
    <p>You Have scored ${score} out of ${questions.length} questions</p>
    <p>Highest score: ${Math.max(score, highScore)}</P>
    ${isNew ? "<p> new highscore!!! </p>" : ""}
    <button onclick="location.reload()">Restart Quiz!</button>
    `
  }
  loadQuestion();