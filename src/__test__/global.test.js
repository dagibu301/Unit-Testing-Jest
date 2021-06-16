const text = 'Hello World!';
const fruits = ['apple', 'orange', 'banana'];

test('It should have a text', () => {
    expect(text).toMatch(/World/);
});

test('It should have a banana', () => {
    expect(fruits).toContain('banana');
});