let number = 0;

const colorRamp = ['#da25b2', '#0cf703', '#1900ff', '#01e1ff', '#e5ff00']

const runFizzBuzz = () => {
  number += 1
  let userArray = []
  userArray.push(number)
  const listOfBuzzs = document.getElementById("fizzbuzz-result")
  const result = fizzBuzz(userArray);
  result.forEach(elem => {
    const listItem = document.createElement('p')
    listItem.innerText = elem;
    let random = Math.floor(Math.random() * colorRamp.length);
    listItem.style.color = colorRamp[random]
    listOfBuzzs.appendChild(listItem)
  })
}


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

//sdsfsf
console.log("asdsadsdds")

module.exports.fizzBuzz = fizzBuzz;
