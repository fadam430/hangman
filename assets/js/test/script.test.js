
/**
 * @jest-environment jsdom
 */


import { guessedLetters, wrongGuesses, gameOver, guessLetters, resetGame } from '../script.js';

// Mock fetch for randomWord function
global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(['test', 'word', 'game', 'javascript'])
}));

beforeEach(() => {
    // Reset game state before each test
    //currentWord = '';
    guessLetters.length = 0; // Clear the array without losing reference
    wrongGuesses = 0;
    gameOver = false;
    document.body.innerHTML = `
        <div id="word-json" style="color: #333;"></div>
        <div id="guessed-letters-list"></div>   
        <img id="fail_images" src="assets/images/base.png" />
        <button id="start-game-btn"></button>
        <button id="new-game-btn"></button>
    `;
    resetGame();
});

test('resetGame reset all variables and UI', () => {
    guessLetter.push('a');
    wrongGuesses = 3;
    gameOver = true;
    document.getElementById('word-json').style.color = 'red';
    resetGame();
    expect(guessedLetters).toEqual([]);
    expect(wrongGuesses).toBe(0);
    expect(gameOver).toBe(false);
    
    
});