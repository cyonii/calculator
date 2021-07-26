import { render, screen, cleanup } from '@testing-library/react';
import Button from '../../components/Button';

afterEach(() => cleanup);

it('should render Button component', () => {
  render(<Button name="1" id="test" clickHandler={jest.fn} />);

  const buttonElement = screen.getByText('1');
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveTextContent('1');
});
