import ops from "./operators.js";
import operandStack from "./stack.js";
import color from "colors-cli"

const operators = ops.operators;
const computeWithSymbols = ops.computeWithSymbol;

class RPN {
    multipleInputs(answerInArray) {
        let begin = 0;
        for (let i = 0; i < answerInArray.length; i += 1) {
          const end = i;
          if (answerInArray[i] === ' ') {
              const input = answerInArray.slice(begin, end).join('');
             if (operators.has(input)) {
              rpn.operatorInput(input);
              } else if (Number.isInteger(parseInt(input))) {
                rpn.numberInput(input);
              }
             begin = i + 1;
             } else if (i === answerInArray.length - 1) {
              const input = answerInArray.slice(begin, end + 1).join('');
              if (operators.has(input)) {
                rpn.operatorInput(input);
             } else if (Number.isInteger(parseInt(input))) {
              rpn.numberInput(input);
              } else {
                console.log(color.red('invalid inputs were not added'));
              }
              begin = i + 1;
          }
        }
    };

    //oneEntry and is operand
    numberInput(answer) {
        operandStack.push(answer);
        console.log(answer);
    };

    //oneEntry and is operator
    operatorInput(answer) {
      const firstOperand = operandStack.pop();
      const secondOperand = operandStack.pop();
      operandStack.push(computeWithSymbols(answer, firstOperand, secondOperand));
    };

    
  };

        // find the index where ' ' occurs and breakup and store into individual variables
      // or one variable and continue until no more whitespace or end of length
      // needs to be if else or it'll push stack twice


 const rpn = new RPN();

 

export default rpn;