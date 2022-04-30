import { render, cleanup } from '../../../testUtils';
import TechnicalAccordion from './TechnicalAccordion';

describe('FAQ Page', () => {
  afterEach(() => cleanup());

  test('should render technical accordion', () => {
    const { getByTestId } = render(<TechnicalAccordion />);
    const technicalAccordion = getByTestId('valid-technicalAccordion');
    expect(technicalAccordion).toBeInTheDocument();
  });

  test('should render technical accordion title', () => {
    const { getByText } = render(<TechnicalAccordion />);
    const title = getByText('Technical');
    expect(title).toBeInTheDocument();
  });
});
