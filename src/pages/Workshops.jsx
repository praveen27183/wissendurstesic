import { useState, useEffect, memo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { workshops } from '../data/dummyData';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import HeroSection from '../components/herosection';
import { motion } from 'framer-motion';
import Galaxy from '../components/Galaxy.jsx';
import OptimizedImage from '../components/OptimizedImage';
import { usePerformance } from '../context/PerformanceContext';

const paintingBackgrounds = [
  // Day 1
      "/asset/Workshops/Anatomy_Kali_s.jpg",
      "/asset/Workshops/Biochemistry_Exposing_the_Hawkins_lab.jpg",
      "/asset/Workshops/Pathology_Brenners_blueprint_Needles_and_Nodes.jpg",
        "/asset/Workshops/Microbiology_Spores_of_the_Upside_Down.jpg",
      "/asset/Workshops/FM_Autopsy_Code_Black_The_Hopper_Case_File.jpg",
      //need to add
      "/asset/Workshops/FM_Crime_Scene_Code_Hawkins_The_Hopper_Case_File.jpg",

      // Day 2
      "/asset/Workshops/ENT_Running_Up_the_Decibel.jpg",
      "/asset/Workshops/Ophthalmology_Els_Vision.jpg",
      "/asset/Workshops/General_Medicine_Echoes_from_Camazotz.jpg",
      "/asset/Workshops/General_Surgery_Papas_Gloves.jpg",
      "/asset/Workshops/Obstetrics_and_Gynaecology_Project_Karen.jpg",
      "/asset/Workshops/Paediatrics_Vecnas_Vessels.jpg",

      // Day 3
      "/asset/Workshops/Psychiatry_The_Hive_Mind.jpg",
      //need to add
      "/asset/Workshops/EM_and_Anaesthesia_Turnbows_in_the_Barn.jpg",
      "/asset/Workshops/Orthopaedics_Walkmans_Canals.jpg",
];

const WorkshopCard = memo(({ workshop, index, bg, onClick, isLowPerf }) => (
  <div
    className={`group flex flex-col ${isLowPerf ? 'bg-[#0f0f14] border-white/10 shadow-sm' : 'bg-[rgba(10,10,15,0.85)] border-st-red/20 hover:-translate-y-1 shadow-lg'} cursor-pointer transition-transform duration-300 border rounded-xl overflow-hidden`}
    onClick={() => onClick(index)}
  >
    <div className="relative w-full aspect-video overflow-hidden">
      <OptimizedImage
        src={bg}
        alt={workshop.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,15,0.85)] to-transparent"></div>
      
      <div className={`absolute top-4 right-4 ${isLowPerf ? 'bg-black border-white/20' : 'bg-black/60 backdrop-blur-md border-st-red/30'} px-3 py-1.5 rounded-full border z-10 transition-transform group-hover:scale-105`}>
          <span className="text-white text-[12px] font-bold uppercase tracking-wider font-title flex items-center gap-2">
              {workshop.date ? workshop.date.split(',')[0] : "TBD"}
          </span>
      </div>
    </div>

    <div className="flex flex-col p-5 md:p-6 flex-1 border-t-2 border-[rgba(10,10,15,0.85)] bg-[#050505]">
      <span className="text-[#ff003c] text-[10px] md:text-xs font-black tracking-widest uppercase mb-2 block">
        Workshop
      </span>
      <h3
        className="text-white text-lg md:text-xl font-bold uppercase leading-tight mb-4 group-hover:text-[#ffffff] transition-colors"
        style={{ fontFamily: '"DM Serif Display", serif' }}
      >
        {workshop.title}
      </h3>
    </div>
  </div>
));

