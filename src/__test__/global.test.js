const { test, expect } = require("@jest/globals");

const text = "Hello World!";
const fruits = ["apple", "orange", "banana"];

test("It should have a text", () => {
  expect(text).toMatch(/World/);
});

test("It should have a banana", () => {
  expect(fruits).toContain("banana");
});

test("It should be greater", () => {
  expect(10).toBeGreaterThan(9);
});

test("It should be truthy", () => {
  expect(true).toBeTruthy();
});

const reverseString = (str, callback) => {
  callback(str.split("").reverse().join(""));
};

test("Test a callback", () => {
  reverseString("Hello", (str) => {
    expect(str).toBe("olleH");
  });
});

const reverseString2 = (str) => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error("Error"));
    }
    resolve(str.split("").reverse().join(""));
  });
};

test("Test a promise", () => {
  return reverseString2("Hello").then((str) => {
    expect(str).toBe("olleH");
  });
});

test("Test async/await", async () => {
    const string = await reverseString2("Hello");
    expect(string).toBe("olleH");
  });
