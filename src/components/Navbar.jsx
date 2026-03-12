import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const menuVariants = {
    closed: {
      clipPath: "circle(0px at calc(100% - 40px) 44px)",
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
        delay: 0.1,
      }
    },
    open: {
      clipPath: "circle(150% at calc(100% - 40px) 44px)",
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      }
    }
  };

  const linkContainerVariants = {
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3
      }
    }
  };

  const mainLinkVariants = {
    closed: { y: 40, opacity: 0, transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
    open: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }
  };

  const secondaryLinkVariants = {
    closed: { y: 20, opacity: 0, transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
    open: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }
  };

  return (
    <>
      {/* Navbar */}
      <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#1A0D0D]/95 backdrop-blur-md border-b border-[#D4AF37]/50 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center h-14 md:h-20 w-full gap-8">

            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-4 group z-20 flex-shrink-0"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#D4AF37] blur-md opacity-20 group-hover:opacity-60 transition-opacity duration-700 rounded-full"></div>

                <img
                  src="/wissennobg.png"
                  alt="Wissendurst Logo"
                  className="h-10 md:h-12 lg:h-14 w-auto object-contain drop-shadow-[0_0_8px_rgba(212,175,55,0.6)] relative z-10 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Text */}
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
            <div className="hidden lg:flex flex-1 items-center justify-end space-x-4 xl:space-x-6">
              <Link to="/" className={`text-[10px] xl:text-xs uppercase font-bold transition ${isActive('/') ? 'text-[#FBF1CF]' : 'text-[#D4AF37]/80 hover:text-[#FBF1CF]'}`}>Home</Link>
              <Link to="/registration" className={`text-[10px] xl:text-xs uppercase font-bold transition whitespace-nowrap ${isActive('/registration') ? 'text-[#FBF1CF]' : 'text-[#D4AF37]/80 hover:text-[#FBF1CF]'}`}>Registration</Link>
              <Link to="/quizzes" className={`text-[10px] xl:text-xs uppercase font-bold transition ${isActive('/quizzes') ? 'text-[#FBF1CF]' : 'text-[#D4AF37]/80 hover:text-[#FBF1CF]'}`}>Quizzes</Link>
              <Link to="/workshops" className={`text-[10px] xl:text-xs uppercase font-bold transition ${isActive('/workshops') ? 'text-[#FBF1CF]' : 'text-[#D4AF37]/80 hover:text-[#FBF1CF]'}`}>Workshops</Link>
              <Link to="/events" className={`text-[10px] xl:text-xs uppercase font-bold transition ${isActive('/events') ? 'text-[#FBF1CF]' : 'text-[#D4AF37]/80 hover:text-[#FBF1CF]'}`}>Events</Link>
              <Link to="/academicevents" className={`text-[10px] xl:text-xs uppercase font-bold transition whitespace-nowrap ${isActive('/academicevents') ? 'text-[#FBF1CF]' : 'text-[#D4AF37]/80 hover:text-[#FBF1CF]'}`}>Academic Events</Link>
              <Link to="/debateandoratory" className={`text-[10px] xl:text-xs uppercase font-bold transition whitespace-nowrap ${isActive('/debateandoratory') ? 'text-[#FBF1CF]' : 'text-[#D4AF37]/80 hover:text-[#FBF1CF]'}`}>Debate Forum</Link>
              <Link to="/foodaccommodation" className={`text-[10px] xl:text-xs uppercase font-bold transition whitespace-nowrap ${isActive('/foodaccommodation') ? 'text-[#FBF1CF]' : 'text-[#D4AF37]/80 hover:text-[#FBF1CF]'}`}>Food & Accomm.</Link>
              <Link to="/aboutus" className={`text-[10px] xl:text-xs uppercase font-bold transition whitespace-nowrap ${isActive('/aboutus') ? 'text-[#FBF1CF]' : 'text-[#D4AF37]/80 hover:text-[#FBF1CF]'}`}>About Us</Link>
              <Link to="/contact" className={`text-[10px] xl:text-xs uppercase font-bold transition whitespace-nowrap ${isActive('/contact') ? 'text-[#FBF1CF]' : 'text-[#D4AF37]/80 hover:text-[#FBF1CF]'}`}>Contact Us</Link>
            </div>

            {/* Mobile Menu Button - Styled like the screenshot */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden relative w-12 h-12 flex items-center justify-center rounded-full border border-[#D4AF37]/50 text-[#FBF1CF] hover:bg-[#FBF1CF]/10 transition-colors z-20 group"
            >
              <div className="flex flex-col space-y-[6px] items-center justify-center">
                <span className="w-5 h-[1px] bg-current transform -translate-x-1 group-hover:translate-x-0 transition-transform"></span>
                <span className="w-5 h-[1px] bg-current transform translate-x-1 group-hover:translate-x-0 transition-transform"></span>
              </div>
            </button>

          </div>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu (Framer Motion Design) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[100] bg-[#1A0D0D]/95 backdrop-blur-xl text-white flex flex-col justify-center items-center overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 lg:top-10 lg:right-10 w-12 h-12 lg:w-16 lg:h-16 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors z-[101]"
            >
              <X strokeWidth={1} size={28} />
            </button>

            <motion.div
              variants={linkContainerVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col items-center justify-center w-full px-6 space-y-10 max-w-sm mt-8"
            >
              {/* Main Links */}
              <div className="flex flex-col items-start space-y-4 w-full pl-4 overflow-hidden py-4">
                <motion.div variants={mainLinkVariants} className="w-full">
                  <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center group overflow-hidden">
                    <div className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center mr-6 text-sm font-serif text-gray-400 group-hover:border-white group-hover:text-white transition-colors duration-500">I</div>
                    <span className="text-6xl sm:text-7xl font-title uppercase text-[#eeeeee] tracking-tight group-hover:text-white transition-colors duration-500" style={{ fontFamily: '"DM Serif Display", serif', letterSpacing: '-0.03em' }}>HOME</span>
                  </Link>
                </motion.div>

                <motion.div variants={mainLinkVariants} className="w-full">
                  <Link to="/events" onClick={() => setIsOpen(false)} className="flex items-center group overflow-hidden">
                    <div className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center mr-6 text-sm font-serif text-gray-400 group-hover:border-white group-hover:text-white transition-colors duration-500">II</div>
                    <span className="text-6xl sm:text-7xl font-title uppercase text-[#eeeeee] tracking-tight group-hover:text-white transition-colors duration-500" style={{ fontFamily: '"DM Serif Display", serif', letterSpacing: '-0.03em' }}>EVENTS</span>
                  </Link>
                </motion.div>

                <motion.div variants={mainLinkVariants} className="w-full">
                  <Link to="/aboutus" onClick={() => setIsOpen(false)} className="flex items-center group overflow-hidden">
                    <div className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center mr-6 text-sm font-serif text-gray-400 group-hover:border-white group-hover:text-white transition-colors duration-500">III</div>
                    <span className="text-6xl sm:text-7xl font-title uppercase text-[#eeeeee] tracking-tight group-hover:text-white transition-colors duration-500" style={{ fontFamily: '"DM Serif Display", serif', letterSpacing: '-0.03em' }}>ABOUT</span>
                  </Link>
                </motion.div>
              </div>

              {/* Secondary Links Grid */}
              <div className="grid grid-cols-2 gap-x-12 gap-y-6 w-full pt-10 pl-6">
                {[
                  { name: 'Registration', path: '/registration' },
                  { name: 'Workshops', path: '/workshops' },
                  { name: 'Academic', path: '/academicevents' },
                  { name: 'Quizzes', path: '/quizzes' },
                  { name: 'Debate Forum', path: '/debateandoratory' },
                  { name: 'Contact us', path: '/contact' },
                  { name: 'Food & Accommodation', path: '/foodaccommodation' },
                ].map((link, index) => (
                  <motion.div key={index} variants={secondaryLinkVariants}>
                    <Link to={link.path} onClick={() => setIsOpen(false)} className="font-title text-xl text-gray-300 hover:text-white transition-colors underline underline-offset-4 decoration-1 whitespace-nowrap" style={{ fontFamily: '"DM Serif Display", serif' }}>
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;