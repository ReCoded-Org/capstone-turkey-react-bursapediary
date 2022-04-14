import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import Navbar from './Navbar';

describe('Navbar', () => {
  afterEach(() => cleanup());
  test('should render button inner text', () => {
    const { getByText } = render(<Navbar />);
    const buttonText = getByText('Sign Up');
    expect(buttonText).toBeInTheDocument();
  });

  test('should render navigation', () => {
    const { getByTestId } = render(<Navbar />);
    const navigation = getByTestId('valid-navigation');
    expect(navigation).toBeInTheDocument();
  });

  test('should have style', () => {
    /* const color = 'rgb(107, 33, 168)'; */
    const { getByText } = render(<Navbar />);
    const homeTitle = getByText('Home');
    expect(homeTitle).toHaveStyle('color: rgb(107,33,168,1)');
  });

  test('should have style button', () => {
    const { getByText } = render(<Navbar />);
    const buttonBg = getByText('Sign In');
    expect(buttonBg).toHaveStyle('backgroundColor: rgb(107,33,168,1)');
  });
});