const Workshops = () => {
  const { isLowPerf } = usePerformance();
  const [showIntro, setShowIntro] = useState(true);
  const [searchParams] = useSearchParams();
  const [detailIndex, setDetailIndex] = useState(null); // null = grid view

  useEffect(() => {
    const id = searchParams.get('id');
    if (id) {
      const idx = workshops.findIndex(w => w.id === parseInt(id));
      if (idx !== -1) {
        setDetailIndex(idx);
        setShowIntro(false);
      }
    }
  }, [searchParams]);



  // ── Detail view helpers ──
  const inDetail = detailIndex !== null;
  const detailWorkshop = inDetail ? workshops[detailIndex] : null;
  const detailBg = inDetail ? paintingBackgrounds[detailIndex % paintingBackgrounds.length] : null;

  const prevDetail = () => setDetailIndex(i => (i - 1 + workshops.length) % workshops.length);
  const nextDetail = () => setDetailIndex(i => (i + 1) % workshops.length);
  const closeDetail = () => setDetailIndex(null);
  useEffect(() => {
    // Scroll to top when detail view changes
    if (detailIndex !== null) {
      window.scrollTo(0, 0);
    }
  }, [detailIndex]);

  useEffect(() => {
    // Automatically hide intro after 8 seconds
    const timer = setTimeout(() => setShowIntro(false), 8000);
    return () => clearTimeout(timer);
  }, []);
  if (showIntro) {
    return (
      <div
        className="fixed inset-0 z-[100] bg-black flex items-center justify-center p-4 cursor-pointer"
        onClick={() => setShowIntro(false)}
      >
        {/* Style for the text outline effect */}
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
            <span className="text-outline w-full block">A BUILDER OF</span>
            <span className="text-fill-anim delay-1 w-full block py-1">SKILLS.</span>
            <span className="text-outline w-full block mt-3 sm:mt-4 md:mt-5">FROM LEARNING</span>
            <span className="text-fill-anim delay-2 w-full block pb-1">TO DOING,</span>
            <span className="text-outline w-full block mt-3 sm:mt-4 md:mt-5">EVERY SESSION</span>
            <span className="text-outline w-full block">BECOMES A</span>
            <span className="text-fill-anim delay-2 w-full block pb-1">WORKSHOP.</span>
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
    <div className="min-h-screen font-milanesa bg-[#050505] text-[#ffffff] animate-[fadeIn_1s_ease-out] overflow-x-hidden">

      {/* ── Hero / Header ── */}
      {!inDetail && (
        <>
          <HeroSection 
            title="WORKSHOPS"
            subtitle="A BUILDER OF SKILLS"
            description="From learning to doing, every session becomes a workshop."
            image="/asset/hero_sec_for_all/workshop.png"
          />

          {/* Galaxy Background layer */}
          <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
            <Galaxy 
              starSpeed={0.2}
              density={1.2}
              hueShift={240}
              transparent
            />
          </div>

          {/* ── Workshop Cards Grid ── */}
          <section className="py-16 px-4 sm:px-8 bg-[#050505]">

            {/* Section Header */}
            <div className="flex items-center justify-center max-w-7xl mx-auto mb-10">
              <div className="h-[1px] bg-[#ff003c]/50 flex-1 max-w-[150px] mr-4"></div>
              <h2 className="text-[#ff003c] font-bold tracking-[0.2em] uppercase text-sm md:text-base">Workshop Sessions</h2>
              <div className="h-[1px] bg-[#ff003c]/50 flex-1 max-w-[150px] ml-4"></div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {workshops.map((workshop, index) => (
                <WorkshopCard
                  key={workshop.id}
                  workshop={workshop}
                  index={index}
                  bg={paintingBackgrounds[index % paintingBackgrounds.length]}
                  onClick={setDetailIndex}
                  isLowPerf={isLowPerf}
                />
              ))}
            </div>
          </section>
        </>
      )}

      {/* ── Full-screen Detail View ── */}
      {inDetail && detailWorkshop && (
        <div className="min-h-screen flex flex-col">

          {/* Hero with painting background */}
          <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
            <OptimizedImage
              src={detailBg}
              alt=""
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
            />
            <div className={`absolute inset-0 ${isLowPerf ? 'bg-black/80' : 'bg-black/60'}`}></div>

            {/* Close button */}
            <button
              onClick={closeDetail}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-30 w-10 h-10 rounded-full bg-[#050505]/70 border border-st-red/50 flex items-center justify-center text-st-red hover:bg-st-red hover:text-[#050505] transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left arrow */}
            <button
              onClick={prevDetail}
              className="absolute left-3 sm:left-8 z-20 w-12 h-12 rounded-full bg-[#050505]/60 border border-st-red/50 flex items-center justify-center text-st-red hover:bg-st-red hover:text-[#050505] transition-all backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right arrow */}
            <button
              onClick={nextDetail}
              className="absolute right-3 sm:right-8 z-20 w-12 h-12 rounded-full bg-[#050505]/60 border border-st-red/50 flex items-center justify-center text-st-red hover:bg-st-red hover:text-[#050505] transition-all backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Center content */}
            <div className="relative z-10 text-center px-12 sm:px-24 max-w-4xl mx-auto">
              <p className="text-st-red text-xs uppercase tracking-[0.3em] mb-3 font-bold">
                Details & Booking
              </p>
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-milanesa font-black text-[#ffffff] uppercase tracking-wide drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] leading-tight">
                {detailWorkshop.title}
              </h1>
              {detailWorkshop.regLink ? (
                <a 
                  href={detailWorkshop.regLink} 
                  target="_blank" 
                  rel="noreferrer"
                  className="mt-8 block"
                >
                  <button className="px-10 py-4 bg-st-red text-WHITE rounded-full font-title font-black uppercase tracking-widest hover:scale-105 hover:bg-white hover:text-black transition-all shadow-[0_0_30px_rgba(255,0,60,0.3)] mx-auto">
                    Register LINK
                  </button>
                </a>
              ) : (
                <button className="mt-8 px-10 py-4 bg-white/10 text-white/40 rounded-full font-title font-black uppercase tracking-widest cursor-not-allowed mx-auto border border-white/5">
                  Only On-Spot Registration
                </button>
              )}
            </div>
          </section>

          {/* Detail content */}
          <section className="flex-1 bg-[#050505]/95 border-t border-st-red/20 py-12 md:py-16 px-4">
            <div className="max-w-6xl mx-auto">
              {/* Top Row: Description & Image */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12">
                
                

                {/* Main Desc & Highlights */}
                <div className="md:col-span-7 order-1 md:order-2">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wide text-[#ffffff] leading-tight mb-2">
                    {detailWorkshop.title}
                  </h2>
                  <p className="text-st-red text-xs sm:text-sm uppercase tracking-[0.2em] mb-6 border-b border-st-red/20 pb-4">
                    Workshop Session
                  </p>

                  <p className="text-[#ffffff]/90 leading-relaxed text-base md:text-lg mb-8 font-light italic">
                    "{detailWorkshop.description}"
                  </p>

                  {detailWorkshop.highlights && detailWorkshop.highlights.length > 0 && (
                    <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8">
                      <h4 className="text-st-red font-bold uppercase tracking-widest text-sm mb-6 flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-st-red/50"></span>
                        Key Highlights
                      </h4>
                      <ul className="space-y-4">
                        {detailWorkshop.highlights.map((hlt, i) => (
                          <li key={i} className="flex items-start gap-4">
                            <div className="w-1.5 h-1.5 rounded-full bg-st-red mt-2 shrink-0"></div>
                            <span className="text-gray-300/80 text-sm md:text-base leading-relaxed">{hlt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Row: Additional Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                
                {/* Schedule & Venue */}
                <div className="lg:col-span-2 bg-black/40 border border-st-red/20 p-6 rounded-2xl flex flex-col sm:flex-row gap-6 sm:gap-10">
                  <div className="flex-1">
                    <h5 className="text-white/50 text-[10px] uppercase font-bold tracking-widest mb-1">Date & Time</h5>
                    <p className="text-[#ffffff] font-medium text-lg mb-1">{detailWorkshop.date || "TBD"}</p>
                    <p className="text-st-red text-sm">{detailWorkshop.time || "TBD"}</p>
                  </div>
                  <div className="w-px bg-white/10 hidden sm:block"></div>
                  <div className="flex-1">
                    <h5 className="text-white/50 text-[10px] uppercase font-bold tracking-widest mb-1">Venue</h5>
                    <p className="text-[#ffffff] font-medium text-base mb-1">{detailWorkshop.venue || "TBD"}</p>
                    <p className="text-gray-300/50 text-xs mt-2">Slots Available: <span className="text-white">{detailWorkshop.slots || "TBD"}</span></p>
                  </div>
                </div>

                {/* Pricing / Fees */}
                <div className="bg-black/40 border border-st-red/20 p-6 rounded-2xl flex flex-col justify-center">
                  <h5 className="text-white/50 text-[10px] uppercase font-bold tracking-widest mb-3">Registration Fee</h5>
                  {detailWorkshop.fees ? (
                    <div className="space-y-2">
                      {detailWorkshop.fees.earlyBird && (
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-300/70">Early Bird</span>
                          <span className="text-st-red font-bold">{detailWorkshop.fees.earlyBird}</span>
                        </div>
                      )}
                      {detailWorkshop.fees.lateBird && (
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-300/70">Late Registration</span>
                          <span className="text-[#ffffff] font-bold">{detailWorkshop.fees.lateBird}</span>
                        </div>
                      )}
                      {detailWorkshop.fees.spotPricing && (
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-300/70">Spot Registration</span>
                          <span className="text-st-red font-bold">{detailWorkshop.fees.spotPricing}</span>
                        </div>
                      )}
                      {detailWorkshop.fees.regular && (
                         <div className="flex justify-between items-center text-sm">
                           <span className="text-gray-300/70">Fee</span>
                           <span className="text-st-red font-bold">{detailWorkshop.fees.regular}</span>
                         </div>
                      )}
                    </div>
                  ) : (
                    <p className="text-st-red font-bold">TBD</p>
                  )}
                </div>

                {/* Contact Incharges */}
                <div className="bg-black/40 border border-st-red/20 p-6 rounded-2xl flex flex-col justify-center">
                  <h5 className="text-white/50 text-[10px] uppercase font-bold tracking-widest mb-3">Incharges</h5>
                  {detailWorkshop.incharges && detailWorkshop.incharges.length > 0 ? (
                    <div className="space-y-3">
                      {detailWorkshop.incharges.map((incharge, i) => (
                        <div key={i} className="flex flex-col">
                           <span className="text-[#ffffff] text-sm uppercase font-bold tracking-wider">{incharge.name}</span>
                           <a href={`tel:+91${incharge.phone.replace(/\s/g, '')}`} className="text-st-red text-xs mt-0.5 hover:text-white transition-colors">+91 {incharge.phone}</a>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-300/50 text-xs italic">Details coming soon</p>
                  )}
                </div>

              </div>

              {/* Prev / Next navigation */}
              <div className="flex items-center justify-between pt-8 border-t border-st-red/20 max-w-lg mx-auto">
                <button onClick={prevDetail} className="group flex items-center gap-3 text-st-red hover:text-white transition-colors">
                  <div className="w-10 h-10 rounded-full border border-st-red/40 flex items-center justify-center group-hover:bg-st-red group-hover:border-transparent group-hover:text-black transition-all">
                    <ChevronLeft className="w-5 h-5" />
                  </div>
                  <span className="text-xs uppercase tracking-widest hidden sm:block font-bold">Prev</span>
                </button>
                <div className="flex flex-col items-center">
                  <span className="text-[#ffffff] font-black tracking-widest text-lg">
                    {detailIndex + 1}
                  </span>
                  <span className="text-white/30 text-[10px] uppercase tracking-widest">
                    of {workshops.length}
                  </span>
                </div>
                <button onClick={nextDetail} className="group flex items-center gap-3 text-st-red hover:text-white transition-colors">
                  <span className="text-xs uppercase tracking-widest hidden sm:block font-bold">Next</span>
                  <div className="w-10 h-10 rounded-full border border-st-red/40 flex items-center justify-center group-hover:bg-st-red group-hover:border-transparent group-hover:text-black transition-all">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </button>
              </div>

              {/* Back to grid */}
              <div className="text-center mt-12">
                <button
                  onClick={closeDetail}
                  className="inline-block text-st-red/50 hover:text-st-red text-xs uppercase tracking-[0.3em] transition-colors pb-1 border-b border-st-red/30 hover:border-st-red"
                >
                  Back to all workshops
                </button>
              </div>

            </div>
          </section>
        </div>
      )}

    </div>
  );
};

export default Workshops;
