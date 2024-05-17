function capitalize() {
    let str = 'hello'
    let capitalize = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalize;
}




module.exports = capitalize;