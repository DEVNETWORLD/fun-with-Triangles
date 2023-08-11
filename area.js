const inputvalue = document.querySelectorAll('.input-value');
const areabutton = document.querySelector('#check-btn-area');
const outputarea = document.querySelector('#output');

function baseHeightMul(a ,b){
    const area = 0.5*a*b;
    return area;
}

function calculateArea()
{
    const area = baseHeightMul(Number(inputvalue[0].value) , Number(inputvalue[1].value))
    outputarea.innerText= area;
}




areabutton.addEventListener("click", calculateArea);