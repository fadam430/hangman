
/**
 * @jest-environment jsdom
 */

const hangManTest = require('../script.js');
const { 
    //getCurrentWord,
    
    guessedLetters,
    wrongGuesses,
    gameOver,
    // maxWrongGuesses,
    // hangmanImages,
    // randomWord,
    guessLetters,
    resetGame,
    // updateWordDisplay,
    // updateHangmanImages,
    // checkWin,
    // checkLoss,
    // handleWin,
    // handleLoss,
    // updateGuessedLettersDisplay,
    // openNewGame 
} = hangManTest;

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
    expect(guessLetters).toEqual([]);
    expect(wrongGuesses).toBe(0);
    expect(gameOver).toBe(false);
    
    
})








// old test 

// Mock setup utilities
// function setupTestEnvironment() {
    
//     const mockElements = {
//         'word-json': { textContent: '', style: {} },
//         'guessed-letters-list': { textContent: '', style: {} },
//         'fail_images': { src: '', style: {} },
//         'start-game-btn': { addEventListener: jest.fn(), click: jest.fn() },
//         'new-game-btn': { addEventListener: jest.fn() }
//     };
    
//     global.document = { getElementById: jest.fn(id => mockElements[id] || null) };
//     global.fetch = jest.fn(() => Promise.resolve({
//         json: () => Promise.resolve(['test', 'word', 'game', 'javascript'])
//     }));
    
//     return mockElements;
// }

// describe('Hangman Game Core Tests', () => {
//     let mockElements;
    
//     beforeEach(() => {
//         // Reset game state
//         //currentWord = '';
//        // guessedLetters = [];
//         //wrongGuesses = 0;
//        // gameOver = false;
        
//         mockElements = setupTestEnvironment();
//         jest.clearAllMocks();
//     });

    

//     describe('Word Management', () => {
//         test('should fetch and set random word', async () => {
//     // Wrap in a Promise that resolves when the DOM is updated
//     await new Promise(resolve => {
//         // Patch updateWordDisplay to resolve when called
//         const originalUpdateWordDisplay = updateWordDisplay;
//         updateWordDisplay = function() {
//             originalUpdateWordDisplay();
//             resolve();
//         };
//         randomWord();
//     });

//     const testWord = getCurrentWord();
//     console.log('Fetched word:', testWord);
//     expect(fetch).toHaveBeenCalledWith('/assets/js/dictionary.JSON');
//     expect(['test', 'word', 'game', 'javascript']).toContain(testWord);
//     expect(mockElements['word-json'].textContent).toMatch(/^(_ ){3}_$/); // Pattern for 4-letter word
// });

        

//         //test('should display word correctly with guessed letters', () => {
//            // currentWord = 'hello';
//            // guessedLetters = ['h', 'l', 'o'];
            
//            // updateWordDisplay();
//            // 
//            //expect(mockElements['word-json'].textContent).toBe('h _ l l o');
//         //});
//     });

//     describe('Letter Guessing Mechanics', () => {
//         beforeEach(async () => {
//             currentWord = 'test';
//             updateWordDisplay(); // Initialize display
//         });

//         test('should handle correct letter guess', () => {
//             guessLetter('t');
            
//             expect(guessedLetters).toContain('t');
//             expect(wrongGuesses).toBe(0);
//             expect(mockElements['word-json'].textContent).toBe('t _ _ t');
//             expect(mockElements['guessed-letters-list'].textContent).toBe('T');
//         });

//         test('should handle incorrect letter guess', () => {
//             guessLetter('x');
            
//             expect(guessedLetters).toContain('x');
//             expect(wrongGuesses).toBe(1);
//             expect(mockElements['fail_images'].src).toContain('fail1.png');
//             expect(mockElements['guessed-letters-list'].textContent).toBe('X');
//         });

        

//         test('should block guessing when game is over', () => {
//             gameOver = true;
//             const initialLength = guessedLetters.length;
            
//             guessLetter('t');
            
//             expect(guessedLetters).toHaveLength(initialLength);
//         });
//     });

//     describe('Win/Loss Conditions', () => {
//         test('should detect win correctly', () => {
//             currentWord = 'cat';
//             guessedLetters = ['c', 'a', 't'];
            
