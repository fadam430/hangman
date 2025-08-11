// This script handles the "New Game" button click event
openNewGame(); 




function openNewGame() {
    button = document.getElementById("new-game-btn");
    if (button) {button.addEventListener("click", function() {
        window.location.href = "game.html";
    });
}
}

let currentWord = '';
let guessedLetters = [];
// generate random number and take place in JSON file to get the word
function randomWord() {
    fetch('/assets/js/dictionary.JSON')
    .then(response => response.json())
    .then(data => {
        const words = Object.keys(data);
        currentWord = words[Math.floor(Math.random() * words.length)];
        guessedLetters = [];
        
        // Ensure underscores match the word length 
        const explanation = data[currentWord];
        // Log the current word for debugging
        console.log('Current word:', explanation);
        // Create a string of underscores for the word to guess
        const hideWord = Array(explanation.length).fill('_').join(' ');

        // Display the word to guess
        const wordElement = document.getElementById('word-json');
        if (wordElement) {
            wordElement.textContent = hideWord;
        } 
    })
    .catch(error => {
        console.error('Error fetching the word list:', error);
        
    }); 
    
}
// generate new world when the button is clicked    
let startButton = document.getElementById('start-game-btn');
    if (startButton)
        startButton.addEventListener('click', randomWord);



function guessLetter(letter) {
        if (!currentWord || guessedLetters.includes(letter)) return;
            guessedLetters.push(letter);


        // check if the letter is in the current word
        if (currentWord.includes(letter)) {
            console.log(`Correct! The letter "${letter}" is in the word.`);
        } else {
            console.log(`Wrong! The letter "${letter}" is not in the word.`);
        }
        // update the displayed word
        let display = '';
        for (char of currentWord) {
            display += guessedLetters.includes(char) ? char + ' ' : '_ ';
        }
        const wordElement = document.getElementById('word-json');
        if (wordElement) {
            wordElement.textContent = display.trim(); 
        }

    }

    // listen for keyboard input
document.addEventListener('keydown', function(event) {
    const letter = event.key.toLowerCase();
    if (/^[a-zA-Z]$/.test(letter)) {
        guessLetter(letter);
        console.log('Key pressed:', letter);
    }
});

