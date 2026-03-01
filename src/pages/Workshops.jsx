import { useState } from 'react';
import { workshops } from '../data/dummyData';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const allDays = [
  { key: 'day1', label: 'Day 1 — June 12' },
  { key: 'day2', label: 'Day 2 — June 13' },
  { key: 'day3', label: 'Day 3 — June 14' },
];

const paintingBackgrounds = {
  day1: [
    // Eugène Delacroix — Liberty Leading the People
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Eug%C3%A8ne_Delacroix_-_La_libert%C3%A9_guidant_le_peuple.jpg/1280px-Eug%C3%A8ne_Delacroix_-_La_libert%C3%A9_guidant_le_peuple.jpg',
    // Jacques-Louis David — Oath of the Horatii
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Jacques-Louis_David_-_Oath_of_the_Horatii_-_Google_Art_Project.jpg/1280px-Jacques-Louis_David_-_Oath_of_the_Horatii_-_Google_Art_Project.jpg',
    // Jacques-Louis David — Napoleon Crossing the Alps
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/David_Napoleon_crossing_the_Alps.jpg/800px-David_Napoleon_crossing_the_Alps.jpg',
    // Théodore Géricault — The Raft of the Medusa
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/JEAN-LOUIS_TH%C3%89ODORE_G%C3%89RICAULT_-_La_Balsa_de_la_Medusa_%28Museo_del_Louvre%2C_1818-19%29.jpg/1280px-JEAN-LOUIS_TH%C3%89ODORE_G%C3%89RICAULT_-_La_Balsa_de_la_Medusa_%28Museo_del_Louvre%2C_1818-19%29.jpg',
    // Jean-Honoré Fragonard — The Swing
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Fragonard%2C_The_Swing.jpg/800px-Fragonard%2C_The_Swing.jpg',
    // Jacques-Louis David — Death of Marat
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Death_of_Marat_by_David.jpg/800px-Death_of_Marat_by_David.jpg',
  ],
  day2: [
    // Jacques-Louis David — Coronation of Napoleon
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Jacques_Louis_David_Coronation.jpg/1280px-Jacques_Louis_David_Coronation.jpg',
    // Jean-Auguste Ingres — La Grande Odalisque
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Jean_Auguste_Dominique_Ingres%2C_La_Grande_Odalisque%2C_1814.jpg/1280px-Jean_Auguste_Dominique_Ingres%2C_La_Grande_Odalisque%2C_1814.jpg',
    // Nicolas Poussin — Et in Arcadia ego
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Nicolas_Poussin_-_Et_in_Arcadia_ego_%28Louvre_version%2C_reframed%29.jpg/1280px-Nicolas_Poussin_-_Et_in_Arcadia_ego_%28Louvre_version%2C_reframed%29.jpg',
    // Antoine Watteau — Pilgrimage to Cythera
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Antoine_Watteau_-_L%27Embarquement_pour_Cyth%C3%A8re_-_Louvre.jpg/1280px-Antoine_Watteau_-_L%27Embarquement_pour_Cyth%C3%A8re_-_Louvre.jpg',
    // Très Riches Heures du Duc de Berry — January
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Tres_Riches_Heures_du_duc_de_Berry_janvier.jpg/800px-Tres_Riches_Heures_du_duc_de_Berry_janvier.jpg',
    // School of Athens — Raphael
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/1280px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg',
  ],
  day3: [
    // Michelangelo — Creation of Adam
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg/1280px-Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg',
    // Eugène Delacroix — Women of Algiers
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Eug%C3%A8ne_Delacroix_-_Women_of_Algiers_%28in_their_Apartment%29.jpg/1280px-Eug%C3%A8ne_Delacroix_-_Women_of_Algiers_%28in_their_Apartment%29.jpg',
    // Jean Auguste Ingres — The Turkish Bath
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Jean-Auguste-Dominique_Ingres_-_Le_Bain_turc.jpg/800px-Jean-Auguste-Dominique_Ingres_-_Le_Bain_turc.jpg',
  ],
};

