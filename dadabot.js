let paragraph = document.querySelector('p');
let button = document.querySelector('button');

function randomizer() {
    let phrases = ['Luiz é calvo', 'Yago era uma goiaba', 'Existe um cabeça de pirâmide'];
    let element = phrases[Math.floor(Math.random() * phrases.length)];

    return element;
}

function buttonRandomPhrase() {
    button.addEventListener("click", () => {
        paragraph.innerText(element);
        paragraph.innerHTML('invisible');
    });
} 