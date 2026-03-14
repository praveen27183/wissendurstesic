import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1A0D0D] text-white font-milanesa relative overflow-hidden">

      {/* Gold top border */}
      <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>

      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stucco.png')] pointer-events-none"></div>

      {/* Ornamental divider */}

      <div className="relative z-10 flex items-center justify-center py-2">
        <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#D4AF37]/40"></div>
        <span className="mx-4 text-[#D4AF37]/50 text-xl">✦</span>
        <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#D4AF37]/40"></div>

      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
       
        <div className="flex items-center gap-4">
           <img
            src="./asset/logo/wissennobg.png"
            alt="Wissendurst Logo"
            className="h-16 w-auto object-contain"
          />
          <div className="flex flex-col">
            <span className="text-2xl font-black text-[#FBF1CF] tracking-[0.15em] leading-none">WISSENDURST</span>
            <span className="text-[#D4AF37] text-xs tracking-[0.3em] font-bold uppercase mt-1">ESIC Medical College, Chennai</span>
          </div>
        </div>
      </div>
      {/* Main footer columns */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* REACH US */}
          <div>
            <h3 className="text-base font-black text-[#D4AF37] mb-5 uppercase tracking-[0.2em] pb-2 border-b border-[#D4AF37]/40">
              Reach Us
            </h3>
            <div className="space-y-1 text-sm leading-relaxed text-[#FBF1CF]/80">
              <p className="font-bold text-[#FBF1CF]">ESIC Medical College and Hospital,</p>
              <p>Ashok Pillar Main Road, KK Nagar</p>
              <p>Chennai — 600078</p>
            </div>
          </div>

          {/* CONNECT WITH US */}
          <div>
            <h3 className="text-base font-black text-[#D4AF37] mb-5 uppercase tracking-[0.2em] pb-2 border-b border-[#D4AF37]/40">
              Connect With Us
            </h3>
            <div className="space-y-2 text-sm text-[#FBF1CF]/80">
              {[
                { name: 'Alamelu V', phone: '6379222946' },
                { name: 'Gowrishankar KN', phone: '7002276062' },
                { name: 'Hemanth A E', phone: '9840548587' },
                { name: 'Sai Likhitha P V', phone: '9952080851' },
                { name: 'Ram Yogesh', phone: '9962939599' },
              ].map((c) => (
                <div key={c.name} className="flex justify-between items-center gap-4">
                  <span className="text-[#FBF1CF]/70">{c.name}</span>
                  <a href={`tel:${c.phone}`} className="text-[#D4AF37] font-bold hover:text-[#FBF1CF] transition-colors tracking-wide">
                    {c.phone}
                  </a>
                </div>
              ))}
              <div className="pt-3 border-t border-[#D4AF37]/20 mt-3">
                <a
                  href="mailto:wissendurst2025@gmail.com"
                  className="text-[#D4AF37] hover:text-[#FBF1CF] transition-colors text-xs tracking-wide underline underline-offset-4"
                >
                  wissendurst2026@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* FIND US */}
          <div>
            <h3 className="text-base font-black text-[#D4AF37] mb-5 uppercase tracking-[0.2em] pb-2 border-b border-[#D4AF37]/40">
              Find Us
            </h3>
            <div className="rounded overflow-hidden border border-[#D4AF37]/30 shadow-[0_0_15px_rgba(0,0,0,0.5)] mt-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9516.013939260933!2d80.2053440986854!3d13.02990326972731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266df5c54ca61%3A0xa35f36f12b8363ff!2sESIC%20Medical%20College%20%26%20PGIMSR!5e0!3m2!1sen!2sin!4v1772125528458!5m2!1sen!2sin"
                width="100%"
                height="150"
                style={{ border: 0, display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* FOLLOW US */}
          <div>
            <h3 className="text-base font-black text-[#D4AF37] mb-5 uppercase tracking-[0.2em] pb-2 border-b border-[#D4AF37]/40">
              Follow Us
            </h3>
            <div className="flex gap-5 mt-3 items-center">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center gap-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <rect width="16" height="16" x="4" y="4" rx="4" />
                    <circle cx="12" cy="12" r="3" />
                    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="text-[10px] text-[#FBF1CF]/50 tracking-widest uppercase">Instagram</span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919962939599"
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center gap-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <span className="text-[10px] text-[#FBF1CF]/50 tracking-widest uppercase">WhatsApp</span>
              </a>
            </div>

            {/* Quick Links */}
            <div className="mt-8">
              <p className="text-[#D4AF37]/60 text-xs uppercase tracking-widest mb-3">Quick Links</p>
              <div className="flex flex-col gap-1 text-sm text-[#FBF1CF]/70">
                {[
                  { to: '/academicevents', label: 'Academic Events' },
                  { to: '/workshops', label: 'Workshops' },
                  { to: '/registration', label: 'Register' },
                  { to: '/aboutus', label: 'About Us' },
                  { to: '/contact', label: 'Contact Us' },
                  { to: '/foodaccommodation', label: 'Food & Accommodation' },
                  { to: '/debateandoratory', label: 'Debate & Oratory' },
                  { to: '/quizzes', label: 'Quizzes' },
                ].map(link => (
                  <Link key={link.to} to={link.to} className="hover:text-[#D4AF37] transition-colors duration-200">
                    → {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom copyright bar */}
      <div className="relative z-10 border-t border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#FBF1CF]/40 tracking-widest uppercase">
          <p>© 2026 Wissendurst · ESIC Medical College Chennai. All rights reserved.</p>
          <p>Developed by <a href="https://leptotech.in" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37]/60 font-bold tracking-widest">LeptoTech.in</a></p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
