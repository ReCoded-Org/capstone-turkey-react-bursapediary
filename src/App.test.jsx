import { render } from '@testing-library/react';

import Home from './pages/Home/index';

test('renders Home page', () => {
  const { getByTestId } = render(<Home />);
  const HomePage = getByTestId('home-page');
  expect(HomePage).toBeInTheDocument();
});
