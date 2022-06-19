
// import asnycprompt from '../index.js';
import rpnInputCheck from '../index.js';
import operandStack from '../stack.js';
import color from 'colors-cli';

describe('input checks for rpn', () => {

    test('Function should prompt with error if stack is less than 2 when operator entered', () => {
        const input = '+';
        expect(rpnInputCheck(input)).toEqual(color.red('Enter at least two numbers before entering an operator'));

        operandStack.push('10');
        expect(rpnInputCheck(input)).toEqual(color.red('Enter at least two numbers before entering an operator'));
    });

    test('Function should compute with input if stack is 2 or greater ', () => {
        const input = '+';
        operandStack.push("5");
        operandStack.push("3");
        expect(rpnInputCheck(input)).toEqual(8);
    });

    test('Function should push to stack if it is a number ', () => {
        const input = '5';
        operandStack.push(input);
        const inStack = operandStack.pop();
        
        expect(rpnInputCheck(input)).toEqual(inStack);
    });


    test('Function should prompt "invalid input" when non number or operator is entered', () => {
        let answer = 'three';
        expect(rpnInputCheck(answer)).toEqual(color.red('Not a valid input. Enter a number or operator'));

        answer = 'q';
        expect(rpnInputCheck(answer)).toEqual(color.red('Not a valid input. Enter a number or operator'));


        answer = '&';
        expect(rpnInputCheck(answer)).toEqual(color.red('Not a valid input. Enter a number or operator'));


        answer = '1q';
        expect(rpnInputCheck(answer)).toEqual(color.red('Not a valid input. A number cannot contain a letter or symbol'));
    });
});