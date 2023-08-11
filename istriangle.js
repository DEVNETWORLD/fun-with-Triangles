const angles = document.querySelectorAll('.angle-input-val');

const anglecheck = document.querySelector('#check-trn-btn')
const outputval = document.querySelector('#output')


function checksumofangles(angle1, angle2, angle3){
    const sumofangles = angle1 + angle2 + angle3;
    return sumofangles;
}




function checkiftriangle() {
    const sumofangles =  checksumofangles(Number(angles[0].value), Number(angles[1].value), Number(angles[2].value))
    if( sumofangles === 180){
        outputval.innerText="It's a Triangle";
    }
    else {
        outputval.innerText="It's not a Triangle";
    }
    console.log(sumofangles);

} 

anglecheck.addEventListener('click', checkiftriangle)