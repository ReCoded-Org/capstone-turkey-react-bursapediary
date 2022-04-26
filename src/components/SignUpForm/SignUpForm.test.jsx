import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import SignUpForm from './SignUpForm';
import { store } from '../../app/store';

const { getByText } = render(
  <Router>
    <Provider store={store}>
      <SignUpForm />
    </Provider>
  </Router>,
);
it('should show validation on blur', async () => {
  const input = getByText('Sign Up');
  fireEvent.click(input);
  await screen.findByText('*Email is required');
  await screen.findByText('*Password is required');
  await screen.findByText('*Username is required');
});
