import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { events, workshops } from '../data/dummyData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Add scroll listener for dynamic navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/registration', label: 'General Registration' },
    { path: '/events', label: 'Events' },
    { path: '/workshops', label: 'Workshops' },
    { path: '/food-accommodation', label: 'Food & Accommodation' },
    { path: '/offers', label: 'Offers' },
    { path: '/aboutus', label: 'About Us' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 font-body ${scrolled
        ? 'bg-[#2A1610]/95 backdrop-blur-md border-b border-[#D4AF37]/50 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-1'
        : 'bg-gradient-to-b from-[#1A0D0D]/90 to-transparent pt-4 pb-2'
        }`}
    >
      {/* Decorative top border when scrolled */}
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50 transition-opacity duration-300 ${scrolled ? 'visible' : 'hidden'}`}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-16 md:h-24">

          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-4 group z-20 flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-[#D4AF37] blur-md opacity-20 group-hover:opacity-60 transition-opacity duration-700 rounded-full"></div>
              <img
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=240,fit=crop,q=95/mk3Jj8nB7zi5bnOM/home-page-logo-Yg2jMVOl0DIgE7z5.png"
                alt="Wissendurst Logo"
                className="h-12 md:h-16 w-auto object-contain drop-shadow-[0_0_8px_rgba(212,175,55,0.6)] relative z-10 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-2xl md:text-3xl font-title font-black text-[#FBF1CF] tracking-[0.15em] leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
                WISSENDURST
              </span>
              <span className="text-[#D4AF37] text-[10px] md:text-xs tracking-[0.3em] font-bold uppercase mt-1 drop-shadow-[0_1px_2px_rgba(0,0,0,1)]">
                ESIC Medical College
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.path} className="relative group px-1">
                <Link
                  to={link.path}
                  className={`relative px-2 py-2 text-xs xl:text-sm font-bold uppercase tracking-wide transition-all duration-300 flex items-center gap-1 whitespace-nowrap
                    ${isActive(link.path)
                      ? 'text-[#FBF1CF] drop-shadow-[0_0_8px_rgba(251,241,207,0.8)]'
                      : 'text-[#D4AF37]/80 hover:text-[#FBF1CF] hover:drop-shadow-[0_0_5px_rgba(251,241,207,0.5)]'
                    }`}
                >
                  {link.label}
                  {(link.path === '/events' || link.path === '/workshops') && (
                    <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180 opacity-70" />
                  )}

                  {/* Hover indicator line */}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent transition-all duration-300 ${isActive(link.path) ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                    }`}></span>
                </Link>

                {/* Magical Dropdown Menus */}
                {(link.path === '/events' || link.path === '/workshops') && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[650px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 pt-6 z-50 pointer-events-none group-hover:pointer-events-auto">
                    {/* Floating Triangle Pointer */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#2A1610] rotate-45 border-l border-t border-[#D4AF37]/40 z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100 mt-6"></div>

                    <div className="relative bg-[#2A1610]/95 backdrop-blur-xl border border-[#D4AF37]/40 rounded-sm p-8 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden">
                      {/* Subtle texture for dropdown container */}
                      <div className="absolute inset-0 opacity-10 mix-blend-multiply pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stucco.png')]"></div>
                      {/* Inner glow effect */}
                      <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(212,175,55,0.05)] pointer-events-none"></div>

                      <div className="flex justify-between items-end mb-6 pb-3 border-b border-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent relative z-10">
                        <h3 className="text-[#FBF1CF] font-title font-bold text-2xl tracking-widest drop-shadow-md">
                          {link.label} Preview
                        </h3>
                        <Link to={link.path} className="text-[10px] text-[#D4AF37] hover:text-[#FBF1CF] transition-colors uppercase tracking-[0.2em] font-bold pb-1 group/link flex items-center gap-1">
                          View details <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                        </Link>
                      </div>

                      <div className="grid grid-cols-2 gap-x-8 gap-y-4 relative z-10">
                        {link.path === '/events' && events.slice(0, 4).map((item, i) => (
                          <Link
                            key={item.id}
                            to={`/events`}
                            className="group/item flex items-center gap-4 p-3 hover:bg-[#D4AF37]/5 rounded border border-transparent hover:border-[#D4AF37]/20 transition-all duration-300"
                            style={{ animationDelay: `${i * 50}ms` }}
                          >
                            <div className="relative overflow-hidden rounded shadow-md border border-[#D4AF37]/30">
                              <div className="absolute inset-0 bg-[#D4AF37]/20 opacity-0 group-hover/item:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
                              <img src={item.image} alt={item.title} className="w-16 h-16 object-cover transform group-hover/item:scale-110 transition-transform duration-700" />
                            </div>
                            <div className="flex-1">
                              <div className="text-[#FBF1CF] font-title text-base font-bold truncate group-hover/item:text-[#D4AF37] transition-colors">{item.title}</div>
                              <div className="text-[#D4AF37]/70 font-body text-xs uppercase tracking-widest mt-1 font-semibold flex items-center gap-1">
                                <span className="w-1 h-1 rounded-full bg-[#D4AF37]/50"></span> {item.date}
                              </div>
                            </div>
                          </Link>
                        ))}
                        {link.path === '/workshops' && workshops.day1.slice(0, 4).map((item, i) => (
                          <Link
                            key={item.id}
                            to={`/workshops`}
                            className="group/item flex items-center gap-4 p-3 hover:bg-[#D4AF37]/5 rounded border border-transparent hover:border-[#D4AF37]/20 transition-all duration-300"
                          >
                            <div className="relative overflow-hidden rounded shadow-md border border-[#D4AF37]/30">
                              <div className="absolute inset-0 bg-[#D4AF37]/20 opacity-0 group-hover/item:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
                              <img src={item.image} alt={item.title} className="w-16 h-16 object-cover transform group-hover/item:scale-110 transition-transform duration-700" />
                            </div>
                            <div className="flex-1">
                              <div className="text-[#FBF1CF] font-title text-base font-bold truncate group-hover/item:text-[#D4AF37] transition-colors">{item.title}</div>
                              <div className="text-[#D4AF37]/70 font-body text-xs uppercase tracking-widest mt-1 font-semibold flex items-center gap-1">
                                <span className="w-1 h-1 rounded-full bg-[#D4AF37]/50"></span> {item.day}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-20 text-[#D4AF37] hover:text-[#FBF1CF] transition-colors duration-300 p-2"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-[#1A0D0D]/98 backdrop-blur-xl z-10 lg:hidden flex flex-col justify-center items-center transition-all duration-500 transform overflow-y-auto ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
      >
        {/* Ancient texture background for mobile menu */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stucco.png')] pointer-events-none"></div>

        <div className="flex flex-col items-center space-y-6 w-full max-w-sm px-6 relative z-20">
          <img
            src="/wissendurstesic_logo.png"
            alt="Wissendurst Logo"
            className="h-16 w-auto object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] mb-4"
          />

          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: `${index * 50}ms` }}
              className={`w-full text-center py-2 text-base font-title font-bold uppercase tracking-[0.2em] transition-all duration-500 border-b border-[#D4AF37]/10 ${isActive(link.path)
                ? 'text-[#FBF1CF] drop-shadow-[0_0_8px_rgba(251,241,207,0.5)] scale-105'
                : 'text-[#D4AF37]/70 hover:text-[#D4AF37] hover:tracking-[0.25em]'
                } ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
