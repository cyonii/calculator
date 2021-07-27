import { render, screen, cleanup } from '@testing-library/react';
import Button from '../../components/Button';

describe('<Button /> Component', () => {
  let testButton;

  beforeEach(async () => {
    testButton = <Button name="1" clickHandler={jest.fn} />;
  });

  afterEach(() => cleanup);

  it('should render correctly', () => {
    render(testButton);

    const buttonElement = screen.getByTestId('btn-1');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('1');
  });

  test('should match snapshot', () => {
    expect(testButton).toMatchSnapshot();
  });
});
