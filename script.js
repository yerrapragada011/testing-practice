export function capitalize(string) {
  let firstLetter = string.charAt(0)
  let firstLetterCap = firstLetter.toUpperCase()
  return firstLetterCap
}

export function reverseString(string) {
  return string.split('').reverse().join('')
}
