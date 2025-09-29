
/**
 * @jest-environment jsdom
 */


beforeEach(() => {
    document.body.innerHTML = `game.html`;
});

describe('open index.html and load content', () => {
    test('should load the content of index.html', () => {
        expect(document.body).toBeDefined();
    });
});
