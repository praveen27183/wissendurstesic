import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-[#050505] text-[#cbd5e1] font-body relative overflow-hidden border-t border-[rgba(255,0,60,0.3)] shadow-[0_-10px_30px_rgba(255,0,60,0.15)]">

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(rgba(31,81,255,0.3)_1px,_transparent_1px),_linear-gradient(90deg,rgba(31,81,255,0.3)_1px,_transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      {/* Top red line */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-st-red to-transparent opacity-50"></div>

      {/* Logo header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 pb-4 relative z-10">
        <div className="flex items-center gap-4">
          <img
            src="/asset/logo/wissennobg.png"
            alt="Wissendurst Logo"
            className="h-16 w-auto object-contain drop-shadow-[0_0_10px_rgba(229,9,20,0.5)]"
          />
          <div className="flex flex-col">
            <span className="text-2xl font-black text-white tracking-[0.15em] leading-none drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">WISSENDURST</span>
            <span className="text-st-red/80 text-xs tracking-[0.3em] font-bold uppercase mt-1">ESIC Medical College, Chennai</span>
          </div>
        </div>
      </div>

      {/* Main footer columns */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* REACH US */}
          <div className="bg-[rgba(10,10,15,0.85)] border border-[rgba(255,0,60,0.3)] p-6 rounded-lg backdrop-blur-[10px] relative group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10 group-hover:bg-st-red transition-colors duration-500"></div>
            <h3 className="text-base font-black text-white mb-5 uppercase tracking-[0.3em]">Reach Us</h3>
            <div className="space-y-2 text-sm leading-relaxed text-[#b3b3b3] font-mono">
              <p className="font-bold text-gray-300">ESIC Medical College and Hospital,</p>
              <p>Ashok Pillar Main Road, KK Nagar</p>
              <p>Chennai — 600078</p>
            </div>
          </div>

          {/* CONNECT WITH US */}
          <div className="bg-[rgba(10,10,15,0.85)] border border-[rgba(255,0,60,0.3)] p-6 rounded-lg backdrop-blur-[10px] relative group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10 group-hover:bg-st-red transition-colors duration-500"></div>
            <h3 className="text-base font-black text-white mb-5 uppercase tracking-[0.3em]">Connect With Us</h3>
            <div className="space-y-3 text-sm text-[#b3b3b3] font-mono">
              {[
                { name: 'Rishalini U', phone: '+919042952723' },
                { name: 'Vedant Soma', phone: '+916306906398' },
                { name: 'Farhathul Afraa', phone: '+918248437615' },
                { name: 'Jeswin Antony', phone: '+919847176022' },
                { name: 'Nandana Sreekumar', phone: '+919048542822' },
                { name: 'Ahmed Shameer', phone: '+919633669164' },
              ].map((c) => (
                <div key={c.name} className="flex justify-between items-center gap-2 border-b border-white/5 pb-1">
                  <span>{c.name}</span>
                  <a href={`tel:${c.phone}`} className="text-gray-300 font-bold hover:text-st-red transition-colors tracking-widest">
                    {c.phone}
                  </a>
                </div>
              ))}
              <div className="pt-2 mt-2">
                <a
                  href="mailto:Wissendurst26@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors tracking-wide underline underline-offset-4 decoration-white/20 font-sans"
                >
                  Wissendurst26@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* FIND US */}
          <div className="bg-[rgba(10,10,15,0.85)] border border-[rgba(255,0,60,0.3)] p-6 rounded-lg backdrop-blur-[10px] relative group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10 group-hover:bg-st-red transition-colors duration-500"></div>
            <h3 className="text-base font-black text-white mb-5 uppercase tracking-[0.3em]">Find Us</h3>
            <div className="rounded-lg overflow-hidden border border-white/10">
              <iframe
                src="https://www.google.com/maps?q=ESIC%20Medical%20College%20Chennai&output=embed"
                className="w-full h-[180px] border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <p className="text-sm text-[#b3b3b3] mt-4 font-mono leading-relaxed">
              ESIC Medical College &amp; PGIMSR<br />
              Ashok Pillar Rd, K. K. Nagar, Chennai, Tamil Nadu 600078
            </p>
          </div>

          {/* FOLLOW US & QUICK LINKS */}
          <div className="bg-[rgba(10,10,15,0.85)] border border-[rgba(255,0,60,0.3)] p-5 sm:p-6 rounded-xl backdrop-blur-md relative group overflow-hidden flex flex-col gap-8">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10 group-hover:bg-st-red transition-colors duration-500"></div>

            {/* Follow Us */}
            <div className="flex flex-col gap-4">
              <h3 className="text-base font-black text-white uppercase tracking-[0.25em]">Follow Us</h3>
              <div className="flex gap-4">
                {/* Instagram */}
                <motion.a
                  whileHover={{ scale: 1.15 }}
                  href="https://www.instagram.com/wissendurstesic?igsh=amN4aDdoYmtwaWli"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-lg bg-[#833ab4]/10 border border-[#c13584]/50 flex items-center justify-center transition-all shadow-[0_0_10px_rgba(193,53,132,0.25)] hover:shadow-[0_0_20px_rgba(193,53,132,0.6)]"
                >
                  <svg className="w-5 h-5 text-[#e1306c]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <rect width="16" height="16" x="4" y="4" rx="4" />
                    <circle cx="12" cy="12" r="3" />
                    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </motion.a>

                {/* WhatsApp */}
                <motion.a
                  whileHover={{ scale: 1.15 }}
                  href="https://chat.whatsapp.com/KzcJt6sXTbCGPGnbWDHvlO?mode=gi_t"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-lg bg-[#25d366]/10 border border-[#25d366]/50 flex items-center justify-center transition-all shadow-[0_0_10px_rgba(37,211,102,0.2)] hover:shadow-[0_0_20px_rgba(37,211,102,0.6)]"
                >
                  <svg className="w-5 h-5 text-[#25d366]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </motion.a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-4">
              <h3 className="text-base font-black text-white uppercase tracking-[0.25em]">Quick Links</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-mono text-[#b3b3b3]">
                {[
                  { to: '/', label: 'HOME' },
                  { to: '/registration', label: 'REGISTER' },
                  { to: '/aboutus', label: 'ABOUT' },
                  { to: '/workshops', label: 'WORKSHOPS' },
                  { to: '/academicevents', label: 'ACADEMIC EVENTS' },
                  { to: '/quizzes', label: 'QUIZZES' },
                  { to: '/debateandoratory', label: 'DEBATE FORUM' },
                  { to: '/foodaccommodation', label: 'FOOD & ACCOMM' },
                  { to: '/contact', label: 'CONTACT' },
                ].map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                    className="hover:text-white transition-colors duration-200"
                  >
                    [{link.label}]
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom copy */}
      <div className="relative z-10 border-t border-white/10 bg-black/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-gray-500 tracking-[0.25em] font-mono uppercase">
          <p className="text-center sm:text-left">© 2026 · WISSENDURST · ESIC Medical College</p>
          <p className="text-center sm:text-right">
            Developed by{' '}
            <a
              href="https://leptotech.in"
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-gray-400 hover:text-white transition-all duration-300 group"
            >
              LEPTOTECH
              <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
