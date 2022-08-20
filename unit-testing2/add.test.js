const add = require('./add')
const assert = require('assert')

assert.throws(() => add('7', 8), Error('inputs must be numbers'))
assert.doesNotThrow(() => add(7, 8), 15)


//assert that throws ('7', 8)
//assert that does not throw(7, 8)
//assert that does not throw string(7, 8)
