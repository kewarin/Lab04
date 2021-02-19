
function toggleVis(event){

    isVis = !isVis;
    if(isVis) {
        A.classList.remove('select');
        B.classList.remove('select');
        C.classList.remove('select');
        D.classList.remove('select');
    }
    else {
        A.classList.add('select');   
        B.classList.add('select');  
        C.classList.add('select');  
        D.classList.add('select');  
    }
}

let isVis = false;


const A = document.querySelector('#A');
const B = document.querySelector('#B');
const C = document.querySelector('#C');
const D = document.querySelector('#D');
let i = 0 ;

A.addEventListener('click', toggleVis);
B.addEventListener('click', toggleVis);
C.addEventListener('click', toggleVis);
D.addEventListener('click', toggleVis);