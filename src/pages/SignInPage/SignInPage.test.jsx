import { render, cleanup } from '../../testUtils';

import SignInPage from './SignInPage';

describe('SignInPage', () => {
  afterEach(() => cleanup());

  test('should render SignInPage header text', () => {
    const { getAllByText } = render(<SignInPage />);
    const signInTexts = getAllByText('Sign In');
    expect(signInTexts[0]).toBeInTheDocument();
  });

  test('SignInPage header text should have the primary color', () => {
    const { getAllByText } = render(<SignInPage />);
    const signInTexts = getAllByText('Sign In');
    expect(signInTexts[0]).toHaveStyle('color: rgb(106,44,112,1)');
  });
});
