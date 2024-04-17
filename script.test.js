import { capitalize, reverseString, calculator, caesarCipher } from './script.js'

test('Return the first letter of a string capitalized', () => {
  expect(capitalize('test')).toBe('T')
})

test('Return a string reversed', () => {
  expect(reverseString('test')).toBe('tset')
})

test('Return the calulation of two numbers', () => {
  expect(calculator.add(1, 2)).toBe(3)
  expect(calculator.subtract(1, 2)).toBe(-1)
  expect(calculator.multiply(1, 2)).toBe(2)
  expect(calculator.divide(1, 2)).toBe(0.5)
})

test('Return each character of a string shifted by a value', () => {
    expect(caesarCipher('test', 3)).toBe('whvw')
    expect(caesarCipher('zack', 3)).toBe('cdfn')
})