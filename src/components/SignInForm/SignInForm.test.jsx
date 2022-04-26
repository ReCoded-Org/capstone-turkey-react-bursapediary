import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import SignInForm from './SignInForm';
import { store } from '../../app/store';

const { getByText } = render(
  <Provider store={store}>
    <SignInForm />
  </Provider>,
);

it('should show validation on blur', async () => {
  const input = getByText('Login');
  fireEvent.click(input);
  await screen.findByText('*Username is required');
  await screen.findByText('*Password is required');
});
