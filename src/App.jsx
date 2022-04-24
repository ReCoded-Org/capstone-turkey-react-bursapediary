import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import SignInPage from './pages/SignInPage/SignInPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import {
  SIGN_UP_ROUTE,
  SIGN_IN_ROUTE,
  HOME_ROUTE,
  PROJECT_ROUTE,
} from './routes';
import SelectedProject from './features/projects/SelectedProject';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path={HOME_ROUTE} element={<Home />} />
        <Route path={SIGN_UP_ROUTE} element={<SignUpPage />} />
        <Route path={SIGN_IN_ROUTE} element={<SignInPage />} />
        <Route path={PROJECT_ROUTE} element={<ProjectsPage />} />
        <Route path="/project/:id" element={<SelectedProject />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
