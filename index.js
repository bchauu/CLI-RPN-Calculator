/* eslint-disable radix */
import readline from 'readline';
import color from 'colors-cli';

class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  push(element) {
    this.items[this.count] = element;
    console.log(`${element} added to ${this.count}`);
    this.count += 1;
    return this.count - 1;
  }

  pop(element) {
    if (this.count === 0) return undefined;
    // let deletedItem = this.items[this.count - 1];
    const deletedItem = this.items.splice(this.count - 1, 1);
    delete this.items[this.count - 1];
    this.count -= 1;
    console.log(`${deletedItem} removed`);
    return deletedItem[0];
  }

  size() {
    console.log(`${this.count} elements in stack`);
    return this.count;
  }

  clear() {
    this.items = [];
    this.count = 0;
    console.log('Stack is cleared');
    return this.items;
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(color.red('hello'));

const operandStack = new Stack();

const operators = new Set(['+', '-', '/', '*']);
console.log(operators);

// helper function
const checkSymbol = (input) => {
  const firstOperand = operandStack.pop();
  const secondOperand = operandStack.pop();
  let result;
  if (input === '+') {
    result = parseInt(firstOperand) + parseInt(secondOperand);
  } else if (input === '-') {
    result = parseInt(secondOperand) - parseInt(firstOperand);
  } else if (input === '*') {
    result = parseInt(firstOperand) * parseInt(secondOperand);
  } else if (input === '/') {
    result = parseInt(secondOperand) / parseInt(firstOperand);
  }
  operandStack.push(result);
  console.log(result);
};

const RPNCalculator = function () {
  rl.question('Enter a number or operator symbol: ', (answer) => {
    if (answer === 'quit') return rl.close(); // exits command prompt and ends recursion

    const answerInArray = answer.split('');
    const answerInSet = new Set(answerInArray);
    console.log(answerInArray);

    // checks for multiple inputs at once
    if (answerInSet.has(' ')) {
      let begin = 0;
      for (let i = 0; i < answerInArray.length; i += 1) {
        const end = i;
        if (answerInArray[i] === ' ') {
          const input = answerInArray.slice(begin, end).join('');
          if (operators.has(input)) {
            checkSymbol(input);
          } else if (Number.isInteger(parseInt(input))) {
            operandStack.push(input);
          }
          begin = i + 1;
        } else if (i === answerInArray.length - 1) {
          const input = answerInArray.slice(begin, end + 1).join('');
          if (operators.has(input)) {
            checkSymbol(input);
          } else if (Number.isInteger(parseInt(input))) {
            operandStack.push(input);
          }
          begin = i + 1;
        }
      }

      // find the index where ' ' occurs and breakup and store into individual variables
      // or one variable and continue until no more whitespace or end of length
      // needs to be if else or it'll push stack twice
    } else if (operators.has(answer) && operandStack.size() >= 2) {
      checkSymbol(answer);
    } else if (operators.has(answer) && operandStack.count <= 2) {
      console.log('not enough operands in the stack');
      // return error
    } else if (Number.isInteger(parseInt(answer))) {
      operandStack.push(answer);
      console.log(answer);
    } else if (!Number.isInteger(parseInt(answer))) {
      console.log('Not a valid input. Enter an integer or operator');
    } else {
      console.log(operandStack, operandStack.size());
      // console.log("Please enter an integer or operator");
      // console log that was an invalid input to the calculator
    }

    return RPNCalculator(); // recursively calls to continue prompting for additional inputs
  });
};

RPNCalculator();
