
// import asnycprompt from '../index.js';
import readline from '../index.js';
import operandStack from '../stack.js';


// describe('continuously prompts the user', () => {
//         test('Function should recursively calls itself', () => {
//             expect(asnycprompt()).toEqual(asnycprompt)
// //         expect(RPNCalculator.rl.question()).toEqual(RPNCalculator)
// //     });

// //     test('Function should close when prompted with exit', () => {

//     });
// })

describe('inputs for readline prompts', () => {
    test('Function should close when prompted with exit', () => {
        let answer = 'quit';
        expect(console.log(readline)).toEqual('test');
        
    });
})




// describe('inputs for readline prompts', () => {

//     test('Function should prompt "not enough inputs" if stack is less than 2', () => {

//     });

//     test('Function when prompt "check stack", should console log stack', () => {

//     });

//     test('Function should prompt "invalid input" when non number or operator is entered', () => {

//     });
// })
//RPN Calculator: how to test recursion; how to test individual units within function