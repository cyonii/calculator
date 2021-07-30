import { resetState } from '../../state/state';

describe('state.js module', () => {
  test('Should return an initial state with empty values', () => {
    expect(resetState()).toEqual({ total: '', next: '', operator: '' });
  });
});
