import { useState, useEffect } from 'react';
import { workshops } from '../data/dummyData';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const paintingBackgrounds = [
  // Day 1
  'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Eug%C3%A8ne_Delacroix_-_La_libert%C3%A9_guidant_le_peuple.jpg/1280px-Eug%C3%A8ne_Delacroix_-_La_libert%C3%A9_guidant_le_peuple.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Jacques-Louis_David_-_Oath_of_the_Horatii_-_Google_Art_Project.jpg/1280px-Jacques-Louis_David_-_Oath_of_the_Horatii_-_Google_Art_Project.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/David_Napoleon_crossing_the_Alps.jpg/800px-David_Napoleon_crossing_the_Alps.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/JEAN-LOUIS_TH%C3%89ODORE_G%C3%89RICAULT_-_La_Balsa_de_la_Medusa_%28Museo_del_Louvre%2C_1818-19%29.jpg/1280px-JEAN-LOUIS_TH%C3%89ODORE_G%C3%89RICAULT_-_La_Balsa_de_la_Medusa_%28Museo_del_Louvre%2C_1818-19%29.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Fragonard%2C_The_Swing.jpg/800px-Fragonard%2C_The_Swing.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Death_of_Marat_by_David.jpg/800px-Death_of_Marat_by_David.jpg',
  // Day 2
  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Jacques_Louis_David_Coronation.jpg/1280px-Jacques_Louis_David_Coronation.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Jean_Auguste_Dominique_Ingres%2C_La_Grande_Odalisque%2C_1814.jpg/1280px-Jean_Auguste_Dominique_Ingres%2C_La_Grande_Odalisque%2C_1814.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Nicolas_Poussin_-_Et_in_Arcadia_ego_%28Louvre_version%2C_reframed%29.jpg/1280px-Nicolas_Poussin_-_Et_in_Arcadia_ego_%28Louvre_version%2C_reframed%29.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Antoine_Watteau_-_L%27Embarquement_pour_Cyth%C3%A8re_-_Louvre.jpg/1280px-Antoine_Watteau_-_L%27Embarquement_pour_Cyth%C3%A8re_-_Louvre.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Tres_Riches_Heures_du_duc_de_Berry_janvier.jpg/800px-Tres_Riches_Heures_du_duc_de_Berry_janvier.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/1280px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg',
  // Day 3
  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg/1280px-Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Eug%C3%A8ne_Delacroix_-_Women_of_Algiers_%28in_their_Apartment%29.jpg/1280px-Eug%C3%A8ne_Delacroix_-_Women_of_Algiers_%28in_their_Apartment%29.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Jean-Auguste-Dominique_Ingres_-_Le_Bain_turc.jpg/800px-Jean-Auguste-Dominique_Ingres_-_Le_Bain_turc.jpg',
];

