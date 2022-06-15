const txt = document.getElementById('txt');
var pointerInterval = setInterval(addPointer, 500);
var letterInterval;
var letter = 0;
var str = `just a simple text`.split('');

document.addEventListener('click', addLetterInterval);

function addLetterInterval() {
    clearInterval(pointerInterval);
    clearInterval(letterInterval);
    txt.innerText = '';
    letterInterval = setInterval(addLetter, 200); //controls typing speed
}

function addLetter() {
    txt.innerText += str[letter] == ' '? '\u00a0' : str[letter];
    letter++;

    if (letter >= str.length) {
        document.removeEventListener('click', addLetterInterval);
        clearInterval(letterInterval);
        pointerInterval = setInterval(addPointer, 500);
    }
}

function addPointer() {
    if (txt.innerText[txt.innerText.length - 1] == '_') {
        txt.innerText = txt.innerText.slice(0, -1);
    } else {
        txt.innerText += '_';
    }
}