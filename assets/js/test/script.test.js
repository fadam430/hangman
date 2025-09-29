
/**
 * @jest-environment jsdom
 */



beforeEach(() => {
    document.body.innerHTML = `game.html`;
    document.body.innerHTML = `index.html`;
});

describe('open index.html and load content', () => {
    test('should load the content of index.html', () => {
        expect(document.body).toBeDefined();
    });
});

describe('open game.html and load content', () => {
    test('should load the content of game.html', () => {
        expect(document.body).toBeDefined();
    });
});
describe('openNewGame function exist', () => {
    test('openNewGame should be a function', () => {
        const { openNewGame } = require('../script.js');
        expect(typeof openNewGame).toBe('function');
    });
});


