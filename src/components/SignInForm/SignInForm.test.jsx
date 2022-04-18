import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, screen } from '@testing-library/react';

import SignInForm from './SignInForm';

const { getByText } = render(<SignInForm />);

it('should show validation on blur', async () => {
  const input = getByText('Login');
  fireEvent.click(input);
  await screen.findByText('*Email is required');
  await screen.findByText('*Password is required');
});
