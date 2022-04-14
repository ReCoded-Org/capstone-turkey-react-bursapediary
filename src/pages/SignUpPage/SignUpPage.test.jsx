import { render, cleanup } from '@testing-library/react';

import SignUpPage from './SignUpPage';

describe('SignUpPage', () => {
  afterEach(() => cleanup());

  test('should render SignUpPage header text', () => {
    const { getByText } = render(<SignUpPage />);
    const signUpText = getByText('Create Account');
    expect(signUpText).toBeInTheDocument();
  });

  test('SignUpPage header text should have the primary color', () => {
    const { getByText } = render(<SignUpPage />);
    const signUpText = getByText('Create Account');
    expect(signUpText).toHaveStyle('color: rgb(106,44,112,1)');
  });
});
