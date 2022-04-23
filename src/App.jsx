import { Route, Routes } from 'react-router-dom';

import './App.css';
// import Home from './pages/Home';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import SignInPage from './pages/SignInPage/SignInPage';
// import Footer from './components/Footer/Footer';
import { SIGN_UP_ROUTE, SIGN_IN_ROUTE } from './routes';

function App() {
  return (
    <div>
      <Routes>
        <Route path={SIGN_UP_ROUTE} element={<SignUpPage />} />
        <Route path={SIGN_IN_ROUTE} element={<SignInPage />} />
      </Routes>
    </div>
  );
}
export default App;
