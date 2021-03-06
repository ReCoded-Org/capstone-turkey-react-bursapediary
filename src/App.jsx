import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Navbar from './components/Navbar/Navbar/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import AboutUs from './pages/AboutUs/AboutUs';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import SignInPage from './pages/SignInPage/SignInPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import SelectedProject from './features/projects/SelectedProject';
import FaqPage from './pages/FAQ/FaqPage';
import ContactUs from './pages/ContactUsPage/ContactUs';
import {
  SIGN_UP_ROUTE,
  SIGN_IN_ROUTE,
  HOME_ROUTE,
  ABOUT_ROUTE,
  FAQ_ROUTE,
  CONTACT_ROUTE,
  PROJECT_ROUTE,
} from './routes';

function App() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path={HOME_ROUTE} element={<Home />} />
        <Route path={ABOUT_ROUTE} element={<AboutUs />} />
        <Route path={FAQ_ROUTE} element={<FaqPage />} />
        <Route path={CONTACT_ROUTE} element={<ContactUs />} />
        <Route
          path={SIGN_UP_ROUTE}
          element={currentUser ? <Navigate to={HOME_ROUTE} /> : <SignUpPage />}
        />
        <Route
          path={SIGN_IN_ROUTE}
          element={currentUser ? <Navigate to={HOME_ROUTE} /> : <SignInPage />}
        />
        <Route path={PROJECT_ROUTE} element={<ProjectsPage />} />
        <Route path="/project/:id" element={<SelectedProject />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
