const { test, expect } = require("@jest/globals");
const randomString = require("../index");

describe("test functionalities of randomString", () => {
  test("test functionality of random string", () => {
    expect(typeof randomString()).toBe("string");
  });

  test('Check there is not a city', () => {
    expect(randomString()).not.toMatch(/Cordoba/);
  });
});
