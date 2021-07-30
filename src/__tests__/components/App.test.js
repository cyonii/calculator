import { render, screen, within } from '@testing-library/react';
import App from '../../components/App';

describe('<App /> Component', () => {
  it('should render successfully', () => {
    render(<App />);
    const app = screen.getByTestId('app');
    expect(app).toBeInTheDocument();
    expect(within(app).getByTestId('display')).toBeInTheDocument();
    expect(within(app).getByTestId('button-panel')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    render(<App />);
    const app = screen.getByTestId('app');
    expect(app).toMatchSnapshot();
  });
});
