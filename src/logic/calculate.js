import operate from './operate';

export default function calculate(data, btnName) {
  let { total, next, operation } = { ...data };

  if (btnName === 'AC') { // To reset state
    total = null;
    next = null;
    operation = null;
  } else if (btnName === '+/-') { // To negate one of the operands
    if (next) {
      next *= -1;
    } else if (total) {
      total *= -1;
    }
  } else if (btnName === '=') { // To run calculation operation
    operate(total, next, operation);
  }

  return { total, next, operation };
}
