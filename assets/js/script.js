// This script handles the "New Game" button click event
openNewGame();

function openNewGame() {
    button = document.getElementById("new-game-btn");
    if (button) {
        button.addEventListener("click", function() {
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
        
        currentWord = data[Math.floor(Math.random() * data.length)].toLowerCase();; // Force the word to be lowercase
        guessedLetters = [];
        
        // Log the current word for debugging
        console.log('Current word:', currentWord); // Changed to log the actual word
        
        // Create a string of underscores for the word to guess
        const hideWord = Array(currentWord.length).fill('_').join(' '); // Fixed: use currentWord.length instead of explanation.length
        
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

// listen for keyboard input
document.addEventListener('keydown', function(event) {
    event.preventDefault(); // Prevent default browser action
    const letter = event.key.toLowerCase();
    if (/^[a-zA-Z]$/.test(letter)) {
        guessLetter(letter);
        console.log('Key pressed:', letter);
    }
});

function guessLetter(letter) {
    if (!currentWord || guessedLetters.includes(letter)) return;
    
    guessedLetters.push(letter);
    
    // check if the letter is in the current word
    if (currentWord.includes(letter)) {
        console.log(`Correct! The letter "${letter}" is in the word.`);
    } else {
        document.getElementById('guessed-letters-list').textContent += letter + ' ';
        console.log(`Wrong! The letter "${letter}" is not in the word.`);
    }
    
    // update the displayed word
    let display = '';
    for (let char of currentWord) { // Added 'let' for proper variable declaration
        display += guessedLetters.includes(char) ? char + ' ' : '_ ';
    }
    
    const wordElement = document.getElementById('word-json');
    if (wordElement) {
        wordElement.textContent = display.trim();
    }
}