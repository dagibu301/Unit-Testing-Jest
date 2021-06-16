const { test, expect } = require("@jest/globals");

const text = 'Hello World!';
const fruits = ['apple', 'orange', 'banana'];

test('It should have a text', () => {
    expect(text).toMatch(/World/);
});

test('It should have a banana', () => {
    expect(fruits).toContain('banana');
});

test('It should be greater', () => {
    expect(10).toBeGreaterThan(9);
});