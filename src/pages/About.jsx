import { useState, useEffect, useRef } from 'react';
import { MapPin, Bus, Train, Plane, ChevronLeft, ChevronRight } from 'lucide-react';
const esicBuildingImg = "/asset/about/ESCIBUILD.png";
const aboutImg = "/asset/hero_sec_for_all/about.png";
const teamImg = "/asset/mainbg/starnger_thingsbg.jpeg";
import HeroSection from '../components/herosection.jsx';
import Galaxy from '../components/Galaxy.jsx';
import OptimizedImage from '../components/OptimizedImage';
import { usePerformance } from '../context/PerformanceContext';



const SectionBg = ({ src, opacity = 'opacity-20', children, className = '' }) => (
  <div className={`relative overflow-hidden ${className}`}>
    <OptimizedImage
      src={src}
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className={`absolute inset-0 bg-[#050505] ${opacity}`} />
    <div className="absolute inset-0 bg-[#050505]/70" />
    <div className="relative z-10">{children}</div>
  </div>
);

const About = () => {
  const { isLowPerf } = usePerformance();
  const [showIntro, setShowIntro] = useState(true);
  const scrollContainerRef = useRef(null);

  const getScrollAmount = () => {
    if (typeof window === 'undefined') return 300;
    if (window.innerWidth >= 1024) return window.innerWidth * 0.333;
    if (window.innerWidth >= 640) return window.innerWidth * 0.5;
    return window.innerWidth * 0.85;
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth } = scrollContainerRef.current;
      if (scrollLeft <= 10) {
        scrollContainerRef.current.scrollTo({ left: scrollWidth, behavior: 'smooth' });
      } else {
        scrollContainerRef.current.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
      }
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollContainerRef.current.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    // Automatically hide intro after 8 seconds
    const timer = setTimeout(() => setShowIntro(false), 8000);

    // Auto-scroll gallery every 3 seconds
    const autoScroll = setInterval(() => {
      scrollRight();
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(autoScroll);
    };
  }, []);
  if (showIntro) {
    return (
      <div
        className={`fixed inset-0 z-[100] ${isLowPerf ? 'bg-[#050505]' : 'bg-black'} flex items-center justify-center p-4 cursor-pointer`}
        onClick={() => setShowIntro(false)}
      >
        <style dangerouslySetInnerHTML={{
          __html: `
            .text-outline {
              color: transparent;
              -webkit-text-stroke: 1px rgba(255,255,255,0.4);
            }
            .text-fill-anim {
              color: transparent;
              -webkit-text-stroke: 1px rgba(255,255,255,0.6);
              background: linear-gradient(to right, white 50%, transparent 50%);
              background-size: 200% 100%;
              background-position: 100% 0;
              -webkit-background-clip: text;
              background-clip: text;
              animation: fillText 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
            }
            .delay-1 { animation-delay: 0.5s; }
            .delay-2 { animation-delay: 0.5s; }
            @keyframes fillText {
              100% { background-position: 0 0; }
            }
          `}} />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&display=swap" rel="stylesheet" />
        <div
          className="text-center w-full flex flex-col items-center justify-center animate-[fadeIn_3s_ease-out_forwards]"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          <h1 className="text-[1.75rem] sm:text-5xl md:text-5xl lg:text-[5.5rem] xl:text-[6.5rem] font-bold leading-[1.1] sm:leading-[1.0] tracking-[0.05em] uppercase flex flex-col items-center justify-center w-full">
            <span className="text-outline w-full block">A COMMUNITY OF</span>
            <span className="text-fill-anim delay-1 w-full block py-1">LEARNING.</span>
            <span className="text-outline w-full block mt-3 sm:mt-4 md:mt-5">FROM PASSION</span>
            <span className="text-fill-anim delay-2 w-full block pb-1">TO MENTORSHIP,</span>
            <span className="text-outline w-full block mt-3 sm:mt-4 md:mt-5">EVERY EVENT</span>
            <span className="text-outline w-full block">BECOMES A</span>
            <span className="text-fill-anim delay-2 w-full block pb-1">PLATFORM.</span>
          </h1>
        </div>
        <div className="absolute bottom-8 sm:bottom-12 w-full flex justify-center">
          <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-[20px] tracking-[0.2em] sm:tracking-[0.3em] font-sans uppercase animate-pulse">
            Click anywhere to continue ----&gt;
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-milanesa bg-[#050505] text-[#ffffff] overflow-x-hidden">
      {/* ── Hero ── */}
      <HeroSection
        title="About Wissendurst '26"
        subtitle="The Annual Intercollegiate Medical Conference"
        description="Ignite your thirst for knowledge! Join us for the sixth edition featuring engaging workshops, stimulating debates, and a grand intercollegiate quiz."
        image={aboutImg}
      />

      {/* Global Galaxy Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Galaxy
          starSpeed={0.3}
          density={1.3}
          hueShift={220}
          speed={0.5}
          glowIntensity={0.3}
          saturation={0}
          mouseRepulsion
          repulsionStrength={2}
          twinkleIntensity={0.3}
          rotationSpeed={0.1}
          transparent
        />
      </div>



      {/* Subtle Ambient Glow Effect inside Background */}
      {!isLowPerf && (
        <div className="absolute top-0 left-1/2 w-full max-w-4xl h-[30vh] -translate-x-1/2 bg-st-red/10 blur-[120px] rounded-[100%] pointer-events-none" />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-24">

        {/* 1. Main Welcome Section */}
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-center">

          {/* Wissendurst Context Card */}
          <div className="relative group">
            {!isLowPerf && (
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-3xl blur-md transition-all duration-700 group-hover:bg-white/10" />
            )}
            <div className={`relative ${isLowPerf ? 'bg-[#0f0f14] border border-white/10 shadow-sm' : 'bg-[#1a0f0a]/60 backdrop-blur-xl border border-st-red/20 shadow-2xl'} rounded-3xl p-8 md:p-12 transition-all duration-500 hover:border-st-red/40 hover:shadow-[0_0_40px_rgba(255,0,60,0.1)]`}>

              <h2 className="text-4xl md:text-5xl lg:text-5xl font-milanesa font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-st-red to-[#ffffff] uppercase tracking-wide drop-shadow-sm">
                Wissendurst 2026
              </h2>

              <div className="space-y-6 text-base md:text-lg leading-relaxed text-white font-medium">
                <p className="drop-shadow-sm">
                  Riding on the success of our previous edition, ESIC Medical College and Hospital, KK Nagar, Chennai proudly brings forth Wissendurst 2026, the annual intercollegiate medical conference for inquisitive undergraduate medical students.
                </p>
                <p className="drop-shadow-sm">
                  True to the spirit of its name, we present to you the sixth edition of this event, all ready to ignite your thirst for knowledge. Featuring engaging workshops, stimulating debates, thought provoking presentations, inspiring guest lectures and the grand intercollegiate quiz, the conference promises an enriching experience that will leave you eager for more.
                </p>
                <p className="drop-shadow-sm">
                  Gear up, because this edition, we unveil new additions to tap into your creativity and expand your horizons.
                </p>
                <p className="drop-shadow-sm">
                  If you believe you have already seen it all, think again- don't miss what could be one of the most rewarding ways to spend your time. So why wait? Fasten your seatbelts and get ready to embark on a remarkable journey of knowledge, discovery and excitement!
                </p>
              </div>
            </div>
          </div>

          {/* ESIC Building Parallax Frame */}
          <div className="flex justify-center lg:justify-end perspective-1000">
            <div className="relative group cursor-pointer w-full max-w-sm md:max-w-md">
              {/* Floating Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#8B4513]/40 to-st-red/30 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Image Frame */}
              <div className="relative aspect-square overflow-hidden rounded-[2rem] border-[1px] border-st-red/40 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform-gpu transition-all duration-700 hover:rotate-2 hover:scale-[1.02] hover:shadow-[0_30px_60px_rgba(255,0,60,0.25)] bg-[#1A0F0A]">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F0A] via-transparent to-transparent z-10 opacity-80" />
                <img
                  src={esicBuildingImg}
                  alt="ESIC Building"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute bottom-6 left-6 right-6 z-20 transform translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-st-red font-bold text-sm tracking-widest uppercase mb-1">Host Venue</p>
                  <p className="text-[#ffffff] font-milanesa text-xl md:text-2xl drop-shadow-md">ESIC MCH, Chennai</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Aesthetic Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-st-red/30 to-transparent my-2" />

        {/* 2. Committee & ESIC Dual Grids */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">

          {/* Note From Committee Glass Card */}
          <div className="group relative h-full flex flex-col">
            {!isLowPerf && (
              <div className="absolute inset-0 bg-gradient-to-b from-st-red/5 to-transparent rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
            )}
            <div className={`relative h-full ${isLowPerf ? 'bg-[#0f0f14] border border-white/10 shadow-sm' : 'bg-[#1a0f0a]/60 backdrop-blur-xl border border-st-red/15 shadow-xl'} rounded-3xl p-8 md:p-10 transition-all duration-500 hover:border-st-red/40 hover:-translate-y-2 flex flex-col`}>
              <h2 className="text-2xl md:text-3xl font-milanesa font-black mb-6 text-st-red uppercase tracking-wide drop-shadow-sm">
                Note from the Committee
              </h2>
              <div className="space-y-5 text-sm md:text-base leading-relaxed text-white font-medium flex-grow">
                <p>
                  <strong className="text-st-red font-bold tracking-wider">WISSENDURST</strong> has always been a celebration of knowledge and creativity. This April, we carry that legacy forward with a broader vision as we present our new edition.
                </p>
                <p>
                  Our workshops have been reimagined, with existing sessions refined and new ones introduced to create a more engaging and immersive learning experience. A wide range subjects have been introduced in this year's case and poster presentations, alongside the introduction of protocol presentations as a new academic dimension.
                </p>
                <p>
                  <strong className="text-st-red font-bold tracking-wider">MINERVA</strong>, the fabled quiz segment of WISSENDURST, returns with its signature energy while expanding beyond conventional boundaries through the inclusion of the online quizzes. Tamil events also make their debut this year, offering a vibrant and empowering platform for an energetic and expressive communication.
                </p>
                <p>
                  We are deeply grateful for the continued support which inspired us to design every event with our participants at the heart of it. Join us on <span className="text-st-red font-bold border-b border-st-red/50 mx-1">April 28th, 29th, and 30th</span> to explore and experience a new dimension of learning.
                </p>
              </div>
            </div>
          </div>

          {/* About ESIC MCH Glass Card */}
          <div className="group relative h-full flex flex-col">
            {!isLowPerf && (
              <div className="absolute inset-0 bg-gradient-to-b from-st-red/5 to-transparent rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
            )}
            <div className={`relative h-full ${isLowPerf ? 'bg-[#0f0f14] border border-white/10 shadow-sm' : 'bg-[#1a0f0a]/60 backdrop-blur-xl border border-st-red/15 shadow-xl'} rounded-3xl p-8 md:p-10 transition-all duration-500 hover:border-st-red/40 hover:-translate-y-2 flex flex-col`}>
              <h2 className="text-2xl md:text-3xl font-milanesa font-black mb-6 text-st-red uppercase tracking-wide drop-shadow-sm">
                About ESIC MCH, Chennai
              </h2>
              <div className="space-y-5 text-sm md:text-base leading-relaxed text-white font-medium flex-grow">
                <p>
                  Since its institutionalization in 2013, ESIC Medical College and Hospital has emerged as one of the foremost pillars of tertiary healthcare in Chennai. Strategically located in the heart of the city, this vast, high-volume institution stands as a testament to accessible, comprehensive, and quality medical care for the working population and beyond.
                </p>

                {/* Metric Highlights */}
                <ul className="grid grid-cols-2 gap-4 my-6">
                  <li className="bg-st-red/10 border border-st-red/25 rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-inner hover:bg-st-red/20 transition-colors duration-300 cursor-default">
                    <span className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] to-st-red font-milanesa mb-1">1000+</span>
                    <span className="text-[10px] sm:text-xs uppercase tracking-widest text-st-red font-bold">Inpatient Beds</span>
                  </li>
                  <li className="bg-st-red/10 border border-st-red/25 rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-inner hover:bg-st-red/20 transition-colors duration-300 cursor-default">
                    <span className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] to-st-red font-milanesa mb-1">3000+</span>
                    <span className="text-[10px] sm:text-xs uppercase tracking-widest text-st-red font-bold">Daily Footfall</span>
                  </li>
                </ul>

                <p>
                  The Medical College boasts state-of-the-art facilities, ensuring comprehensive training for undergraduates and postgraduates to become skilled, and future-ready doctors. With over 15 super-speciality departments, the college provides extensive exposure to the students.


                  Apart from an extensive clinical exposure, the college also boasts vibrant extra-curricular clubs including the dance, music, debate, literary clubs and more. With the support of our dedicated faculty, the students are regularly exposed to the latest updates in the medical field through various seminars, quizzes, CMEs, national level conferences- helping the students have the right balance between academics and co-curriculars.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>


      {/* ── How to Reach Us & Explore Around Us Split Section ── */}
      <SectionBg src={teamImg} opacity="opacity-70" className="py-24 md:py-32 relative border-t border-st-red/20 overflow-hidden">
        {/* Glow behind title */}
        <div className="absolute top-20 left-1/2 w-[600px] h-[150px] -translate-x-1/2 bg-st-red/10 blur-[100px] rounded-[100%] pointer-events-none" />

        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-20">

            {/* ── Left Column: How to Reach Us ── */}
            <div className="flex flex-col h-full">
              <div className="text-center lg:text-left mb-12 lg:mb-16">
                <h2 className="text-4xl sm:text-5xl md:text-5xl xl:text-6xl font-milanesa font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-st-red to-[#ffffff] lg:bg-gradient-to-r lg:from-st-red lg:to-[#ffffff] uppercase tracking-wide drop-shadow-sm">
                  How to Reach Us?
                </h2>
                <div className="h-px w-48 mx-auto lg:mx-0 bg-gradient-to-r from-transparent via-st-red/50 to-transparent lg:from-st-red/50 lg:to-transparent" />
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6 mb-12 flex-grow text-[#ffffff]/90">

                {/* Metro Card */}
                <div className="group relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-st-red/10 to-transparent rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
                  <div className={`relative h-full ${isLowPerf ? 'bg-[#0f0f14]' : 'bg-[#1a0f0a]/60 backdrop-blur-xl'} border border-st-red/20 shadow-xl rounded-3xl p-6 transition-all duration-500 hover:border-st-red/50 hover:translate-x-2 hover:shadow-[10px_0_40px_rgba(255,0,60,0.15)] flex items-center gap-6`}>
                    <div className="w-16 h-16 shrink-0 rounded-full bg-gradient-to-br from-st-red/20 to-transparent border border-st-red/30 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500">
                      <MapPin strokeWidth={1.5} className="w-8 h-8 text-st-red drop-shadow-[0_0_8px_rgba(255,0,60,0.8)]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-milanesa font-bold text-st-red mb-2 uppercase tracking-wider">By Metro</h3>
                      <p className="text-sm font-medium leading-relaxed text-white">
                        Ashok Nagar metro station (Green Line) — connects to Chennai Central, Airport & CMBT.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bus Card */}
                <div className="group relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-st-red/10 to-transparent rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
                  <div className={`relative h-full ${isLowPerf ? 'bg-[#0f0f14]' : 'bg-[#1a0f0a]/60 backdrop-blur-xl'} border border-st-red/20 shadow-xl rounded-3xl p-6 transition-all duration-500 hover:border-st-red/50 hover:translate-x-2 hover:shadow-[10px_0_40px_rgba(255,0,60,0.15)] flex flex-col sm:flex-row items-center sm:items-start gap-6`}>
                    <div className="w-16 h-16 shrink-0 rounded-full bg-gradient-to-br from-st-red/20 to-transparent border border-st-red/30 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500">
                      <Bus strokeWidth={1.5} className="w-8 h-8 text-st-red drop-shadow-[0_0_8px_rgba(255,0,60,0.8)]" />
                    </div>
                    <div className="w-full text-center sm:text-left">
                      <h3 className="text-xl font-milanesa font-bold text-st-red mb-2 uppercase tracking-wider">By Bus (MTC)</h3>
                      <div className="flex flex-col gap-2 w-full mt-3">
                        <div className="bg-st-red/10 border border-st-red/20 py-2 px-3 rounded-lg text-xs tracking-wide text-white font-bold">
                          From Kilambakkam (KCBT) - All Buses
                        </div>
                        <div className="bg-st-red/10 border border-st-red/20 py-2 px-3 rounded-lg text-xs tracking-wide text-white/90">
                          ESIC Hospital (Gate Drop)
                        </div>
                        <div className="bg-st-red/10 border border-st-red/20 py-2 px-3 rounded-lg text-xs tracking-wide text-white/90">
                          Ashok Pillar (400m Away)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Train / Flight Card */}
                <div className="group relative h-full sm:col-span-2 lg:col-span-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-st-red/10 to-transparent rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
                  <div className={`relative h-full ${isLowPerf ? 'bg-[#0f0f14]' : 'bg-[#1a0f0a]/60 backdrop-blur-xl'} border border-st-red/20 shadow-xl rounded-3xl p-6 transition-all duration-500 hover:border-st-red/50 hover:translate-x-2 hover:shadow-[10px_0_40px_rgba(255,0,60,0.15)] flex flex-col sm:flex-row items-center gap-6`}>
                    <div className="flex flex-col gap-2 shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-st-red/20 to-transparent border border-st-red/30 flex items-center justify-center shadow-inner group-hover:-translate-x-1 transition-transform duration-500">
                        <Train strokeWidth={1.5} className="w-6 h-6 text-st-red drop-shadow-[0_0_8px_rgba(255,0,60,0.8)]" />
                      </div>
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-st-red/20 to-transparent border border-st-red/30 flex items-center justify-center shadow-inner group-hover:translate-x-1 transition-transform duration-500 delay-75">
                        <Plane strokeWidth={1.5} className="w-6 h-6 text-st-red drop-shadow-[0_0_8px_rgba(255,0,60,0.8)]" />
                      </div>
                    </div>
                    <div className="w-full text-center sm:text-left">
                      <h3 className="text-xl font-milanesa font-bold text-st-red mb-3 uppercase tracking-wider">Train & Air</h3>
                      <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-[10px] sm:text-[11px] font-bold tracking-wider text-white">
                          <span className="w-1.5 h-1.5 rounded-full bg-st-red shadow-[0_0_8px_#ff003c]" />
                          Chennai Central (12 km)
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-[10px] sm:text-[11px] font-bold tracking-wider text-white">
                          <span className="w-1.5 h-1.5 rounded-full bg-st-red shadow-[0_0_8px_#ff003c]" />
                          W. Mambalam (2.8 km)
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-[10px] sm:text-[11px] font-bold tracking-wider text-white">
                          <span className="w-1.5 h-1.5 rounded-full bg-st-red shadow-[0_0_8px_#ff003c]" />
                          Egmore (8 km)
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-[10px] sm:text-[11px] font-bold tracking-wider text-white">
                          <span className="w-1.5 h-1.5 rounded-full bg-st-red shadow-[0_0_8px_#ff003c]" />
                          Airport (9 km)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Centralized CTA: Google Maps */}
              <div className="flex justify-center lg:justify-start mt-auto pt-4">
                <a
                  href="https://www.google.com/maps?ll=13.034253,80.206934&z=13&t=m&hl=en&gl=IN&mapclient=embed&cid=11772188360414815231"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-st-red text-[#ffffff] font-black tracking-widest uppercase rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,0,60,0.5)] hover:scale-105"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  <MapPin className="w-5 h-5 relative z-10 animate-bounce" />
                  <span className="relative z-10 text-sm">Open in Google Maps</span>
                </a>
              </div>
            </div>

            {/* ── Right Column: Explore Around Us ── */}
            <div className="flex flex-col pt-12 lg:pt-0 lg:pl-16 lg:border-l lg:border-st-red/15 border-t border-st-red/15 lg:border-t-0 mt-12 lg:mt-0 relative">
              <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 bg-st-red/5 blur-[100px] rounded-[100%] pointer-events-none" />

              <div className="text-center lg:text-right mb-10 lg:mb-16 relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-milanesa font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-st-red to-[#ffffff] lg:bg-gradient-to-l lg:from-st-red lg:to-[#ffffff] uppercase tracking-wide drop-shadow-sm">
                  Explore Around Us
                </h2>
                <div className="h-px w-32 mx-auto lg:mx-0 lg:ml-auto bg-gradient-to-r from-transparent via-st-red/50 to-transparent lg:from-transparent lg:to-st-red/50" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 relative z-10 mt-auto">
                {[
                  { name: 'KK Nagar Sivan Park', img: 'https://th-i.thgim.com/public/incoming/t53og8/article68090920.ece/alternates/FREE_1200/DSC_2508.jpg', link: 'https://maps.app.goo.gl/YpL83Uu91kHgnkBu5' },
                  { name: 'Ashok Pillar Food Court', img: 'https://th-i.thgim.com/public/incoming/aa3fdc/article67762914.ece/alternates/LANDSCAPE_1200/Grace_International_Food_Court_15.jpg', link: 'https://maps.app.goo.gl/d4qqBY1dx2VNR7Vm9' },
                  { name: 'Vadapalani Murugan Temple', img: 'https://www.southindiatoursandtravels.com/SittPhotos/Tamilnadu/Vadapalani_murugan_temple_tank.jpg', link: 'https://maps.app.goo.gl/31SdgyVtM4yqsNJf8' },
                  { name: 'Nexus Vijaya Mall', img: 'https://www.nexusselecttrust.com/resources/assets/images/nexus-vijaya/vijya-banner2.jpg', link: 'https://maps.app.goo.gl/55k7ZMm7PnCcVZdA9' },
                  { name: 'Anna Centenary Library', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO1KSUlYxx_ZqB1Tpb3NuTOtubTJcTgXcsvw&s', link: 'https://maps.app.goo.gl/pVFmQnUZCukvCwuZ8' },
                  { name: 'Guindy National Park', img: 'https://time2digital.com/wp-content/uploads/2023/08/2019-12-21.jpg', link: 'https://maps.app.goo.gl/b5MZkEYmp3Bps2y16' },
                  { name: 'Kathipara (Urban Sq)', img: 'https://media.assettype.com/dt-next/import/h-upload/2025/08/11/871097-jpg-2025-08-11t082832700.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true', link: 'https://maps.app.goo.gl/5vDGgKbo9Y2JKXjUA' },
                  { name: 'Semmozhi Botanical Gdn', img: 'https://media.assettype.com/outlooktraveller%2F2024-06%2F4a99cdcd-8ea2-4122-b304-edf5e59f96b5%2FSemmozhi%20Poonga%20.jpg?w=640&auto=format%2Ccompress', link: 'https://www.google.com/maps/search/Semmozhi+Poonga' },
                  { name: 'Panagal Park T Nagar', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwOObjPBm7aadRwOORTDeJh1xNJZ80W6rDgA&s', link: 'https://www.google.com/maps/search/Panagal+Park+T+Nagar' },
                  { name: 'Chandra Metro Mall', img: 'https://5.imimg.com/data5/VM/YD/GLADMIN-56170617/chandra-metro-mall.png', link: 'https://www.google.com/maps/search/Chandra+Metro+Mall' }
                ].map((place, i) => (

                  <a
                    key={i}
                    href={place.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`relative overflow-hidden rounded-2xl group cursor-pointer shadow-xl ${i === 0 ? 'row-span-2 col-span-2 sm:col-span-1 h-full' :
                      i === 4 ? 'row-span-2 h-full' : 'aspect-square'
                      }`}
                  >
                    {/* Glowing border effect */}
                    <div className="absolute inset-0 border border-st-red/20 rounded-2xl z-20 transition-all duration-500 group-hover:border-st-red/80" />
                    {/* image */}
                    <img
                      src={place.img}
                      alt={place.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                    />

                    {/* Subtle vignette / overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f0a]/90 via-transparent to-transparent opacity-100 lg:opacity-60 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                    <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4 z-20 translate-y-0 opacity-100 lg:translate-y-4 lg:opacity-0 transition-transform duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-[#ffffff] font-bold text-[10px] md:text-xs tracking-wider uppercase drop-shadow-md flex items-center gap-1.5 border-l-2 border-st-red pl-2 leading-tight">
                        <span className="w-1.5 h-1.5 rounded-full bg-st-red shrink-0" /> {place.name}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </SectionBg>
      {/* ── Gallery Section ── */}
      <SectionBg
        src={teamImg}
        opacity="opacity-60"
        className="py-24 md:py-32 border-t border-st-red/15 relative overflow-hidden"
      >
        <div className="absolute top-20 left-1/2 w-[600px] h-[150px] -translate-x-1/2 bg-st-red/10 blur-[120px] rounded-[100%] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10 w-full overflow-hidden">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-milanesa font-black mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-st-red to-[#ffffff] uppercase tracking-wide drop-shadow-sm">
            Gallery
          </h2>

          <div className="relative group">
            <button
              onClick={scrollLeft}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-st-red text-white p-3 rounded-full backdrop-blur-md transition-all lg:opacity-0 lg:group-hover:opacity-100"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {[
                { src: "/asset/gallery/1 (1).jpg", alt: "Gallery 1" },
                { src: "/asset/gallery/1 (2).jpg", alt: "Gallery 2" },
                { src: "/asset/gallery/1 (3).jpg", alt: "Gallery 3" },
                { src: "/asset/gallery/1 (4).jpg", alt: "Gallery 4" },
                { src: "/asset/gallery/1 (5).jpg", alt: "Gallery 5" },
                { src: "/asset/gallery/1 (6).jpg", alt: "Gallery 6" },
                { src: "/asset/gallery/1 (7).jpg", alt: "Gallery 7" },
                { src: "/asset/gallery/1 (8).jpg", alt: "Gallery 8" }
              ].map((img, i) => (
                <div
                  key={i}
                  className="shrink-0 w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center group relative aspect-video overflow-hidden rounded-2xl border border-st-red/20 shadow-xl cursor-default"
                >
                <div className={`absolute inset-0 ${isLowPerf ? 'bg-[#050505]/20' : 'bg-[#050505]/20 group-hover:bg-transparent'} transition-colors duration-500 z-10`} />

                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[#050505] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">

                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={scrollRight}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-st-red text-white p-3 rounded-full backdrop-blur-md transition-all lg:opacity-0 lg:group-hover:opacity-100"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </SectionBg>


      {/* ── Team Section ── */}
      <SectionBg src={teamImg} opacity="opacity-70" className="py-24 md:py-32 border-t border-st-red/15 relative overflow-hidden">
        {/* Glow behind section title */}
        <div className="absolute top-20 left-1/2 w-[600px] h-[150px] -translate-x-1/2 bg-st-red/10 blur-[120px] rounded-[100%] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-milanesa font-black mb-20 text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-st-red to-[#ffffff] uppercase tracking-wide drop-shadow-sm">
            Team Wissendurst 2026
          </h2>

          <div className="space-y-20 lg:space-y-24">

            {/* Chief Patron */}
            <div className="flex flex-col items-center">
              <p className="text-sm md:text-base text-st-red font-bold mb-4 uppercase tracking-[0.3em]">Chief Patron</p>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase text-[#ffffff] tracking-wide drop-shadow-md">
                DR. SOWMYA SAMPATH
              </h3>
              <p className="text-sm md:text-base uppercase text-[#ffffff]/60 mt-3 tracking-wider">
                Dean Incharge, ESIC Medical College and Hospital
              </p>
            </div>

            <div className="h-px w-full max-w-3xl mx-auto bg-gradient-to-r from-transparent via-st-red/40 to-transparent" />

            {/* Vice Patrons */}
            <div className="flex flex-col items-center">
              <p className="text-sm md:text-base text-st-red font-bold mb-10 uppercase tracking-[0.3em]">Vice Patrons</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 lg:gap-12 w-full max-w-5xl mx-auto">
                {[
                  { name: 'DR. V MADHUBALA', role: 'Medical Superintendent' },
                  { name: 'DR. K V SARALA DEVI', role: 'Registrar' },
                  { name: 'DR. VIJAYANATH V', role: 'Vice Principal' },
                ].map((p, i) => (
                  <div key={i} className="flex flex-col items-center group">
                    <h3 className="text-2xl md:text-2xl lg:text-3xl font-black uppercase text-[#ffffff] tracking-wide mb-2 transition-colors duration-300 group-hover:text-st-red">
                      {p.name}
                    </h3>
                    <p className="text-xs md:text-sm text-[#ffffff]/60 uppercase tracking-widest">
                      {p.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-px w-full max-w-3xl mx-auto bg-gradient-to-r from-transparent via-st-red/40 to-transparent" />

            {/* Faculty In-charge */}
            <div className="flex flex-col items-center">
              <p className="text-sm md:text-base text-st-red font-bold mb-4 uppercase tracking-[0.3em]">Faculty Incharge</p>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase text-[#ffffff] tracking-wide drop-shadow-md">
                DR. SRINIVAS H
              </h3>
              <p className="text-sm md:text-base text-[#ffffff]/60 uppercase mt-3 tracking-wider">
                Associate Professor, Department of Biochemistry
              </p>
            </div>

            <div className="h-px w-full max-w-3xl mx-auto bg-gradient-to-r from-transparent via-st-red/40 to-transparent" />

            <div className="pt-4">
              <p className="text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-st-red via-[#ffffff] to-st-red font-black mb-16 uppercase tracking-[0.2em] font-milanesa">
                Organising Committee
              </p>

              {/* Committee Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 max-w-6xl mx-auto text-center">

                {[
                  // Row 1
                  { role: "Academic Secretaries", names: ["RISHALINI U", "VEDANT SOMA"] },
                  { role: "Organising Secretaries", names: ["FARHATHUL AFRAA", "JESWIN ANTONY", "NANDANA SREEKUMAR"] },
                  { role: "Treasurer", names: ["AHMED SHAMEER"] },

                  // Row 2
                  { role: "Designing", names: ["LUCKSHANYA", "DHEEKSHI S", "LAKSHA S P", "HARINI G"] },
                  { role: "Editing", names: ["ESHITA SUDHAKAR", "PRAGNYA PRADEEP KUMAR", "DIYA VINOD", "ASHYA ASHOK", "ILAKKIYA", "JANITHA P"] },
                  { role: "Social Media", names: ["HARINI G", "AISHWARYA K", "DEVARAM PRASANNA P", "KARTHIKEYAN", "KAVYA D K", "LAKSHA S P", "NEHA A", "NIRANJANA", "SWATHIE SRIVIDHYA"] },

                  // Row 3
                  { role: "Public Relations", names: ["KRISHNASUDHAN", "RASHMIKA T"] },
                  { role: "Overall Registration Heads", names: ["KARTHIKEYAN", "LEKHA SHRUTHY R J", "MEIMOZHI PARI", "SHALINI R"] },
                  { role: "Overall Workshop Heads", names: ["ASHWIN KUMAR S", "NIVETHA D", "NEHA SUNIL", "SAINITHI B", "SRI DHARNISH", "SUNIL KUMAR C M"] },

                  // Row 4
                  { role: "Overall Quiz Heads", names: ["JANE SARAH JOHN", "KALANIDHI M", "MANIKANDAN A"] },
                  { role: "Speakers Collective", names: ["KALANIDHI M", "JANE SARAH JOHN", "JANITHA"] },
                  { role: "Overall Heads of Presentations", names: ["DIYA VINOD", "ESHITA SUDHAKAR"] },

                  // Row 5
                  { role: "Tamil Mandram", names: ["SADHURTHIKA", "SRI DHARNISH"] },
                  { role: "Banners and Decorations", names: ["DIVYA D"] },
                  { role: "Food", names: ["ADARSH S", "PRATYUSH S"] },

                  // Row 6
                  { role: "Accommodation", names: ["ARAVINDH B", "AFLAHA T"] },

                ].map((item, ii) => (
                  <div key={ii} className={`flex flex-col p-6 rounded-2xl ${isLowPerf ? 'bg-[#0f0f14] border border-white/10' : ''}`}>

                    {/* Role */}
                    <p className="text-sm border-b border-st-red/30 pb-2 text-st-red uppercase tracking-[0.2em] font-bold mb-4">
                      {item.role}
                    </p>

                    {/* Names */}
                    <div className="flex flex-col gap-2">
                      {item.names.map((n, ni) => (
                        <h4
                          key={ni}
                          className="text-lg sm:text-xl lg:text-2xl font-black uppercase text-[#ffffff]"
                        >
                          {n}
                        </h4>
                      ))}
                    </div>

                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </SectionBg>

    </div>
  );
};

export default About;
