function analyzeArray(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return {
            average: 0,
            min: undefined,
            max: undefined,
            length: 0
        };
    }

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);

    return {
        average: average,
        min: min,
        max: max,
        length: numbers.length
      };
    };


module.exports = analyzeArray;