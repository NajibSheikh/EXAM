'use strict'
const subtract = require('../add.cjs')

test('throws when inputs are not numbers', async () => {
  expect(() => subtract('e', 7)).toThrowError(Error(
    'inputs must be numbers'
  ))
  expect(() => subtract(2, 'r')).toThrowError(Error(
    'inputs must be numbers'
  ))
})

test('subtracts two numbers', async () => {
  expect(subtract(7, 8)).toBe(-1)
  expect(subtract(10, 8)).toBe(2)
})