function reverseString() {
    let strToReverse = 'hello'
    return strToReverse.split("").reverse().join("");
}

module.exports = reverseString;