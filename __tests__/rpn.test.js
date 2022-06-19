import rpn from '../rpn.js';
import operandStack from '../stack.js';

describe('handles one operator entered by user', () => {
    test('Function should remove numbers from stack; computed result should be pushed to stack', () => {
        const firstInput = 5;
        const secondInput = 10;
        operandStack.push(firstInput);
        operandStack.push(secondInput);
        let result = operandStack.size();
        const input = '*';
        rpn.operatorInput(input);
        expect(operandStack.size()).toEqual(result - 1);
        expect(operandStack.pop()).toEqual(firstInput*secondInput);
    });
});

describe('handles one operand entered by user', () => {
    test('Function should push inputted number to stack', () => {
        const input = 5;
        const result = operandStack.size();
        rpn.numberInput(input);
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

          input = [
            '     '
          ];
          operandStack.clear();
          rpn.multipleInputs(input);
          expect(console.log(operandStack));
          expect(operandStack.size()).toEqual(0);

          input = [
            ' ', 'q', ' ', '1', ' '
          ];
          operandStack.clear();
          rpn.multipleInputs(input);
          expect(console.log(operandStack));
          expect(operandStack.size()).toEqual(1);


    });
});