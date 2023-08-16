let paragraph = document.getElementById('answer');
let button = document.querySelector('button');

function randomizer() {
    let phrases = ['Luiz é calvo', 'Yago era uma goiaba', 'Existe um cabeça de pirâmide'];
    let element = phrases[Math.floor(Math.random() * phrases.length)];

    return element;
}

function randomizedText() {
    paragraph.innerText = randomizer();
    paragraph.classList.remove('invisible');
}

button.addEventListener("click", randomizedText);