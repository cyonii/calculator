import operate from './operate';
import { resetState } from '../state/utils';

// Helper to resolve numeric input
const numberResolver = (initial, addition) => {
  if (addition === '.') {
    if (initial.toString().includes('.')) return initial;
    return initial + addition;
  }
  return (initial === 0 || initial === '0') ? addition : (initial + addition);
};

export default function calculate(data, buttonName) {
  let { total, next, operator } = { ...data };
  const OPERATORS = ['÷', '*', '+', '-', '%'];

  // Reset state with AC key
  if (buttonName === 'AC') return resetState();

  if (buttonName.match(/[0-9]|\./) !== null) { // When number key or dot (.) is pressed
    if (!operator) {
      total = numberResolver(total, buttonName);
    } else {
      next = numberResolver(next, buttonName);
    }
  } else if (OPERATORS.includes(buttonName)) { // When an operator is pressed
    if (buttonName === '%') {
      total = operate(total, next, buttonName);
    } else {
      operator = buttonName;
    }
  } else if (buttonName === '+/-') { // When '+/-' => should negate current input
    if (next) {
      next *= -1;
    } else {
      total *= -1;
    }
  } else if (buttonName === '=') { // When '=' is pressed => run calculation
    if (total && next && operator) {
      total = operate(total, next, operator).toString();
      next = '';
      operator = '';
    }
  }

  return { total, next, operator };
}
