/* eslint-disable radix */
import readline from 'readline';
import color from "colors-cli";
import ops from './operators.js';
import rpn from './rpn.js';
import operandStack from './stack.js';

const operators = ops.operators;
const multipleInputs = rpn.multipleInputs;
const operatorInput = rpn.operatorInput;
const numberInput =  rpn.numberInput;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(color.blue('This is the Cli RPN calculator'));
console.log(color.cyan('To exit the calculator, enter "quit"'));
console.log(color.cyan('To check numbers already entered, enter "check stack"'));
console.log('These are the operators that can be used:')
console.log(operators)

const asnycprompt = function () {
  rl.question(color.black('Enter a number or operator symbol: '), (answer) => {
    if (answer === 'quit') return rl.close(); // exits command prompt and ends recursion
    if (answer === 'check stack') {
      console.log(operandStack);
      return asnycprompt();
    }

    const answerInArray = answer.split('');
    const answerInSet = new Set(answerInArray);

    // checks for multiple inputs at once
    if (answerInSet.has(' ')) {
      multipleInputs(answerInArray);

    } else if (operators.has(answer) && operandStack.count >= 2) {
      operatorInput(answer);
    } else if (operators.has(answer) && operandStack.count <= 2) {
      console.log(color.red('Enter at least two numbers before entering an operator'));
    } else if (Number.isInteger(parseInt(answer))) {
      numberInput(answer);
    } else if (!Number.isInteger(parseInt(answer))) {
      console.log(color.red('Not a valid input. Enter an integer or operator'));
    }

    return asnycprompt(); // recursively calls to continue prompting for additional inputs
  });
};

asnycprompt();

// export default asnycprompt;

export default rl.question;