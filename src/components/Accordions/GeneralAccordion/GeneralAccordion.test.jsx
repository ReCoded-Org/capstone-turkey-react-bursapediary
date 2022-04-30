import { render, cleanup } from '../../../testUtils';
import GeneralAccordion from './GeneralAccordion';

describe('FAQ Page', () => {
  afterEach(() => cleanup());

  test('should render general accordion', () => {
    const { getByTestId } = render(<GeneralAccordion />);
    const generalAccordion = getByTestId('valid-generalAccordion');
    expect(generalAccordion).toBeInTheDocument();
  });

  test('should render general accordion title', () => {
    const { getByText } = render(<GeneralAccordion />);
    const title = getByText('General');
    expect(title).toBeInTheDocument();
  });
});
