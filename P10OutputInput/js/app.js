function multiplyNySelf(number)  {
  return number * number;
}

console.log(multiplyNySelf(2));
console.log(multiplyNySelf(4));

function add(firstnumber, secondnumber) {
  return firstnumber + secondnumber;
}

console.log(add(5, 20));

//Averages number + number / 2
function avarageNumber(firstnumber, secondnumber) {
  return (firstnumber + secondnumber) / 2
}

console.log(avarageNumber(6, 2));

function welcomePerson(firstname, lastname) {
  return "Welcome " +  firstname +  lastname;
}

console.log(welcomePerson("Ben ", "Ting! "));

function randomNumber(max) {
  return Math.floor(Math.random() * max)
}

console.log(randomNumber(3));

// Write a function that has 1 number as a parameter and returns the result like this:
// Input: 0. Output: A.
// Input: 1. Output: B.
// Input: 2. Output: C.

function convertNumberToLetter(number) {
  if (number === 0) {
    return "A"
  }

  if (number === 1) {
    return "B"
  }

  if (number === 2) {
    return "C"
  }
}

console.log(convertNumberToLetter(0));
console.log(convertNumberToLetter(1));
console.log(convertNumberToLetter(2));

//Write a function that has 2 numbers as parameters compares them and returns the following results:
// Output: Both numbers are equal!
// Output: First number is greater!
// Output: Second number is greater!

function evaluateResult(firstNumber, secondNumber) {
  if (firstNumber === secondNumber)
  return "Both numbers are equal!";
  else if (firstNumber > secondNumber)
    return "First number is greater!";
 else if (firstNumber < secondNumber)
    return "Second number is greater!";
}

console.log(evaluateResult(3, 3));
console.log(evaluateResult(4, 3));
console.log(evaluateResult(2, 3));






