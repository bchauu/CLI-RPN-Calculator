
const operators = new Set(['+', '-', '/', '*']);

//to check symbols and compute
const computeWithSymbol = (input, firstOperand, secondOperand) => {
    if (!operators.has(input) || !Number.isInteger(parseInt(firstOperand)) || !Number.isInteger(parseInt(secondOperand))) return 'invalid input';
    let result;
    if (input === '+') {
      result = parseInt(secondOperand) + parseInt(firstOperand);
    } else if (input === '-') {
      result = parseInt(secondOperand) - parseInt(firstOperand);
    } else if (input === '*') {
      result = parseInt(secondOperand) * parseInt(firstOperand);
    } else if (input === '/') {
      result = parseInt(secondOperand) / parseInt(firstOperand);
    }
    console.log(result);
    return result;
  };

  export default { operators, computeWithSymbol }