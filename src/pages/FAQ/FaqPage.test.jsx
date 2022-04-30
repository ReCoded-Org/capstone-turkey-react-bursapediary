import { render, cleanup } from '../../testUtils';
import FaqPage from './FaqPage';

describe('FAQ Page', () => {
  afterEach(() => cleanup());

  test('should render FAQ Page', () => {
    const { getByTestId } = render(<FaqPage />);
    const page = getByTestId('valid-page');
    expect(page).toBeInTheDocument();
  });

  test('should render FAQ page header', () => {
    const { getByText } = render(<FaqPage />);
    const pageHeader = getByText('Frequently Asked Questions');
    expect(pageHeader).toBeInTheDocument();
  });

  test('should render accordions', () => {
    const { getByTestId } = render(<FaqPage />);
    const page = getByTestId('valid-accordions');
    expect(page).toBeInTheDocument();
  });
});
