import { render, cleanup } from '../../../testUtils';

import Form from './Form';

describe('Form', () => {
  afterEach(() => cleanup());
  test('should render button inner text', () => {
    const { getByText } = render(<Form />);
    const buttonText = getByText('SEND');
    expect(buttonText).toBeInTheDocument();
  });

  test('should render form', () => {
    const { getByTestId } = render(<Form />);
    const form = getByTestId('valid-form');
    expect(form).toBeInTheDocument();
  });
});
