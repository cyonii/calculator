import { cleanup, render, screen } from '@testing-library/react';
import Display from '../../components/Display';

describe('<Display /> Component', () => {
  afterEach(() => cleanup);

  it('should display correctly', () => {
    render(<Display total="" next="" operator="" />);

    const display = screen.getByTestId('display');
    expect(display).toBeInTheDocument();
    expect(display).toHaveTextContent('0');
  });

  it('should display `total` value when `next` value is not given', () => {
    render(<Display total="234" next="" operator="" />);

    const display = screen.getByTestId('display');
    expect(display).toHaveTextContent('234');
  });

  it('should NOT display `next` value when `operator` value is NOT given', () => {
    render(<Display total="234" next="64425" operator="" />);

    const display = screen.getByTestId('display');
    expect(display).not.toHaveTextContent('64425');
    expect(display).toHaveTextContent('234');
  });

  it('should display `next` value when `next` & `operator` is given', () => {
    render(<Display total="234" next="43567" operator="+" />);

    const display = screen.getByTestId('display');
    expect(display).toHaveTextContent('43567');
  });

  it('should match snapshot', () => {
    render(<Display total="234" next="43567" operator="+" />);

    const display = screen.getByTestId('display');
    expect(display).toMatchSnapshot();
  });
});
