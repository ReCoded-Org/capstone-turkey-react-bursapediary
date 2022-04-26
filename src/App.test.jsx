import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from './pages/Home/index';
import { store } from './app/store';

test('renders Home page', () => {
  const { getByTestId } = render(
    <Router>
      <Provider store={store}>
        <Home />
      </Provider>
    </Router>,
  );
  const HomePage = getByTestId('home-page');
  expect(HomePage).toBeInTheDocument();
});
