// import * as funcs from "../index";
// import { describe } from "eslint/lib/rule-tester/rule-tester";
// import {computeWithSymbol, RPNCalculator} from "../index";
import ops from '../operators.js';
import rpn from '../rpn.js';
import asnycprompt from '../index.js';
import operandStack from '../stack.js';

const multipleInputs = rpn.multipleInputs;

const oneNumberInput = rpn.oneNumberInput;

const oneOperatorInput = rpn.oneOperatorInput;


const computeWithSymbol = ops.computeWithSymbol;
const operators = ops.operators;

describe("Checking operator symbol function", () => {
    test('function should return a number', () => {
        let input = '+';
        let firstOperand = 4;
        let secondOperand = 5;

          const output = Number.isInteger(10);
          expect(Number.isInteger(computeWithSymbol(input, firstOperand, secondOperand))).toEqual(output);
          input = '-'
          firstOperand = '3';
          secondOperand = '8';
          expect(Number.isInteger(computeWithSymbol(input, firstOperand, secondOperand))).toEqual(output);
          input = '*';
          expect(Number.isInteger(computeWithSymbol(input, firstOperand, secondOperand))).toEqual(output);
          input = '/';
          expect(Number.isInteger(Math.trunc(computeWithSymbol(input, firstOperand, secondOperand)))).toEqual(output);
        //   expect(true).toEqual(output);
    });

    test('function should compute with correct operator passed in', () => {
       let input = '+';
       const firstOperand = 6;
       const secondOperand = 3;
        expect(computeWithSymbol(input, firstOperand, secondOperand)).toEqual(9);
        input = '-';
        expect(computeWithSymbol(input, firstOperand, secondOperand)).toEqual(-3);
        input = '*';
        expect(computeWithSymbol(input, firstOperand, secondOperand)).toEqual(18);
        input = '/';
        expect(computeWithSymbol(input, firstOperand, secondOperand)).toEqual(0.5);
    });

    test('Function should return "invalid input" if input is invalid', () => {
        expect(computeWithSymbol('e', 10, 4)).toEqual('invalid input');
        expect(computeWithSymbol('+', 'six', 11)).toEqual('invalid input');
        expect(computeWithSymbol('-', '3', 'five')).toEqual('invalid input');
    });
});

// describe('continuously prompts the user', () => {
//         test('Function should recursively calls itself', () => {
//             expect(asnycprompt()).toEqual(asnycprompt)
// //         expect(RPNCalculator.rl.question()).toEqual(RPNCalculator)
// //     });

// //     test('Function should close when prompted with exit', () => {

//     });
// })

describe('handles one operator entered by user', () => {
    test('Function should remove numbers from stack; computed result should be pushed to stack', () => {
        const firstInput = 5;
        const secondInput = 10;
        operandStack.push(firstInput);
        operandStack.push(secondInput);
        let result = operandStack.size();
        // const firstOperand = operandStack.pop();
        // const secondOperand = operandStack.pop();
        const input = '*';
        rpn.operatorInput(input);
        expect(operandStack.size()).toEqual(result - 1);
        expect(operandStack.pop()).toEqual(firstInput*secondInput);
        // result = operandStack.size();
        // operandStack.push(firstOperand*secondOperand);
        // expect(operandStack.size()).toEqual(result + 1);
    });
});

describe('handles one operand entered by user', () => {
    test('Function should push inputted number to stack', () => {
        const input = 5;
        const result = operandStack.size();
        rpn.numberInput(input);
        // operandStack.push(input);
        expect(operandStack.size()).toEqual(result + 1);
    });
});

describe('handles multiple inputs entered by user', () => {
    test('When receiving " ", should push each operator or operand to a stack', () => {
        operandStack.clear();
        let input = [
            '1', '0', ' ',
            '1', '0', '1',
            ' ', '1', '0', ' '
          ];
        rpn.multipleInputs(input);
        expect(console.log(operandStack));
        expect(operandStack.size()).toEqual(3);

        input = [
            '1', '0', ' ',
            '1', '0', '1', ' ', '+',
            ' ', '1', '0', ' '
          ];
          operandStack.clear();
          rpn.multipleInputs(input);
          expect(console.log(operandStack));
          expect(operandStack.size()).toEqual(2);

    });
});



// describe('inputs for readline prompts', () => {

//     test('When receiving " ", should calculate when there is an operand', () => {

//     });

//     test('Function should prompt "not enough inputs" if stack is less than 2', () => {

//     });

//     test('Function when prompt "check stack", should console log stack', () => {

//     });

//     test('Function should prompt "invalid input" when non number or operator is entered', () => {

//     });
// })
//RPN Calculator: how to test recursion; how to test individual units within function