function processEntry(entry) {
  const multipleOf3 = entry % 3 === 0
  const multipleOf5 = entry % 5 === 0

  if (multipleOf3 && multipleOf5) {
    return 'FizzBuzz'
  }

  if (multipleOf3) {
    return 'Fizz'
  }

  if (multipleOf5) {
    return 'Buzz'
  }

  return entry
}

export default function fizzBuzz(input) {
  return input.map(processEntry).join(', ')
}
