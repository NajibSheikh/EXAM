function subtract (a, b) {
    if(typeof a !== 'number' || typeof b !== 'number') {
        throw Error('inputs must be a number')
    }
    return a - b
}
module.exports = subtract