import Big from 'big.js';

export default function operate(total, next, operator) {
  const operatorMap = {
    '÷': Big.prototype.div,
    '*': Big.prototype.times,
    '+': Big.prototype.plus,
    '-': Big.prototype.minus,
  };

  if (operator !== '%') {
    return operatorMap[operator].call(total, next);
  }
  return new Big(total).div(100);
}
