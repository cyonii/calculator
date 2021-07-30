import { cleanup } from '@testing-library/react';
import calculate from '../../logic/calculate';

const initialState = { total: '', next: '', operator: '' };
const state = { total: '344', next: '425', operator: '+' };

describe('calculate.js module', () => {
  afterEach(() => cleanup());

  test('When AC button is pressed', () => {
    const result = calculate(state, 'AC');

    expect(result).toEqual(initialState);
  });

  test('When number or dot(.) button is pressed', () => {
    const result = calculate(initialState, '1');

    expect(result).toEqual({ ...initialState, total: '1' });
    expect(calculate(result, '.')).toEqual({ ...initialState, total: '1.' });
  });

  test('When operator button is pressed', () => {
    const result = calculate(initialState, '+');

    expect(result).toEqual({ ...initialState, operator: '+' });
  });

  test("When '+/-' => should negate current input", () => {
    const result = calculate({ ...initialState, total: '213' }, '+/-');
    expect(result).toEqual({ ...initialState, total: '-213' });
  });

  test("When '=' is pressed => run calculation", () => {
    const result = calculate(state, '=');
    expect(result).toEqual({ total: '769', next: '', operator: '' });
  });
});
