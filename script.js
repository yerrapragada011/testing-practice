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