//             expect(checkWin()).toBe(true);
            
//             guessedLetters = ['c', 'a']; // Missing letter
//             expect(checkWin()).toBe(false);
//         });

//         test('should detect loss correctly', () => {
//             wrongGuesses = 7;
//             expect(checkLoss()).toBe(true);
            
//             wrongGuesses = 6;
//             expect(checkLoss()).toBe(false);
//         });

//         test('should handle win scenario properly', () => {
//             global.alert = jest.fn();
//             global.confirm = jest.fn(() => true);
//             currentWord = 'hi';
            
//             guessLetter('h');
//             guessLetter('i'); // This should trigger win
            
//             expect(gameOver).toBe(true);
//             expect(mockElements['word-json'].style.color).toBe('green');
//         });

//         test('should handle loss scenario properly', () => {
//             global.alert = jest.fn();
//             global.confirm = jest.fn(() => false);
//             currentWord = 'test';
            
//             // Make 7 wrong guesses
//             wrongGuesses = 6;
//             guessLetter('z'); // Final wrong guess
            
//             expect(gameOver).toBe(true);
//             expect(mockElements['word-json'].style.color).toBe('red');
//             expect(mockElements['word-json'].textContent).toBe('TEST');
//         });
//     });

//     describe('Game Reset and State Management', () => {
//         test('should reset game completely', () => {
//             // Set up dirty state
//             currentWord = 'test';
//             guessedLetters = ['t', 'e', 'x'];
//             wrongGuesses = 3;
//             gameOver = true;
//             mockElements['word-json'].style.color = 'red';
            
//             resetGame();
            
//             expect(currentWord).toBe('');
//             expect(guessedLetters).toEqual([]);
//             expect(wrongGuesses).toBe(0);
//             expect(gameOver).toBe(false);
//             expect(mockElements['word-json'].style.color).toBe('#333');
//             expect(mockElements['fail_images'].src).toContain('base.png');
//         });

//         /* This test is checking the functionality of the `updateHangmanImages` function in the Hangman
//         game script. */
//         test('should update hangman image based on wrong guesses', () => {
//             wrongGuesses = 3;
//             updateHangmanImages();
//             expect(mockElements['fail_images'].src).toContain('fail3.png');
            
//             wrongGuesses = 0;
//             updateHangmanImages();
//             expect(mockElements['fail_images'].src).toContain('base.png');
//         });
//     });

//     describe('Integration Tests', () => {
//         test('complete win game flow', async () => {
//             global.alert = jest.fn();
//             global.confirm = jest.fn(() => false);
            
//             // Setup short word for quick test
//             global.fetch = jest.fn(() => Promise.resolve({
//                 json: () => Promise.resolve(['hi'])
//             }));
            
//             await randomWord();
            
//             // Win the game
//             guessLetter('h');
//             guessLetter('i');
            
//             expect(gameOver).toBe(true);
//             expect(checkWin()).toBe(true);
//             expect(mockElements['word-json'].style.color).toBe('green');
//         });

//         test('complete loss game flow', async () => {
//             global.alert = jest.fn();
//             global.confirm = jest.fn(() => false);
//             currentWord = 'xyz'; // Word with uncommon letters
            
//             // Make 7 wrong guesses
//             ['a', 'b', 'c', 'd', 'e', 'f', 'g'].forEach(letter => guessLetter(letter));
            
//             expect(gameOver).toBe(true);
//             expect(checkLoss()).toBe(true);
//             expect(wrongGuesses).toBe(7);
//             expect(mockElements['word-json'].style.color).toBe('red');
//         });
//     });

    
// });

// // Quick performance check
// describe('Performance', () => {
//     test('should handle rapid sequential guesses efficiently', () => {
//         currentWord = 'test';
//         const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
        
//         const startTime = performance.now();
//         letters.forEach(letter => guessLetter(letter));
//         const endTime = performance.now();
        
//         expect(endTime - startTime).toBeLessThan(100); // Should be very fast
//         expect(guessedLetters).toHaveLength(26); // All letters guessed
//     });
//});

console.log('Streamlined Hangman Test Suite ready!');

// Export for Node.js
// if (typeof module !== 'undefined' && module.exports) {
//     module.exports = { setupTestEnvironment };
// }