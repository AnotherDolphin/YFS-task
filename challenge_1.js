// All native functions like sort, join, split, and reverse are avoided
// the only built in object function used is array pop()

// space complexity = 2 * O(n) = O(n)
// time complexity = O(n)
const resverseString = input => {
  let currentWord = ''
  let wordStack = []
  let reversedString = ''

  // read input into word stack
  for (char of input) {
    if (![' ', '\n'].includes(char)) {
      currentWord += char
      continue
    }
    wordStack.push(currentWord, char)
    currentWord = ''
  }
  wordStack.push(currentWord)

  // pop stack for reversed string
  while (wordStack.length > 0) reversedString += wordStack.pop()

  return reversedString
}

console.log(resverseString('first word last\nline new'))
