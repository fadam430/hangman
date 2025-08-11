
document.addEventListener("DOMContentLoaded", function() {
    openNewGame();
    randomWord(); // Fetch a random word when the DOM is fully loaded
});

// This script handles the "New Game" button click event
// and redirects the user to the game page when clicked.    
// It ensures that the button is only active after the DOM is fully loaded.

function openNewGame() {
    button = document.getElementById("new-game-btn");
    if (button) {button.addEventListener("click", function() {
        window.location.href = "game.html";
    });
}
}

function randomWord() {
    fetch('/assets/js/dictionary.JSON')
    .then(response => response.json())
    .then(data => {
        const words = Object.keys(data);
        const randomWord = words[Math.floor(Math.random() * words.length)];
        const explanation = data[randomWord];

        document.getElementById('word-json').textContent = randomWord;
        document.getElementById('explanation').textContent = explanation;
        
    })
    .catch(error => {
        console.error('Error fetching the word list:', error);
        
    });

    document.getElementById('start-game-btn').addEventListener('click', randomWord()); 
}