const Workshops = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [detailIndex, setDetailIndex] = useState(null); // null = grid view



  // ── Detail view helpers ──
  const inDetail = detailIndex !== null;
  const detailWorkshop = inDetail ? workshops[detailIndex] : null;
  const detailBg = inDetail ? paintingBackgrounds[detailIndex % paintingBackgrounds.length] : null;

  const prevDetail = () => setDetailIndex(i => (i - 1 + workshops.length) % workshops.length);
  const nextDetail = () => setDetailIndex(i => (i + 1) % workshops.length);
  const closeDetail = () => setDetailIndex(null);
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
    <div className="min-h-screen font-milanesa bg-renaissance-dark text-[#FBF1CF] animate-[fadeIn_1s_ease-out]">

      {/* ── Hero / Header ── */}
      {!inDetail && (
        <>
          <section className="w-full pt-20">
            <div
              className="relative w-full h-[30vh] md:h-[50vh] lg:h-[60vh] flex items-center justify-center bg-contain bg-center bg-no-repeat bg-[#1A0D0D]"
              style={{ backgroundImage: `url('/Workshop.jpg')` }}
            >
            </div>
          </section>

          {/* ── Workshop Cards Grid ── */}
          <section className="py-16 px-4 sm:px-8 bg-[#0a0000]">

            {/* Section Header */}
            <div className="flex items-center justify-center max-w-7xl mx-auto mb-10">
              <div className="h-[1px] bg-[#D4AF37]/50 flex-1 max-w-[150px] mr-4"></div>
              <h2 className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-sm md:text-base">Workshop Sessions</h2>
              <div className="h-[1px] bg-[#D4AF37]/50 flex-1 max-w-[150px] ml-4"></div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {workshops.map((workshop, index) => (
                <div
                  key={workshop.id}
                  className="group flex flex-col bg-[#1c182d] cursor-pointer hover:-translate-y-1 transition-transform duration-300 border border-renaissance-gold/20 rounded-xl overflow-hidden shadow-lg"
                  onClick={() => setDetailIndex(index)}
                >
                  {/* Image top half */}
                  <div className="relative w-full aspect-video overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${paintingBackgrounds[index % paintingBackgrounds.length]})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1c182d] to-transparent"></div>
                  </div>

                  {/* Text bottom half */}
                  <div className="flex flex-col p-5 md:p-6 flex-1 border-t-2 border-[#1c182d] bg-[#140c07]">
                    <span className="text-[#D4AF37] text-[10px] md:text-xs font-black tracking-widest uppercase mb-2 block">
                      Workshop
                    </span>
                    <h3
                      className="text-white text-lg md:text-xl font-bold uppercase leading-tight mb-4 group-hover:text-[#FBF1CF] transition-colors"
                      style={{ fontFamily: '"DM Serif Display", serif' }}
                    >
                      {workshop.title}
                    </h3>
                  </div>
                </div>
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
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-700"
              style={{ backgroundImage: `url(${detailBg})` }}
            ></div>
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Close button */}
            <button
              onClick={closeDetail}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-30 w-10 h-10 rounded-full bg-renaissance-dark/70 border border-renaissance-gold/50 flex items-center justify-center text-renaissance-gold hover:bg-renaissance-gold hover:text-renaissance-dark transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left arrow */}
            <button
              onClick={prevDetail}
              className="absolute left-3 sm:left-8 z-20 w-12 h-12 rounded-full bg-renaissance-dark/60 border border-renaissance-gold/50 flex items-center justify-center text-renaissance-gold hover:bg-renaissance-gold hover:text-renaissance-dark transition-all backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right arrow */}
            <button
              onClick={nextDetail}
              className="absolute right-3 sm:right-8 z-20 w-12 h-12 rounded-full bg-renaissance-dark/60 border border-renaissance-gold/50 flex items-center justify-center text-renaissance-gold hover:bg-renaissance-gold hover:text-renaissance-dark transition-all backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Center content */}
            <div className="relative z-10 text-center px-12 sm:px-24 max-w-4xl mx-auto">
              <p className="text-renaissance-gold text-xs uppercase tracking-[0.3em] mb-3 font-bold">
                Details & Booking
              </p>
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-milanesa font-black text-[#FBF1CF] uppercase tracking-wide drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] leading-tight">
                {detailWorkshop.title}
              </h1>
              <button className="mt-8 px-8 py-3 bg-renaissance-burgundy text-renaissance-gold border-2 border-renaissance-gold rounded-full font-milanesa font-bold uppercase tracking-widest hover:bg-renaissance-gold hover:text-renaissance-burgundy transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] text-sm">
                Register Now
              </button>
            </div>
          </section>

          {/* Detail content */}
          <section className="flex-1 bg-renaissance-dark/95 border-t border-renaissance-gold/20 py-12 md:py-16 px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

                {/* Left: Image + thumbnails */}
                <div className="md:col-span-4">
                  <div className="rounded-xl overflow-hidden border border-renaissance-gold/30 shadow-[0_0_30px_rgba(0,0,0,0.8)]">
                    <img
                      src={detailWorkshop.image}
                      alt={detailWorkshop.title}
                      className="w-full h-48 sm:h-60 object-cover"
                    />
                  </div>
                </div>

                {/* Right: Description */}
                <div className="md:col-span-8">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-wide text-[#FBF1CF] leading-tight mb-2">
                    {detailWorkshop.title}
                  </h2>
                  <p className="text-renaissance-gold text-xs uppercase tracking-[0.2em] mb-6 border-b border-renaissance-gold/20 pb-4">
                    Workshop Session
                  </p>

                  <p className="text-[#FBF1CF]/80 leading-relaxed text-base md:text-lg font-semibold mb-8">
                    {detailWorkshop.description}
                  </p>

                  {/* Prev / Next navigation */}
                  <div className="flex items-center gap-4 pt-4 border-t border-renaissance-gold/20">
                    <button onClick={prevDetail} className="flex items-center gap-2 px-5 py-2 border border-renaissance-gold/40 text-renaissance-gold text-sm rounded-full hover:bg-renaissance-gold hover:text-renaissance-dark transition-all">
                      <ChevronLeft className="w-4 h-4" /> Prev
                    </button>
                    <span className="text-[#FBF1CF]/40 text-xs tracking-widest uppercase mx-auto">
                      {detailIndex + 1} / {workshops.length}
                    </span>
                    <button onClick={nextDetail} className="flex items-center gap-2 px-5 py-2 border border-renaissance-gold/40 text-renaissance-gold text-sm rounded-full hover:bg-renaissance-gold hover:text-renaissance-dark transition-all">
                      Next <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Back to grid */}
                  <button
                    onClick={closeDetail}
                    className="mt-6 text-renaissance-gold/50 hover:text-renaissance-gold text-xs uppercase tracking-[0.3em] transition-colors"
                  >
                    ← Back to all workshops
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

    </div>
  );
};

export default Workshops;
