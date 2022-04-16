import { render, cleanup } from '@testing-library/react';

import SignInPage from './SignInPage';

describe('SignInPage', () => {
  afterEach(() => cleanup());

  test('should render SignInPage header text', () => {
    const { getByText } = render(<SignInPage />);
    const signInText = getByText('Sign In');
    expect(signInText).toBeInTheDocument();
  });

  test('SignInPage header text should have the primary color', () => {
    const { getByText } = render(<SignInPage />);
    const signInText = getByText('Sign In');
    expect(signInText).toHaveStyle('color: rgb(106,44,112,1)');
  });
});
