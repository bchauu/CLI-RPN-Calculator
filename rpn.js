import ops from "./operators.js";
import operandStack from "./stack.js";

const operators = ops.operators;
const computeWithSymbols = ops.computeWithSymbol;

// create helperfunction for operators.has(input)
const isOperator = (input) => {
    const firstOperand = operandStack.pop();
    const secondOperand = operandStack.pop();
    operandStack.push(computeWithSymbols(input, firstOperand, secondOperand));
}

const isNumber = (input) => {
  operandStack.push(input);
}

class RPN {
    multipleInputs(answerInArray, operandStack) {
        let begin = 0;
        for (let i = 0; i < answerInArray.length; i += 1) {
          const end = i;
          if (answerInArray[i] === ' ') {
              const input = answerInArray.slice(begin, end).join('');
             if (operators.has(input)) {
                 isOperator(input);
              } else if (Number.isInteger(parseInt(input))) {
                isNumber(input);
              }
             begin = i + 1;
             } else if (i === answerInArray.length - 1) {
              const input = answerInArray.slice(begin, end + 1).join('');
              if (operators.has(input)) {
                  isOperator(input);
             } else if (Number.isInteger(parseInt(input))) {
              isNumber(input);
              }
              begin = i + 1;
          }
        }
    };

    //oneEntry and is operand
    oneNumberInput(answer) {
        operandStack.push(answer);
        console.log(answer);
    };


    //oneEntry and is operator
    oneOperatorInput(answer) {
      isOperator(answer);
    };

    
  }

        // find the index where ' ' occurs and breakup and store into individual variables
      // or one variable and continue until no more whitespace or end of length
      // needs to be if else or it'll push stack twice


 const rpn = new RPN();

 

export default rpn;