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
console.log(color.cyan('To clear and start with a new stack, enter "clear stack"'));
console.log('These are the operators that can be used:');
console.log(operators);

const rpnInputCheck = function (answer) {
  const answerInArray = answer.split('');
  const answerInSet = new Set(answerInArray);

  if (answerInSet.has(' ')) {
    return multipleInputs(answerInArray);

     //make sure all are not letters if first character in string is a number
  } else if (operators.has(answer) && operandStack.count >= 2) {
    return operatorInput(answer);
  } else if (operators.has(answer) && operandStack.count <= 2) {
    const errorMessage = color.red('Enter at least two numbers before entering an operator');
     console.log(errorMessage);
     return errorMessage;
  } else if (Number.isInteger(parseInt(answer))) {
    if (answerInArray.length > 1 && Number.isInteger(parseInt(answerInArray[0]))) {
      for (let i = 1; i < answerInArray.length; i++) {
          if (!Number.isInteger(parseInt(answerInArray[i]))) {
            const errorMessage = color.red('Not a valid input. A number cannot contain a letter or symbol')
            console.log(errorMessage);
            return errorMessage;
          }
          return numberInput(answer);
      }
    }
    return numberInput(answer);
  } else if (!Number.isInteger(parseInt(answer))) {
    const errorMessage = color.red('Not a valid input. Enter a number or operator')
    console.log(errorMessage);
    return errorMessage;
  } 
}

const asnycprompt = function () {
  rl.question(color.black('Enter a number or operator symbol: '), (answer) => {
    if (answer === 'quit') return rl.close(); // exits command prompt and ends recursion
    if (answer === 'check stack') {
      console.log(operandStack);
      return asnycprompt();
    }
    if (answer === 'clear stack') {
      operandStack.clear();
      return asnycprompt();
    }

    rpnInputCheck(answer);

    return asnycprompt(); // recursively calls to continue prompting for additional inputs
  });
};

asnycprompt();

// export default asnycprompt;

export default rpnInputCheck;