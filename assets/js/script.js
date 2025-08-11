


openNewGame();

    
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

    
        document.getElementById('word-json').textContent = explanation;
        
    })
    .catch(error => {
        console.error('Error fetching the word list:', error);
        
    }); 
    
}
// generate new world when the button is clicked    
let startButton = document.getElementById('start-game-btn');
    if (startButton)
        startButton.addEventListener('click', randomWord);



