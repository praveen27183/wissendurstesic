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
      <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center h-14 md:h-20 w-full gap-8">

            {/* Logo */}
            <Link
              to="/Home.jsx"
              className="flex items-center space-x-4 group z-20 flex-shrink-0"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-st-red blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-700 rounded-full"></div>

                <img
                  src="/asset/logo/home_page.png"
                  alt=" homepage Logo"
                  className="h-10 md:h-12 lg:h-14 w-auto object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] relative z-10 transition-transform duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_0_12px_rgba(229,9,20,0.6)]"
                />
              </div>

              {/* Text */}
              <div className="hidden sm:flex flex-col">
                <span className="text-lg md:text-2xl font-black text-white tracking-[0.15em] leading-none group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] transition-all">
                  WISSENDURST
                </span>

                <span className="text-[#b3b3b3] group-hover:text-st-red text-[9px] md:text-[10px] tracking-[0.3em] font-bold uppercase mt-1 transition-colors">
                  ESIC Medical College
                </span>
              </div>
            </Link>


            {/* Desktop Menu */}
            <div className="hidden lg:flex flex-1 items-center justify-end space-x-4 xl:space-x-6">
              {[
                { to: '/', label: 'Home' },
                { to: '/registration', label: 'Registration' },
                { to: '/quizzes', label: 'Quizzes' },
                { to: '/workshops', label: 'Workshops' },
                { to: '/academicevents', label: 'Academic Events' },
                { to: '/debateandoratory', label: 'Debate Forum' },
                { to: '/foodaccommodation', label: 'Food & Accomm.' },
                { to: '/aboutus', label: 'About Us' },
                { to: '/contact', label: 'Contact Us' },
              ].map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative text-[10px] xl:text-xs uppercase font-bold transition whitespace-nowrap group pb-1 ${isActive(link.to) ? 'text-white' : 'text-[#b3b3b3] hover:text-white'}`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-st-red shadow-[0_0_8px_rgba(229,9,20,0.8)] transform origin-left transition-transform duration-300 ${isActive(link.to) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button - Styled like the screenshot */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden relative w-12 h-12 flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/5 hover:border-st-red hover:shadow-[0_0_15px_rgba(229,9,20,0.3)] transition-all z-20 group"
            >
              <div className="flex flex-col space-y-[6px] items-center justify-center">
                <span className="w-5 h-[2px] bg-current transform -translate-x-1 group-hover:translate-x-0 group-hover:bg-st-red transition-all"></span>
                <span className="w-5 h-[2px] bg-current transform translate-x-1 group-hover:translate-x-0 group-hover:bg-st-red transition-all"></span>
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
            className="fixed inset-0 z-[100] bg-[#0a0a0a]/95 backdrop-blur-xl text-white flex flex-col justify-start sm:justify-center items-center overflow-y-auto overflow-x-hidden pt-20 pb-12 sm:py-0"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 lg:top-10 lg:right-10 w-12 h-12 lg:w-16 lg:h-16 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-st-red hover:shadow-[0_0_15px_rgba(229,9,20,0.4)] transition-all z-[101]"
            >
              <X strokeWidth={1} size={28} />
            </button>

            <motion.div
              variants={linkContainerVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col items-center justify-center w-full px-4 sm:px-6 space-y-6 sm:space-y-10 max-w-full sm:max-w-4xl mt-8"
            >
              {/* Main Links */}
              <div className="flex flex-col items-start space-y-4 sm:-space-y-4 w-full pl-0 sm:pl-4 overflow-visible py-4">
                {[
                  { num: 'I', label: 'HOME', to: '/' },
                  { num: 'II', label: 'ABOUT', to: '/aboutus' },
                  { num: 'III', label: 'QUIZZES', to: '/quizzes' },
                  { num: 'IV', label: 'WORKSHOPS', to: '/workshops' },
                  { num: 'V', label: 'CONTACT US', to: '/contactus' },
                  { num: 'VI', label: 'ACADEMIC EVENTS', to: '/academic-events' },
                  { num: 'VII', label: 'DEBATE AND ORATORY FORUM', to: '/debate-and-oratory-forum' },
                  { num: 'VIII', label: 'FOOD AND ACCOMMODATION', to: '/food-and-accommodation' }
                ].map((item, index) => (
                  <motion.div key={item.to} variants={mainLinkVariants} className={`w-full flex ${index % 2 === 0 ? 'ml-0 sm:ml-12' : 'ml-4 sm:ml-24'}`}>
                    <Link to={item.to} onClick={() => setIsOpen(false)} className="flex items-start sm:items-center group w-fit relative">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-500 flex items-center justify-center mr-3 sm:mr-4 text-xs sm:text-sm font-serif text-gray-400 group-hover:border-st-red group-hover:text-st-red group-hover:shadow-[0_0_10px_rgba(229,9,20,0.5)] transition-all duration-500 shrink-0 mt-1 sm:mt-0">{item.num}</div>
                      <span className="text-[2.25rem] min-[375px]:text-[2.5rem] sm:text-[5.5rem] md:text-[7rem] font-title uppercase text-[#eeeeee] group-hover:text-white group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-500 leading-[1.1] sm:leading-none text-left" style={{ fontFamily: '"DM Serif Display", serif', letterSpacing: '-0.03em' }}>{item.label}</span>
                      <span className="absolute -bottom-2 sm:bottom-4 left-0 w-full h-[4px] bg-st-red shadow-[0_0_15px_rgba(229,9,20,0.8)] scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-500"></span>
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