function visibility(event) {
    const de = document.querySelector('.details');
    const text = event.currentTarget.querySelector('span');

    isVis = !isVis;
    if(isVis) {
        de.classList.remove('hidden');
        text.textContent = '   Hide details';
    }
    else {
        de.classList.add('hidden');
        text.textContent = '   Show details';        
    }
}

let isVis = false;

const detailToggle = document.querySelector('.show_details');
detailToggle.addEventListener('click',visibility);