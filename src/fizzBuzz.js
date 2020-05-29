function processEntry(entry) {
  const multipleOf3 = entry % 3 === 0
  const multipleOf5 = entry % 5 === 0
  if (multipleOf3 && multipleOf5) {
    return 'FizzBuzz'
  } else if (multipleOf3) {
    return 'Fizz'
  } else if (multipleOf5) {
    return 'Buzz'
  } else {
    return entry
  }
}

export default function fizzBuzz(input) {
  return input.map(processEntry).join(', ')
}
