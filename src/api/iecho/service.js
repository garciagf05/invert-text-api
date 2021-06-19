const constants = require('./../../constants')

const textValidation = (text = '') => !!text

const textHasOnlySpaces = (text = '') => !!text &&
  !text.split('')
    .some(char => char !== ' ')

const throwError = (errorText) => {
  throw errorText
}

const reverseText = (text = '') => {
  const stringArray = text.split('')
  const reversedTextArray = stringArray.reverse()
  return reversedTextArray.join('')
}

const receivedTextIsPalindrome = (text = '', reversedText = '') => {
  const textWithoutSpaces = text.split('')
    .filter(char => char !== ' ')
    .join('')
  const reversedTextWithoutSpaces = reversedText.split('')
    .filter(char => char !== ' ')
    .join('')
  const textAreSame = textWithoutSpaces.toLowerCase() === reversedTextWithoutSpaces.toLowerCase()
  return textAreSame && textWithoutSpaces.length > 1
}

const iechoService = (text = '') => {
  return new Promise((resolve) => {
    try {
      !textValidation(text) && throwError(constants.errors.noTextReceived)
      const stringParsed = String(text)
      textHasOnlySpaces(stringParsed) && throwError(constants.errors.noTextReceived)
      const reversedText = reverseText(stringParsed)
      const isPalindome = receivedTextIsPalindrome(stringParsed, reversedText)
      const response = { text: reversedText, palindrome: isPalindome }
      resolve({ status: 200, response })
    } catch (error) {
      const response = { error }
      resolve({ status: 400, response })
    }
  })
}

module.exports = iechoService
