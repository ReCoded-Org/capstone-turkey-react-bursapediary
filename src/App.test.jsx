import { render } from '@testing-library/react';

import App from './App';

test('renders Home page', () => {
  const { getByTestId } = render(<App />);
  const HomePage = getByTestId('home-page');
  expect(HomePage).toBeInTheDocument();
});
