import { render } from '../../testUtils';

import Home from './index';

test('renders Home page', () => {
  const { getByTestId } = render(<Home />);
  const HomePage = getByTestId('home-page');
  expect(HomePage).toBeInTheDocument();
});
