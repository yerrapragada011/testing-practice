export function capitalize(string) {
  let firstLetter = string.charAt(0)
  let firstLetterCap = firstLetter.toUpperCase()
  return firstLetterCap
}

export function reverseString(string) {
  return string.split('').reverse().join('')
}

class Calculator {
  add(num1, num2) {
    return num1 + num2
  }

  subtract(num1, num2) {
    return num1 - num2
  }

  multiply(num1, num2) {
    return num1 * num2
  }

  divide(num1, num2) {
    return num1 / num2
  }
}

export const calculator = new Calculator()

export function caesarCipher(string, shift) {
  let alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ]

  let result = ''

  for (let i = 0; i < string.length; i++) {
    let char = string[i]
    if (alphabet.includes(char)) {
      let index = alphabet.indexOf(char)
      let newIndex = index + shift

      if (newIndex < 0) {
        newIndex = alphabet.length + newIndex
      }

      newIndex = newIndex % alphabet.length

      result += alphabet[newIndex]
    }
  }
  return result
}

export function analyzeArray(array) {
  const object = {
    average: array.reduce((prev, cur) => prev + cur, 0) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length
  }

  return JSON.stringify(object)
}
