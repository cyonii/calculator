import Big from 'big.js';

export default function operate(numberOne, numberTwo, operator) {
  const operatorsMap = {
    '÷': Big.prototype.div,
    '*': Big.prototype.times,
    '+': Big.prototype.plus,
    '-': Big.prototype.minus,
    '%': Big.prototype.mod,
  };

  return operatorsMap[operator].call(
    Big(numberOne),
    Big(numberTwo),
  ).toString();
}
