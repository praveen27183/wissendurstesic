import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect, lazy, Suspense } from 'react';
import { PerformanceProvider } from './context/PerformanceContext';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import IntroAnimation from './components/IntroAnimation';
import SplashCursor from './components/splash';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Academicevents = lazy(() => import('./pages/Academicevents'));
const Debateandoratory = lazy(() => import('./pages/Debateandoratory.jsx'));
const Workshops = lazy(() => import('./pages/Workshops'));
const Registration = lazy(() => import('./pages/Registration'));
const FoodAccommodation = lazy(() => import('./pages/FoodAccommodation'));
const About = lazy(() => import('./pages/About'));
const Contactus = lazy(() => import('./pages/Contactus'));
const Quizzes = lazy(() => import('./pages/Quizzes'));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen bg-st-dark flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-st-red border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Scroll to top whenever the route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};

function App() {
  const [showIntro, setShowIntro] = useState(() => {
    return !sessionStorage.getItem('introSeen');
  });

  const handleIntroComplete = () => {
    sessionStorage.setItem('introSeen', 'true');
    setShowIntro(false);
  };

  return (
    <PerformanceProvider>
      <Router>
        <Analytics />
        <SplashCursor />
        <ScrollToTop />
        {showIntro ? (
          <IntroAnimation onComplete={handleIntroComplete} />
        ) : (
          <div className="min-h-screen bg-renaissance-dark flex flex-col animate-fade-in transition-opacity duration-1000">
            <Navbar />
            <main className="flex-grow pt-20 md:pt-24">
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/academicevents" element={<Academicevents />} />
                  <Route path="/debateandoratory" element={<Debateandoratory />} />
                  <Route path="/workshops" element={<Workshops />} />
                  <Route path="/registration" element={<Registration />} />
                  <Route path="/foodaccommodation" element={<FoodAccommodation />} />
                  <Route path="/aboutus" element={<About />} />
                  <Route path="/contact" element={<Contactus />} />
                  <Route path="/quizzes" element={<Quizzes />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        )}
      </Router>
    </PerformanceProvider>
  );
}

export default App;

