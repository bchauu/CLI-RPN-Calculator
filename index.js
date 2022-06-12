/* eslint-disable radix */
import readline from 'readline';
import color from "colors-cli";
import ops from './operators.js';
import rpn from './rpn.js';
// import Stack from './stack.js';
import operandStack from './stack.js';

const computeWithSymbols = ops.computeWithSymbol;
const operators = ops.operators;
const multipleInputs = rpn.multipleInputs;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(color.red('hello'));

// const operandStack = new Stack();

const asnycprompt = function () {
  rl.question('Enter a number or operator symbol: ', (answer) => {
    if (answer === 'quit') return rl.close(); // exits command prompt and ends recursion
    if (answer === 'check stack') {
      console.log(operandStack, operandStack.size());
    }

    const answerInArray = answer.split('');
    const answerInSet = new Set(answerInArray);

    // checks for multiple inputs at once
    if (answerInSet.has(' ')) {
      multipleInputs(answerInArray, operandStack);

    } else if (operators.has(answer) && operandStack.size() >= 2) {
      rpn.oneOperatorInput(answer);
    } else if (operators.has(answer) && operandStack.count <= 2) {
      console.log('not enough operands in the stack');
      // return error
    } else if (Number.isInteger(parseInt(answer))) {
      rpn.oneNumberInput(answer);
      // operandStack.push(answer);
      // console.log(answer);
    } else if (!Number.isInteger(parseInt(answer))) {
      console.log('Not a valid input. Enter an integer or operator');
    }

    return asnycprompt(); // recursively calls to continue prompting for additional inputs
  });
};

// console.log(asnycprompt.rl.question)

asnycprompt();


export { computeWithSymbols, asnycprompt };