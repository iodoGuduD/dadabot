let paragraph = document.querySelector('p');
let button = document.querySelector('button');

let phrases = ['Luiz é calvo', 'Yago era uma goiaba', 'Existe um cabeça de pirâmide'];
let element = phrases[Math.floor(Math.random() * phrases.length)];

function buttonRandomPhrase() {
    button.addEventListener("click", () => {
        paragraph.innerText(`${element}`);
        paragraph.innerHTML('invisible');
    });
} 