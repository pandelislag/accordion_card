const questionOne=document.querySelector('.question-1');
const answerOne=document.querySelector('.answerOne');
const questionTwo=document.querySelector('.question-2');
const answerTwo=document.querySelector('.answerTwo');
const questionThree=document.querySelector('.question-3');
const answerThree=document.querySelector('.answerThree');
const questionFour=document.querySelector('.question-4');
const answerFour=document.querySelector('.answerFour');
const questionFive=document.querySelector('.question-5');
const answerFive=document.querySelector('.answerFive');

questionOne.addEventListener('click', show)
questionTwo.addEventListener('click', showtwo)
questionThree.addEventListener('click', showthree)
questionFour.addEventListener('click', showfour)
questionFive.addEventListener('click', showfive)


function show(e) {
    
    e.target=answerOne.classList.toggle('answer');    
}
function showtwo(e){
    e.target=answerTwo.classList.toggle('answer');
}
function showthree(e){
    e.target=answerThree.classList.toggle('answer');
}
function showfour(e){
    e.target=answerFour.classList.toggle('answer');
}
function showfive(e){
    e.target=answerFive.classList.toggle('answer');
}

