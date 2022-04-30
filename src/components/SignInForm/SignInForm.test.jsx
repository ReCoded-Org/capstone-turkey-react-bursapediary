import { render, fireEvent, screen } from '../../testUtils';

import SignInForm from './SignInForm';

const { getByText } = render(<SignInForm />);

it('should show validation on blur', async () => {
  const input = getByText('Login');
  fireEvent.click(input);
  await screen.findByText('*Username is required');
  await screen.findByText('*Password is required');
});
