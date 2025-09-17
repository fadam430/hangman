
document.addEventListener('DOMContentLoaded', function() {
    openNewGame();
    handleLetterInput();
});
// This script handles the "New Game" button click event
function openNewGame() {
    let button = document.getElementById("new-game-btn");
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
    'assets/images/base.png', // Base image
    'assets/images/fail1.png',
    'assets/images/fail2.png',
    'assets/images/fail3.png',  
    'assets/images/fail4.png',
    'assets/images/fail5.png',
    'assets/images/fail6.png',
    'assets/images/fail7.png',
]

// WIN condition 
function checkWin() {
    return currentWord.split('').every(letter => guessedLetters.includes(letter));
}

// LOST condition
function checkLoss() {
    return wrongGuesses >= maxWrongGuesses;
}

//  Reset game function
function resetGame() {
    currentWord = '';
    guessedLetters = [];
    wrongGuesses = 0;
    gameOver = false;
    
    // Reset visual elements
    const wordElement = document.getElementById('word-json');
    if (wordElement) {
        wordElement.style.color = '#333'; // Reset to original color
        wordElement.style.fontWeight = 'normal'; // Reset font weight
        wordElement.style.backgroundImage = 'none'; // Reset background
        wordElement.textContent = ''; // Clear content
    }
    
    // Reset guessed letters display
    const guessedList = document.getElementById('guessed-letters-list');
    if (guessedList) {
        guessedList.textContent = '';
    }
    
    // Reset hangman image to base
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
    // start a new game
    
            
    // visual feedback for win
    setTimeout(() => {
                // Show Bootstrap modal
                const modalElement = document.querySelector('.modal');
                const winModal = new bootstrap.Modal(modalElement);
                winModal.show();
                
                // Change modal body text
                const winBody = document.getElementsByClassName('modal-body')[0];
                winBody.textContent = 'Congratulations!'.toLocaleUpperCase();
                
            
        // start a new game
        const newGameButton = document.getElementsByClassName('btn btn-primary')[0];
        newGameButton.addEventListener('click', () => {
            resetGame(); //  Reset game first
            randomWord(); // Then start new word
            // Close the modal
            winModal.hide();
        });

        
    },100 );
}

// Handle loss condition
function handleLoss() {
    gameOver = true;
    // this console log for debugging purposes
    console.log('Game Over! The correct word was:', currentWord);

    const wordElement = document.getElementById('word-json');
    if (wordElement) {
        //  Show the actual word instead of setting background image
        wordElement.textContent = currentWord.toUpperCase(); // Reveal the word
        wordElement.style.color = 'red';
        wordElement.style.fontWeight = 'bold';
    }
    
    // visual feedback for loss
    setTimeout(() => {
        
                const modalElement = document.querySelector('.modal');
                const lossModal = new bootstrap.Modal(modalElement);
                lossModal.show();
    
                // Change modal body text
                const lossBody = document.getElementsByClassName('modal-body')[0];
                lossBody.textContent = 'Game Over!'.toUpperCase();

                const newGameButton = document.getElementsByClassName('btn btn-primary')[0];
                    newGameButton.addEventListener('click', () => {
                    resetGame(); //  Reset game first
                    randomWord(); // Then start new word
                    // Close the modal
                    lossModal.hide();
                });
        
        
            
        
    }, 100);
}

function updateHangmanImages() {
    if (wrongGuesses >= 0 && wrongGuesses < hangmanImages.length) {
        const imageElement = document.getElementById('fail_images');
        if (imageElement) {
            imageElement.src = hangmanImages[wrongGuesses];
            console.log(`Updated image to: ${hangmanImages[wrongGuesses]} (Wrong guesses: ${wrongGuesses})`);
        }
    }
}

// Update guessed letters display function
function updateGuessedLettersDisplay() {
    const guessedList = document.getElementById('guessed-letters-list');
    if (guessedList) {
        // Display all guessed letters
        guessedList.textContent = guessedLetters.join(', ').toUpperCase();
    }
}

