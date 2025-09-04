/**
 * @jest-environment jsdom
 */




  
  

describe('Hangman Game Logic', () => {
  test('checkWin returns true if all letters guessed', () => {
    global.currentWord = 'test';
    global.guessedLetters = ['t', 'e', 's'];
    expect(checkWin()).toBe(true);
  });

  test('checkWin returns false if not all letters guessed', () => {
    global.currentWord = 'test';
    global.guessedLetters = ['t', 'e'];
    expect(checkWin()).toBe(false);
  });

  test('checkLoss returns true if wrongGuesses >= max', () => {
    global.wrongGuesses = 7;
    expect(checkLoss()).toBe(true);
  });

  test('resetGame resets all variables', () => {
    global.currentWord = 'something';
    global.guessedLetters = ['a', 'b'];
    global.wrongGuesses = 3;
    global.gameOver = true;
    resetGame();
    expect(global.currentWord).toBe('');
    expect(global.guessedLetters).toEqual([]);
    expect(global.wrongGuesses).toBe(0);
    expect(global.gameOver).toBe(false);
  });

  test('guessLetter adds correct letter to guessedLetters', () => {
    global.currentWord = 'hangman';
    global.guessedLetters = [];
    guessLetter('h');
    expect(global.guessedLetters).toContain('h');
  });

  test('guessLetter increments wrongGuesses for wrong letter', () => {
    global.currentWord = 'hangman';
    global.guessedLetters = [];
    global.wrongGuesses = 0;
    guessLetter('z');
    expect(global.wrongGuesses).toBe(1);
  });

  test('hangmanImages array has correct length and paths', () => {
    expect(hangmanImages.length).toBeGreaterThan(0);
    expect(hangmanImages[0]).toMatch(/base\.png/);
  });
});

// You can add more tests for randomWord, UI updates, etc.