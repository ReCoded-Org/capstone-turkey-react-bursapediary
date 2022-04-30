import { render, cleanup } from '../../../testUtils';
import RegisterAccordion from './RegisterAccordion';

describe('FAQ Page', () => {
  afterEach(() => cleanup());

  test('should render register accordion', () => {
    const { getByTestId } = render(<RegisterAccordion />);
    const registerAccordion = getByTestId('valid-registerAccordion');
    expect(registerAccordion).toBeInTheDocument();
  });

  test('should render register accordion title', () => {
    const { getByText } = render(<RegisterAccordion />);
    const title = getByText('Register');
    expect(title).toBeInTheDocument();
  });
});
