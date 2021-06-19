const constants = require('./../../constants')

const receivedTextIsValid = (text = '') => !!text

const throwError = (errorText) => {
  throw errorText
}

const reverseText = (text) => {
  const stringArray = text.split('')
  const reversedTextArray = stringArray.reverse()
  return reversedTextArray.join('')
}

const receivedTextIsPalindrome = (text, reversedText) => {
  return text.toLowerCase() === reversedText.toLowerCase()
}

const iechoService = (text = '') => {
  return new Promise((resolve) => {
    try {
      !receivedTextIsValid(text) && throwError(constants.errors.noTextReceived)
      const reversedText = reverseText(text)
      const isPalindome = receivedTextIsPalindrome(text, reversedText)
      const response = { text: reversedText, palindrome: isPalindome }
      resolve({ status: 200, response })
    } catch (error) {
      const response = { error }
      resolve({ status: 400, response })
    }
  })
}

module.exports = iechoService
