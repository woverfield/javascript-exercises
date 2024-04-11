const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
};

const multiply = function (arr) {
  return arr.reduce((acc, curr) => acc * curr, 1);
};

const power = function (num1, exp) {
  return Math.pow(num1, exp);
};

const factorial = function (num1) {
  if (num1 === 0) return 1;
  for (let i = num1 - 1; i >= 1; i--) {
    num1 *= i;
  }
  return num1;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
