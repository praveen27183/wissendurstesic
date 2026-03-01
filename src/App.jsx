import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Events from './pages/Events';
import Workshops from './pages/Workshops';
import Registration from './pages/Registration';
import FoodAccommodation from './pages/FoodAccommodation';
import Offers from './pages/Offers';
import About from './pages/About';

// Scroll to top whenever the route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-renaissance-dark flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16 md:pt-20 lg:pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/food-accommodation" element={<FoodAccommodation />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/aboutus" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

