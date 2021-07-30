import Big from 'big.js';
import operate from '../../logic/operate';

describe('operate.js module', () => {
  it("should divide `total` by `next` when operator is '÷'", () => {
    const result = operate(9, 3, '÷');

    expect(result).toEqual(Big(3));
    expect(result).toBeInstanceOf(Big);
  });

  it("should multiply `total` by `next` when operator is '*'", () => {
    const result = operate(9, 3, '*');

    expect(result).toEqual(Big(27));
    expect(result).toBeInstanceOf(Big);
  });

  it("should add `next` to `total` when operator is '+'", () => {
    const result = operate(9, 3, '+');

    expect(result).toEqual(Big(12));
    expect(result).toBeInstanceOf(Big);
  });

  it("should subtract `next` from `total` when operator is '-'", () => {
    const result = operate(9, 3, '-');

    expect(result).toEqual(Big(6));
    expect(result).toBeInstanceOf(Big);
  });
});
