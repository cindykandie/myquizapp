const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const nextButton = document.getElementById('next-btn')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex;
 
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click',()=>{
    currentQuestionIndex++
    setNextQuestion()
})

function startGame(){
    startButton.classList.add('hide')
    shuffledQuestions=questions.sort(()=> Math.random() - .5)
    currentQuestionIndex=0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion(){
resetState()
showQuestion(shuffledQuestions[currentQuestionIndex])
answerButtonsElement.classList.remove('answered')

}

function showQuestion(question){
questionElement.innerText = question.question
question.answers.forEach(answer=>{
    const button = document.createElement('button')
    button.innerText=answer.text
    button.classList.add('btn')
    if(answer.correct){
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
})
}


function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
        
    }
}
function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body,correct)
    Array.from(answerButtonsElement.children).forEach(button =>{
    setStatusClass(button, button.dataset.correct)
    })

    if (shuffledQuestions.length > currentQuestionIndex + 1){
    nextButton.classList.remove('hide')
    answerButtonsElement.classList.add('answered')
}else{
    startButton.innerText='Restart'
    startButton.classList.remove('hide')
}
}
function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    } else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')

}
let questions = [
    {
        question: "What is 2+2?",
        answers:[
           {text:'4',correct: true},
            {text:"22",correct:false}
        ]
    },
    {
        question: "Describe me with one word",
        answers:[
           { text:'Cute',correct: true }, 
           { text:"Skillful",correct: true },
           { text:"Wise",correct: true },
           { text:"Beautiful",correct: true }
        
        ]
    },
    {
        question: "What is my age?",
        answers:[
           { text:'13',correct: false },
            { text:"22",correct: true },
            { text:"21",correct: false },
            { text:"30",correct: false }
        ]
    }
]
