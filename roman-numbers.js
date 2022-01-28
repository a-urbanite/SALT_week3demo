// document.getElementById("roman-numerals-button").addEventListener('click', () => {
//   document.getElementById("roman-numerals-result").innerText('THIS WORKS!')
  // const isereInput
  // extract value from input element
  // execute the converter
  // output the result 
// })

const runRomanConverter = () => {
  const userInput = document.getElementById("roman-numerals-input").value
  document.getElementById("roman-numerals-result").innerText = convertToRomanNumerals(userInput)
}

const runArabicConverter = () => {
  const userInput = document.getElementById("arabic-numerals-input").value
  document.getElementById("arabic-numerals-result").innerText = convertToArabicNumerals(userInput)
}


const romanNumbers = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

const convertToRomanNumerals = inputNum => {
  let updateableNum = inputNum;
  let romanResult = '';

  if (Number.isNaN(Number(inputNum)) || inputNum < 1) {
    return 'Wrong Input';
  }

  Object.keys(romanNumbers).forEach(key => {
    const x = Math.floor(updateableNum / romanNumbers[key]);
    updateableNum -= x * romanNumbers[key];
    romanResult += key.repeat(x);
  });
  return romanResult;
};

const convertToArabicNumerals = inputStr => {
  let updateableString = inputStr;
  let arabicResult = 0;
  const changeIfMatch = key => {
    if (updateableString.startsWith(key)) {
      arabicResult += romanNumbers[key];
      updateableString = updateableString.replace(key, '');
    }
  };

  if (!Number.isNaN(Number(inputStr))) {
    return 'Wrong Input';
  }

  for (let i = 0; updateableString; i++) {
    if (i > inputStr.length) {
      return 'Wrong Input';
    }
    Object.keys(romanNumbers).forEach(key => {
      changeIfMatch(key);
    });
  }
  return arabicResult;
};

module.exports.convertToRomanNumerals = convertToRomanNumerals;
module.exports.convertToArabicNumerals = convertToArabicNumerals;
