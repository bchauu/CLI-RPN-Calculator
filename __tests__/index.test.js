import computeWithSymbol from "../index";

describe("Checking operator symbol function", () => {
    test("it should return computation based on operator passed", () => {
        const input = '+';
        const firstOperand = '4';
        const secondOperand = 5

          const output = Number.isInteger(10);
          expect(Number.isInteger(computeWithSymbol(input, firstOperand, secondOperand))).toEqual(output);
        //   expect(true).toEqual(output);
    });
});