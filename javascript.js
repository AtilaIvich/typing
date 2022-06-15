const txt = document.getElementById('txt');
const changetxt = document.getElementById('changetxt');
var pointerInterval = setInterval(addPointer, 500);
var letterInterval;
var letter = 0;
var str = `ooola beatriz muahahah (sim, seu nome é naice)`.split(''); //default txt

document.addEventListener('click', addLetterInterval);
changetxt.addEventListener('click', addNewTxt);

function addLetterInterval() {
    clearInterval(pointerInterval);
    clearInterval(letterInterval);
    txt.innerText = '';
    letterInterval = setInterval(addLetter, 250); //controls typing speed
}

function addLetter() {
    document.removeEventListener('click', addLetterInterval);
    changetxt.removeEventListener('click', addNewTxt);

    txt.innerText += str[letter] == ' '? '\u00a0' : str[letter];
    letter++;

    if (letter >= str.length) {
        clearInterval(letterInterval);
        pointerInterval = setInterval(addPointer, 500);
    }
}

function addNewTxt() {
    var personaltxt = prompt(`Enter your text.`);
    str = personaltxt.split('');
}

function addPointer() {
    if (txt.innerText[txt.innerText.length - 1] == '_') {
        txt.innerText = txt.innerText.slice(0, -1);
    } else {
        txt.innerText += '_';
    }
}
