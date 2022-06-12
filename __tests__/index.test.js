// import * as funcs from "../index";
// import { describe } from "eslint/lib/rule-tester/rule-tester";
import {computeWithSymbol, RPNCalculator} from "../index";

describe("Checking operator symbol function", () => {
    test('function should return a number', () => {
        let input = '+';
        let firstOperand = 4;
        let secondOperand = 5;

          const output = Number.isInteger(10);
          expect(console.log(RPNCalculator.rl))
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

// describe('Calculates inputs through RPN', () => {
//     test('Function should recursively calls itself', () => {

//         expect(RPNCalculator.rl.question()).toEqual(RPNCalculator)
//     });
    
//     test('Function should close when prompted with exit', () => {

//     });


//     test('When receiving " ", should push each operator to a stack', () => {

//     });

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