import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navDropdownData } from "../data/navData";
import { usePerformance } from "../context/PerformanceContext";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { isLowPerf } = usePerformance();

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
      <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${isLowPerf ? 'bg-[#0f0f14]' : 'bg-[#0f0f14]/90 backdrop-blur-md'} border-b border-st-red/20 shadow-[0_10px_30px_rgba(255,0,60,0.15)] py-2`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center h-14 md:h-20 w-full gap-8">

            {/* Logo */}
            <Link
              to="/"
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

                <span className="text-[#cbd5e1] group-hover:text-st-red text-[9px] md:text-[10px] tracking-[0.3em] font-bold uppercase mt-1 transition-colors">
                  ESIC Medical College
                </span>
              </div>
            </Link>


            {/* Desktop Menu */}
            <div className="hidden lg:flex flex-1 items-center justify-end space-x-1 xl:space-x-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/registration', label: 'Registration' },
                { to: '/quizzes', label: 'Quizzes', dropdownKey: 'quizzes' },
                { to: '/workshops', label: 'Workshops', dropdownKey: 'workshops' },
                { to: '/academicevents', label: 'Academic Events', dropdownKey: 'academicEvents' },
                { to: '/debateandoratory', label: 'Debate Forum', dropdownKey: 'debateForum' },
                { to: '/foodaccommodation', label: 'Food & Accomm.' },
                { to: '/aboutus', label: 'About Us' },
                { to: '/contact', label: 'Contact Us' },
              ].map(link => (
                <div 
                  key={link.to} 
                  className="relative group py-4"
                  onMouseEnter={() => link.dropdownKey && setActiveDropdown(link.dropdownKey)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={link.to}
                    onClick={() => {
                       window.scrollTo({ top: 0, behavior: 'instant' });
                       setActiveDropdown(null);
                    }}
                    className={`relative text-[13px] xl:text-[14px] uppercase font-bold transition whitespace-nowrap px-2 xl:px-3 py-1 group rounded-md flex items-center gap-1 ${isActive(link.to) ? 'text-white bg-st-red/10' : 'text-[#cbd5e1] hover:text-white hover:bg-white/5'}`}
                  >
                    {link.label}
                    {link.dropdownKey && (
                      <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === link.dropdownKey ? 'rotate-180 text-st-red' : 'text-gray-500 group-hover:text-white'}`} />
                    )}
                    <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-st-red shadow-[0_0_8px_rgba(255,0,60,0.8)] transform origin-left transition-transform duration-300 ${isActive(link.to) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                  </Link>

                  {/* Dropdown Menu */}
                  {link.dropdownKey && (
                    <AnimatePresence>
                      {activeDropdown === link.dropdownKey && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 ${isLowPerf ? 'bg-[#0f0f14]' : 'bg-[#0f0f14]/95 backdrop-blur-xl'} border border-st-red/30 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_20px_rgba(255,0,60,0.1)] overflow-hidden z-50`}
                        >
                          <div className="py-2 max-h-[60vh] overflow-y-auto custom-scrollbar">
                            {navDropdownData[link.dropdownKey].map((item) => (
                              <Link
                                key={item.id}
                                to={`${link.to}?id=${item.id}`}
                                onClick={() => {
                                  window.scrollTo({ top: 0, behavior: 'instant' });
                                  setActiveDropdown(null);
                                }}
                                className="block px-6 py-3 text-[13px] text-gray-300 hover:text-white hover:bg-st-red/10 border-b border-white/5 last:border-0 transition-colors uppercase tracking-wider font-bold"
                              >
                                {item.title}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
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
            className="fixed inset-0 z-[100] bg-[#0f0f14]/95 backdrop-blur-xl text-white flex flex-col justify-start sm:justify-center items-center overflow-y-auto overflow-x-hidden pt-20 pb-12 sm:py-0"
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
  { num: 'II', label: 'REGISTRATION', to: '/registration' },
  { num: 'III', label: 'QUIZZES', to: '/quizzes' },
  { num: 'IV', label: 'WORKSHOPS', to: '/workshops' },
  { num: 'V', label: 'ACADEMIC EVENTS', to: '/academicevents' },
  { num: 'VI', label: 'DEBATE FORUM', to: '/debateandoratory' },
  { num: 'VII', label: 'FOOD & ACCOMMODATION', to: '/foodaccommodation' },
  { num: 'VIII', label: 'ABOUT US', to: '/aboutus' },
  { num: 'IX', label: 'CONTACT US', to: '/contact' }
].map((item, index) => (
                  <motion.div key={item.to} variants={mainLinkVariants} className={`w-full flex ${index % 2 === 0 ? 'ml-0 sm:ml-12' : 'ml-4 sm:ml-24'}`}>
                    <Link to={item.to} onClick={() => { setIsOpen(false); window.scrollTo({ top: 0, behavior: 'instant' }); }} className="flex items-start sm:items-center group w-fit relative">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center mr-3 sm:mr-4 text-xs sm:text-sm font-serif transition-all duration-500 shrink-0 mt-1 sm:mt-0 ${isActive(item.to) ? 'border-st-red text-st-red shadow-[0_0_10px_rgba(255,0,60,0.5)]' : 'border-gray-500 text-gray-400 group-hover:border-st-red group-hover:text-st-red group-hover:shadow-[0_0_10px_rgba(255,0,60,0.5)]'}`}>{item.num}</div>
                      <span className={`text-[2.25rem] min-[375px]:text-[2.5rem] sm:text-[5.5rem] md:text-[7rem] font-title uppercase transition-all duration-500 leading-[1.1] sm:leading-none text-left ${isActive(item.to) ? 'text-st-red drop-shadow-[0_0_20px_rgba(255,0,60,0.6)]' : 'text-white group-hover:text-white group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]'}`} style={{ fontFamily: '"DM Serif Display", serif', letterSpacing: '-0.03em' }}>{item.label}</span>
                      <span className={`absolute -bottom-2 sm:bottom-4 left-0 w-full h-[4px] bg-st-red shadow-[0_0_15px_rgba(255,0,60,0.8)] transform origin-left transition-transform duration-500 ${isActive(item.to) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
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