import { capitalize, reverseString } from './script.js'

test('Return the first letter of a string capitalized', () => {
  expect(capitalize('test')).toBe('T')
})

test('Return a string reversed', () => {
  expect(reverseString('test')).toBe('tset')
})
