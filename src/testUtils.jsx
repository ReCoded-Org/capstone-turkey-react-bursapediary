import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
// Import reducers
import userReducer from './features/user/userSlice';

function render(
  ui,
  {
    preloadedState,
    store = configureStore({ reducer: { user: userReducer }, preloadedState }),
    ...renderOptions
  } = {},
) {
  // eslint-disable-next-line react/prop-types
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <Router>{children}</Router>
        </I18nextProvider>
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
