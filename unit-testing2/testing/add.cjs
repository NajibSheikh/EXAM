'use strict'
function subtract (a, b) {
    if(typeof a !== 'number' || typeof b !== 'number'){
        throw Error('inputs must be numbers')
    }
    return a - b
}
module.exports = subtract

// question 
//assert that does not throws (7, 8)
//assert throws ('e', 8)
// assert that does not return string (7, 8)

 