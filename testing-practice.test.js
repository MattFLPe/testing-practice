const capitalize = require('./capitalize.js')
const reverseString = require('./reverseString.js')
const calculator = require('./calculator.js')

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


