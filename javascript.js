const txt = document.getElementById('txt');
var interval;
var letter = 0;

var str = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur unde assumenda deleniti iure ad error reiciendis cumque quis officia voluptatibus. Impedit, animi non repudiandae totam quia harum officiis blanditiis sunt, amet modi iste debitis ipsum laboriosam numquam neque molestiae! Illo ipsa ratione odit aut fuga facilis dolorem iusto. Porro, optio?'.split('');

document.addEventListener('click', addInterval);

function addInterval() {
    clearInterval(interval);
    interval = setInterval(addLetter, 100);
}

function addLetter() {
    txt.innerText += str[letter] == ' '? '\u00a0' : str[letter];
    letter++;

    if (letter == str.length) {
        document.removeEventListener('click', addInterval);
        clearInterval(interval);
    }
}