const form = document.querySelector('.quiz-form')
const quizbutton =  document.querySelector('#quiz-btn')
const OutputEl = document.querySelector('#output')


const correctanswers = ["90°", "right angled", "true", "5:3", "36"]  


function checkquiz(){
   
    let score=0;
    let index=0;
    const formresults = new FormData(form);
    for(let value of formresults.values()){

        if(value === correctanswers[index]){
            score= score+1;
            
            
    }
   
   index = index + 1;
}

OutputEl.innerText= "Your final score is "+score;
}


quizbutton.addEventListener('click', checkquiz)