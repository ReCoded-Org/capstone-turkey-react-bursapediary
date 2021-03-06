import { render, cleanup } from '../../../testUtils';

import LanguageDropdown from './LanguageDropdown';

describe('LanguageDropdown', () => {
  afterEach(() => cleanup());
  test('should render button inner text', () => {
    const { getByText } = render(<LanguageDropdown />);
    const buttonText = getByText('Turkish');
    expect(buttonText).toBeInTheDocument();
  });

  test('should render dropdown menu', () => {
    const { getByTestId } = render(<LanguageDropdown />);
    const dropdownMenu = getByTestId('dropdown-menu');
    expect(dropdownMenu).toBeInTheDocument();
  });
});
