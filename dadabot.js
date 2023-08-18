let paragraph = document.getElementById('answer');
let button = document.querySelector('button');

function randomizer() {
    let phrases = ['When a rubber band is placed in the fridge, it causes the polymers to relax. This keeps the band from breaking down as fast as it normally does.', 'There are 293 ways to make change for a dollar.', 'The Grand Theft Auto franchise has lawsuits that total over $1 billion.', 'All clocks in Pulp Fiction are set to 4:20.', 'The eye of an ostrich is bigger than its brain.', 'A dime has 118 ridges on its edge.', 'On average, a secretary will use its left hand for 56% of what they type on a keyboard.', 'The largest pair of eyes in the world belongs to the giant squid.'];
    let element = phrases[Math.floor(Math.random() * phrases.length)];

    return element;
}

function randomizedText() {
    paragraph.innerText = randomizer();
}

button.addEventListener("click", randomizedText);