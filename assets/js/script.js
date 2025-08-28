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
let wrongGuesses = 0;
let maxWrongGuesses = 7; // Maximum number of wrong guesses allowed
let gameOver = false; // Track if game is over

const hangmanImages = [
    '/assets/images/base.png', // base image, no fails
    '/assets/images/fail1.png',
    '/assets/images/fail2.png',
    '/assets/images/fail3.png',  
    '/assets/images/fail4.png',
    '/assets/images/fail5.png',
    '/assets/images/fail6.png',
    '/assets/images/fail7.png',
]

// WIN condition 
function checkWin() {
    return currentWord.split('').every(letter => guessedLetters.includes(letter));
}

// LOST condition
function checkLoss() {
    return wrongGuesses >= maxWrongGuesses;
}

// Reset game state
function resetGame() {
    currentWord = '';
    guessedLetters = [];
    wrongGuesses = 0;
    gameOver = false;

    const wordElement = document.getElementById('word-json');
    if (wordElement) {
        wordElement.style.color = '#333'; // Reset to default color
        wordElement.style.fontWeight = 'bold'; // Reset to default font weight
        wordElement.style.backgroundImage = 'none'; // Reset background image
        wordElement.textContent = ''; // Clear the displayed word
    }

    // reset guessed letters display
    const guessedList = document.getElementById('guessed-letters-list');
    if (guessedList) {
        guessedList.textContent = '';
    }   

    // Reset hangman image
    const imageElement = document.getElementById('fail_images');
    if (imageElement) {
        imageElement.src = hangmanImages[0]; // Reset to base image
    } 
}

// Handle win condition
function handleWin() {
    gameOver = true;
    // this console log for debugging purposes
    console.log('Congratulations! You guessed the word:', currentWord);

    const wordElement = document.getElementById('word-json');
    if (wordElement) {
        wordElement.style.color = 'green';
        wordElement.style.fontWeight = 'bold';
    }

    // visual feedback for win
    setTimeout(() => {
        
        // start a new game
        if (confirm('Do you want to play again?')) {
            resetGame();
            randomWord();
        }
    }, 500);
}

// Handle loss condition
function handleLoss() {
    gameOver = true;
    // this console log for debugging purposes
    console.log('Game Over! The correct word was:', currentWord);

    const wordElement = document.getElementById('word-json');
    if (wordElement) {
        wordElement.style.backgroundImage = '/assets/images/game_over.png';
        
    }
    // visual feedback for loss
    setTimeout(() => {
        alert('GAME OVER! You guessed the word: ' + currentWord);
        // start a new game
        if (confirm('Do you want to play again?')) {
            resetGame();
            randomWord();
        }
    }, 500);
}

function updateHangmanImages() {
    if (wrongGuesses >= 0 && wrongGuesses < hangmanImages.length) {
    document.getElementById('fail_images').src = hangmanImages[wrongGuesses];
    }
    
}

// generate random number and take place in JSON file to get the word
function randomWord() {
    wrongGuesses = 0;
    updateHangmanImages(); // Reset the hangman image to the base image

    fetch('/assets/js/dictionary.JSON')
    .then(response => response.json())
    .then(data => {
        
        currentWord = data[Math.floor(Math.random() * data.length)].toLowerCase(); // Force the word to be lowercase
        guessedLetters = [];
        

         // Show the guessed-letters-list element
        const guessedList = document.getElementById('guessed-letters-list');
        if (guessedList) {
            guessedList.style.display = 'inline';
            guessedList.textContent = ''; // Clear previous guesses
        }
        
        
        // Log the current word for debugging
        console.log('Current word:', currentWord); // Changed to log the actual word
        
        // Create a string of underscores for the word to guess
        const hideWord = Array(currentWord.length).fill('_').join(' '); 
        
        // Display the word to guess
        const wordElement = document.getElementById('word-json');
        if (wordElement) {
            wordElement.textContent = hideWord;
        }
    })
    .catch(error => {
        console.error('Error fetching the word list:', error);
    });
     // Reset wrong guesses
     // Update the hangman image to the base image
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
    if (!currentWord || guessedLetters.includes(letter)|| gameOver) return;
    guessedLetters.push(letter);
    
    
    // check if the letter is in the current word
    if (currentWord.includes(letter)) {
        console.log(`Correct! The letter "${letter}" is in the word.`);
        
        if (checkWin()) {
            handleWin();
            return
        }
    } else {
        wrongGuesses++;
        // update the hangman image based on wrong guesses
        document.getElementById('guessed-letters-list').textContent += letter + ' ';
        console.log(`Wrong! The letter "${letter}" is not in the word.`);
        // lost condition
        if (checkLoss()) {
            handleLoss();
            return
        }
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
    updateHangmanImages();
}