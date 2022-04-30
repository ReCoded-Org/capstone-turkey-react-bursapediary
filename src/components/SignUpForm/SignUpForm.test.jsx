import { render, screen, fireEvent } from '../../testUtils';

import SignUpForm from './SignUpForm';

const { getByText } = render(<SignUpForm />);
it('should show validation on blur', async () => {
  const input = getByText('Sign Up');
  fireEvent.click(input);
  await screen.findByText('*Email is required');
  await screen.findByText('*Password is required');
  await screen.findByText('*Username is required');
});
