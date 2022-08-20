const subtract = require('./subtract')

test('throw when inputs are not a number', async () => {
    expect(() => subtract('e', 7)).toThrowError(Error(
        'inputs must be a number'
    ))
    expect(() => subtract(8, 'c')).toThrowError(Error(
        'inputs must be a number'
    ))
})

test('subtracts two numbers', async () => {
    expect(subtract(7, 8)).toBe(-1)
    expect(subtract(10, 5)).toStrictEqual(5)
})