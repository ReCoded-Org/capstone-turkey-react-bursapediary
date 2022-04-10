import { render, cleanup } from '@testing-library/react';
import Header from './Header';
import { HOME_PAGE_TITLE, HOME_INFORMATION_TEXT } from '../../constants/index';

describe('Header', () => {
  afterEach(() => cleanup());
  test('should render Header Page Title', () => {
    const { getByText } = render(<Header />);
    const headerPageTitle = getByText(HOME_PAGE_TITLE);
    expect(headerPageTitle).toBeInTheDocument();
  });

  test('Header Page Title should have the primary color', () => {
    const { getByText } = render(<Header />);
    const headerPageTitle = getByText(HOME_PAGE_TITLE);
    expect(headerPageTitle).toHaveStyle(`color: rgb(106,44,112,1)`);
  });

  test('should render Header Information Text', () => {
    const { getByText } = render(<Header />);
    const headerInformationText = getByText(HOME_INFORMATION_TEXT);
    expect(headerInformationText).toBeInTheDocument();
  });

  test('should render Hero illustration', () => {
    const { getByAltText } = render(<Header />);
    const heroIllustration = getByAltText(
      /Illustration of people who have dreams/i,
    );
    expect(heroIllustration).toBeInTheDocument();
  });
});
