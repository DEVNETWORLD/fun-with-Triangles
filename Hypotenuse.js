const  sideinput = document.querySelectorAll('.input-side');
const hypobutton = document.querySelector('#check-btn-hypo');
const outputVal =  document.querySelector('#output');


function squaresumofsides(a,b)
{
    const sqrtsums = a*a + b*b;
    return  sqrtsums ;
}

function calculateHypotenus(){
    const sqrtsum = squaresumofsides(Number(sideinput[0].value),Number(sideinput[1].value))
    const result = Math.sqrt(sqrtsum);
    console.log(result);
    outputVal.innerText= result;
}




hypobutton.addEventListener("click",  calculateHypotenus)