// generate random number and take place in JSON file to get the word
async function randomWord() {
    
    try {
        let response = await fetch('assets/js/dictionary.JSON');
        let data = await response.json();

        currentWord = data[Math.floor(Math.random() * data.length)].toLowerCase();
        guessedLetters = [];
        gameOver = false; // Reset game over flag

        // Show the guessed-letters-list element
        const guessedList = document.getElementById('guessed-letters-list');
        if (guessedList) {
            guessedList.style.display = 'inline';
            guessedList.textContent = ''; // Clear previous guesses
        }
        
        // Log the current word for debugging
        console.log('Current word:', currentWord);
        
        // Create a string of underscores for the word to guess
        const hideWord = Array(currentWord.length).fill('_').join(' ');
        
        // Display the word to guess
        const wordElement = document.getElementById('word-json');
        if (wordElement) {
            wordElement.textContent = hideWord;
            wordElement.style.color = '#333'; //  Reset color
            wordElement.style.fontWeight = 'bold'; //  Reset font weight
        }
        
        // Reset hangman image to base
        updateHangmanImages();
    
    } catch(error) {
        console.error('Error fetching the word list:', error);
    };
}

// generate new world when the button is clicked
let startButton = document.getElementById('start-game-btn');
if (startButton) {
    startButton.addEventListener('click', function() {
        resetGame(); //  Reset before starting new game
        randomWord();
        handleLetterInput();
    });
}

// letter input mobile and desktop

function handleLetterInput() {
    const input = document.getElementById('letterInput');
    

     // Desktop keyboard handling
    document.addEventListener('keydown', function(e) {
        if (gameOver) return;
        const letter = e.key.toLowerCase();
        if (/^[a-z]$/.test(letter)) {
            e.preventDefault();
            guessLetter(letter);
        }
    });
    
    // Mobile input handling
    if (input) {
        input.addEventListener('input', function(e) {
            const letter = e.target.value.toLowerCase();
            e.target.value = '';
            if (letter && /[a-z]/.test(letter)) {
                guessLetter(letter);
            }
        });
    }
        // Also keep your desktop keyboard support
        document.addEventListener('keydown', function(e) {
            if (gameOver) return;
            const letter = e.key.toLowerCase();
            if (/^[a-z]$/.test(letter)) {
                e.preventDefault();
                guessLetter(letter);
            }
        });
    }



function guessLetter(letter) {
    if (!currentWord || guessedLetters.includes(letter) || gameOver) return;
    
    guessedLetters.push(letter);
    
    // check if the letter is in the current word
    if (currentWord.includes(letter)) {
        console.log(`Correct! The letter "${letter}" is in the word.`);
        
        // Check win condition after correct guess
        if (checkWin()) {
            // Update display one final time before showing win message
            updateWordDisplay();
            handleWin();
            return;
        }
    } else {
        wrongGuesses++;
        console.log(`Wrong! The letter "${letter}" is not in the word.`);
        
        // Update hangman image after wrong guess
        updateHangmanImages();
        
        // Check loss condition after wrong guess
        if (checkLoss()) {
            handleLoss();
            return;
        }
    }
    
    // update the displayed word
    updateWordDisplay();
    
    // Update guessed letters display
    updateGuessedLettersDisplay();
}

//  update word display
function updateWordDisplay() {
    let display = '';
    for (let char of currentWord) {
        display += guessedLetters.includes(char) ? char + ' ' : '_ ';
    }
    
    const wordElement = document.getElementById('word-json');
    if (wordElement) {
        wordElement.textContent = display.trim();
    }
}
function getCurrentWord() {
    return currentWord;
}
// Only export for Node.js/testing, not in the browser

    module.exports = {
        guessedLetters,
        guessLetters,
        wrongGuesses,
        gameOver,
        maxWrongGuesses,
        hangmanImages,
        randomWord,
        guessLetter,
        resetGame,
        updateWordDisplay,
        updateHangmanImages,
        checkWin,
        checkLoss,
        handleWin,
        handleLoss,
        updateGuessedLettersDisplay,
        openNewGame,
        
    };
