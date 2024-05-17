const capitalize = require('./capitalize.js');
const reverseString = require('./reverseString.js');
const calculator = require('./calculator.js');
const caesarCipher = require('./caesarCipher.js');
const analyzeArray = require('./analyzeArray.js');


test('Takes a string and returns it with the first character capitalized', () => {
    expect(capitalize()).toBe("Hello")
});


test('Takes a string and returns it reversed', () => {
    expect(reverseString()).toBe("olleh")
});


describe('Calculator', () => {
    test('Adds 1 + 2', () => {
        expect(calculator.add(1, 2)).toBe(3);
    });
    test('Subtracts 5 - 3', () => {
        expect(calculator.subtract(5, 3)).toBe(2);
    });
    test('Multiply 5 * 5', () => {
        expect(calculator.multiply(5, 5)).toBe(25);
    });
    test('Divide 10 / 2', () => {
        expect(calculator.divide(10, 2)).toBe(5);
    })
    test('returns "Cannot divide by zero" when dividing by zero', () => {
        expect(calculator.divide(8, 0)).toBe("Cannot divide by zero");
    });
});


test('Function that takes a string and a shift factor and returns it with each character “shifted”', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe("KHOOR, ZRUOG!")
})


describe('analyzeArray', () => {
    test('Returns correct analysis for an array of numbers', () => {
      const numbers = [1, 2, 3, 4, 5];
      const result = analyzeArray(numbers);
      expect(result).toEqual({
        average: 3,
        min: 1,
        max: 5,
        length: 5
      });
    });

    test('Handles empty array', () => {
        const result = analyzeArray([]);
        expect(result).toEqual({
        average: 0,
        min: undefined,
        max: undefined,
        length: 0
    });
});

    test('Handles non-array input', () => {
        const result = analyzeArray('Not an array');
        expect(result).toEqual({
        average: 0,
        min: undefined,
        max: undefined,
        length: 0
        });
    });
});

