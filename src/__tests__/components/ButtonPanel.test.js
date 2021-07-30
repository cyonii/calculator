import { render, screen, cleanup, within } from '@testing-library/react';
import ButtonPanel from '../../components/ButtonPanel';

describe('<ButtonPanel /> Component', () => {
  let testBtnPanel;

  beforeEach(async () => {
    testBtnPanel = <ButtonPanel btnClickHandler={jest.fn} />;
  });

  afterEach(() => cleanup);

  test('should render correctly', () => {
    render(<ButtonPanel btnClickHandler={jest.fn} />);

    const buttonPanel = screen.getByTestId('button-panel');
    expect(buttonPanel).toBeInTheDocument();
    expect(buttonPanel.querySelectorAll('button')).toHaveLength(19);
    expect(within(buttonPanel).getAllByTestId(/btn-.+/)).toHaveLength(19);
  });

  test('should match snapshot', () => {
    expect(testBtnPanel).toMatchSnapshot();
  });
});
