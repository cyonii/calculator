import Big from 'big.js';

export default function operate(total, next, operator) {
  switch (operator) {
    case '÷':
      return Big(total).div(next);
    case '*':
      return Big(total).times(next);
    case '+':
      return Big(total).plus(next);
    case '-':
      return Big(total).minus(next);
    case '%':
      return Big(total).div(100);
    default:
      return total;
  }
}