const Workshops = () => {
  const [activeDay, setActiveDay] = useState('day1');
  const [detailIndex, setDetailIndex] = useState(null); // null = grid view

  const currentList = workshops[activeDay];
  const currentBgs = paintingBackgrounds[activeDay];

  // ── Detail view helpers ──
  const inDetail = detailIndex !== null;
  const detailWorkshop = inDetail ? currentList[detailIndex] : null;
  const detailBg = inDetail ? (currentBgs[detailIndex % currentBgs.length]) : null;

  const prevDetail = () => setDetailIndex(i => (i - 1 + currentList.length) % currentList.length);
  const nextDetail = () => setDetailIndex(i => (i + 1) % currentList.length);
  const closeDetail = () => setDetailIndex(null);

  return (
    <div className="min-h-screen font-milanesa bg-renaissance-dark text-[#FBF1CF]">

      {/* ── Hero / Header ── */}
      {!inDetail && (
        <>
          <section
            className="relative h-[40vh] md:h-[55vh] flex items-center justify-center bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=1920&h=1080')` }}
          >
            <div className="absolute inset-0 bg-renaissance-dark/75"></div>
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-milanesa font-black text-[#FBF1CF] tracking-widest uppercase mb-4 drop-shadow-2xl">
                WORKSHOPS
              </h1>
              <p className="text-sm md:text-base text-gray-300 mb-6 max-w-xl mx-auto leading-relaxed">
                15 hands-on workshops across three days of the Renaissance academic experience.
              </p>
            </div>
          </section>

          {/* ── Day Tab Switcher ── */}
          <div className="sticky top-16 z-40 bg-renaissance-dark/95 backdrop-blur-md border-b border-renaissance-gold/20 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 flex justify-center gap-2 sm:gap-6 py-3 overflow-x-auto">
              {allDays.map(d => (
                <button
                  key={d.key}
                  onClick={() => { setActiveDay(d.key); setDetailIndex(null); }}
                  className={`px-4 sm:px-8 py-2 rounded-full font-bold uppercase tracking-widest text-xs sm:text-sm whitespace-nowrap transition-all duration-300 border ${activeDay === d.key
                    ? 'bg-renaissance-gold text-renaissance-dark border-renaissance-gold shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                    : 'border-renaissance-gold/30 text-renaissance-gold/70 hover:border-renaissance-gold hover:text-renaissance-gold'
                    }`}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>

          {/* ── Workshop Cards Grid ── */}
          <section className="py-14 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentList.map((workshop, index) => (
                <div
                  key={workshop.id}
                  className="relative group overflow-hidden rounded-xl cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                  style={{ aspectRatio: '4/3' }}
                  onClick={() => setDetailIndex(index)}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${currentBgs[index % currentBgs.length]})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  {/* Bottom content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-xl sm:text-2xl font-milanesa font-black text-[#FBF1CF] uppercase tracking-tight leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                      {workshop.title}
                    </h4>
                    <p className="text-[10px] text-renaissance-gold/80 uppercase tracking-widest mt-0.5">
                      {allDays.find(d => d.key === activeDay)?.label}
                    </p>
                    <button className="mt-3 px-5 py-1.5 bg-renaissance-gold text-renaissance-dark font-milanesa font-bold text-xs uppercase rounded tracking-widest hover:bg-[#FBF1CF] transition-all shadow-lg">
                      See more
                    </button>
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
                {allDays.find(d => d.key === activeDay)?.label}
              </p>
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-milanesa font-black text-[#FBF1CF] uppercase tracking-wide drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] leading-tight">
                {detailWorkshop.title}
              </h1>
              <button className="mt-8 px-8 py-3 bg-renaissance-burgundy text-renaissance-gold border-2 border-renaissance-gold rounded-full font-milanesa font-bold uppercase tracking-widest hover:bg-renaissance-gold hover:text-renaissance-burgundy transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] text-sm">
                Register Now
              </button>
            </div>

            {/* Pagination dots */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {currentList.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setDetailIndex(i)}
                  className={`rounded-full transition-all duration-300 ${i === detailIndex ? 'w-6 h-2 bg-renaissance-gold' : 'w-2 h-2 bg-renaissance-gold/30'}`}
                />
              ))}
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
                  <div className="flex gap-2 mt-4 flex-wrap">
                    {currentList.map((ws, i) => (
                      <button
                        key={ws.id}
                        onClick={() => setDetailIndex(i)}
                        className={`rounded overflow-hidden border-2 transition-all duration-200 ${i === detailIndex ? 'border-renaissance-gold scale-105' : 'border-transparent opacity-40 hover:opacity-70'}`}
                      >
                        <img src={ws.image} alt={ws.title} className="w-10 h-10 object-cover" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right: Description */}
                <div className="md:col-span-8">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-wide text-[#FBF1CF] leading-tight mb-2">
                    {detailWorkshop.title}
                  </h2>
                  <p className="text-renaissance-gold text-xs uppercase tracking-[0.2em] mb-6 border-b border-renaissance-gold/20 pb-4">
                    {allDays.find(d => d.key === activeDay)?.label}
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
                      {detailIndex + 1} / {currentList.length}
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
