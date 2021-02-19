function onOuter(){
    outer.classList.add('selected');
}

function onInner(){
    inner.classList.add('selected');
}

function onReset() {
    inner.classlist.remove('selected');
    outer.classlist.remove('selected');
}

const outer = document.querySelector('#outer');
const inner = document.querySelector('#inner');
outer.addEventListener('click', onOuter);
inner.addEventListener('click', onInner);

const reset = document.querySelector('button');
reset.addEventListener('click', onReset);