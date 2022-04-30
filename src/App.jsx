/* import { Route, Routes } from 'react-router-dom'; */
import Navbar from './components/Navbar/Navbar/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import AboutUs from './pages/AboutUs/AboutUs';

function App() {
  return (
    <div>
      <Navbar />
      {/* <Routes>
        <Route path="" element={} />
        <Route path="" element={} />
      </Routes> */}
      <Home />
      <AboutUs />
      <Footer />
    </div>
  );
}
export default App;
