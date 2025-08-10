function openNewGame() {
  button = document.getElementById("new-game-btn");
  button.addEventListener("click", function() {
    window.location.href = "/game.html";
  });
}
document.addEventListener("DOMContentLoaded", function() {
  openNewGame();
});
// This script handles the "New Game" button click event
// and redirects the user to the game page when clicked.    
// It ensures that the button is only active after the DOM is fully loaded.

