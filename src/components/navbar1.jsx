import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { events, workshops } from '../data/dummyData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <>
<nav
        className={`fixed w-full top-8 z-50 transition-all duration-500 font-body ${scrolled
          ? 'bg-[#2A1610]/95 backdrop-blur-md border-b border-[#D4AF37]/50 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-0'
          : 'bg-gradient-to-b from-[#1A0D0D]/90 to-transparent pt-2 pb-1'
          }`}
      >
      
      {/* MAIN NAVBAR */}
      

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center h-14 md:h-16 lg:h-20">

            {/* Logo */}
            <Link to="/" className="flex items-center space-x-4 group z-20 flex-shrink-0">

              <div className="relative">
                <div className="absolute inset-0 bg-[#D4AF37] blur-md opacity-20 group-hover:opacity-60 transition-opacity duration-700 rounded-full"></div>

                <img
                  src="/wissendurstesic_logo.png"
                  alt="Wissendurst Logo"
                  className="h-10 md:h-12 lg:h-14 w-auto object-contain drop-shadow-[0_0_8px_rgba(212,175,55,0.6)] relative z-10 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="hidden sm:flex flex-col">
                <span className="text-lg md:text-2xl font-black text-[#FBF1CF] tracking-[0.15em] leading-none">
                  WISSENDURST
                </span>

                <span className="text-[#D4AF37] text-[9px] md:text-[10px] tracking-[0.3em] font-bold uppercase mt-1">
                  ESIC Medical College
                </span>
              </div>

            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6">
              <Link to="/" className={`text-xs uppercase font-bold transition ${isActive('/') ? 'text-[#FBF1CF]' : 'text-[#D4AF37]/80 hover:text-[#FBF1CF]'}`}>Home</Link>
              <Link to="/registration" className={`text-xs uppercase font-bold transition ${isActive('/registration') ? 'text-[#FBF1CF]' : 'text-[#D4AF37]/80 hover:text-[#FBF1CF]'}`}>Registration</Link>
              <Link to="/quizzes" className={`text-xs uppercase font-bold transition ${isActive('/quizzes') ? 'text-[#FBF1CF]' : 'text-[#D4AF37]/80 hover:text-[#FBF1CF]'}`}>Quizzes</Link>
              <Link to="/workshops" className={`text-xs uppercase font-bold transition ${isActive('/workshops') ? 'text-[#FBF1CF]' : 'text-[#D4AF37]/80 hover:text-[#FBF1CF]'}`}>Workshops</Link>
              <Link to="/events" className={`text-xs uppercase font-bold transition ${isActive('/events') ? 'text-[#FBF1CF]' : 'text-[#D4AF37]/80 hover:text-[#FBF1CF]'}`}>Events</Link>
              <Link to="/academic-events" className={`text-xs uppercase font-bold transition ${isActive('/academic-events') ? 'text-[#FBF1CF]' : 'text-[#D4AF37]/80 hover:text-[#FBF1CF]'}`}>Academic Events</Link>
              <Link to="/debate-and-oratory-forum" className={`text-xs uppercase font-bold transition ${isActive('/debate-and-oratory-forum') ? 'text-[#FBF1CF]' : 'text-[#D4AF37]/80 hover:text-[#FBF1CF]'}`}>Debate & Oratory Forum</Link>
              <Link to="/food-accommodation" className={`text-xs uppercase font-bold transition ${isActive('/food-accommodation') ? 'text-[#FBF1CF]' : 'text-[#D4AF37]/80 hover:text-[#FBF1CF]'}`}>Food & Accommodation</Link>
              <Link to="/aboutus" className={`text-xs uppercase font-bold transition ${isActive('/aboutus') ? 'text-[#FBF1CF]' : 'text-[#D4AF37]/80 hover:text-[#FBF1CF]'}`}>About Us</Link>
              <Link to="/contact" className={`text-xs uppercase font-bold transition ${isActive('/contact') ? 'text-[#FBF1CF]' : 'text-[#D4AF37]/80 hover:text-[#FBF1CF]'}`}>Contact Us</Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-[#D4AF37]"
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>

          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-0 bg-[#1A0D0D]/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-6 transition-all duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
        >
          <Link to="/" onClick={() => setIsOpen(false)} className="text-lg text-[#D4AF37] uppercase font-bold">Home</Link>
          <Link to="/registration" onClick={() => setIsOpen(false)} className="text-lg text-[#D4AF37] uppercase font-bold">Registration</Link>
          <Link to="/quizzes" onClick={() => setIsOpen(false)} className="text-lg text-[#D4AF37] uppercase font-bold">Quizzes</Link>
          <Link to="/workshops" onClick={() => setIsOpen(false)} className="text-lg text-[#D4AF37] uppercase font-bold">Workshops</Link>
          <Link to="/events" onClick={() => setIsOpen(false)} className="text-lg text-[#D4AF37] uppercase font-bold">Events</Link>
          <Link to="/academic-events" onClick={() => setIsOpen(false)} className="text-lg text-[#D4AF37] uppercase font-bold">Academic Events</Link>
          <Link to="/debate-and-oratory-forum" onClick={() => setIsOpen(false)} className="text-lg text-[#D4AF37] uppercase font-bold">Debate & Oratory Forum</Link>
          <Link to="/food-accommodation" onClick={() => setIsOpen(false)} className="text-lg text-[#D4AF37] uppercase font-bold">Food & Accommodation</Link>
          <Link to="/aboutus" onClick={() => setIsOpen(false)} className="text-lg text-[#D4AF37] uppercase font-bold">About Us</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="text-lg text-[#D4AF37] uppercase font-bold">Contact Us</Link>
        </div>
      </nav>

    </>
  );
};

export default Navbar;