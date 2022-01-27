function fizzBuzz(numbersArray) {
  const result = [];
  numbersArray.forEach(elem => {
    if (typeof elem !== 'number' || elem <= 0 || elem > 100) {
      return result.push('Wrong input, only positive numbers up to 100 allowed!');
    } if (elem % 15 === 0) {
      return result.push('FizzBuzz');
    } if (elem % 3 === 0) {
      return result.push('Fizz');
    } if (elem % 5 === 0) {
      return result.push('Buzz');
    }
    return result.push(elem);
  });
  return result;
}

module.exports.fizzBuzz = fizzBuzz;
