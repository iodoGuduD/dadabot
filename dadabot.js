let paragraph = document.getElementById('answer');
let button = document.querySelector('button');

function randomizer() {
    let phrases = ['When a rubber band is placed in the fridge, it causes the polymers to relax. This keeps the band from breaking down as fast as it normally does.', 'There are 293 ways to make change for a dollar.', 'The Grand Theft Auto franchise has lawsuits that total over $1 billion.'];
    let element = phrases[Math.floor(Math.random() * phrases.length)];

    return element;
}

function randomizedText() {
    paragraph.innerText = randomizer();
}

button.addEventListener("click", randomizedText);