import { useState } from 'react';
import { events } from '../data/dummyData';
import { ChevronLeft, ChevronRight, Clock, Calendar, X } from 'lucide-react';

const eventBackgrounds = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/1280px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/1280px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg',
  'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=1280',
  'https://images.unsplash.com/photo-1580136608260-4eb11f4b24fe?auto=format&fit=crop&q=80&w=1280',
  'https://images.unsplash.com/photo-1578301978018-3005759f48f7?auto=format&fit=crop&q=80&w=1280',
  'https://images.unsplash.com/photo-1579783900862-c0f05e083ef3?auto=format&fit=crop&q=80&w=1280',
  'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1280',
];

const Events = () => {
  const [detailIndex, setDetailIndex] = useState(null);

  const inDetail = detailIndex !== null;
  const detailEvent = inDetail ? events[detailIndex] : null;
  const detailBg = inDetail ? (eventBackgrounds[detailIndex] || detailEvent.image) : null;

  const prev = () => setDetailIndex(i => (i - 1 + events.length) % events.length);
  const next = () => setDetailIndex(i => (i + 1) % events.length);

  return (
    <div className="min-h-screen font-milanesa bg-renaissance-dark text-[#FBF1CF]">

      {/* ── Hero ── */}
      <section
        className="relative h-[42vh] md:h-[55vh] flex items-center justify-center bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&q=80&w=1920')` }}
      >
        <div className="absolute inset-0 bg-black/65 backdrop-blur-[1px]" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-milanesa font-black text-[#FBF1CF] tracking-[0.1em] uppercase mb-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
            EVENTS
          </h1>
          <p className="text-sm md:text-base text-gray-200 mb-6 max-w-xl mx-auto leading-relaxed">
            Explore 7 engaging events across three days, designed for a modern academic conference experience.
          </p>
          <button className="px-10 py-3 bg-renaissance-burgundy text-renaissance-gold border-2 border-renaissance-gold rounded-full font-milanesa font-bold uppercase tracking-widest hover:bg-renaissance-gold hover:text-renaissance-burgundy transition-all duration-500 shadow-xl text-sm">
            OUR SCHEDULE
          </button>
        </div>
      </section>

      {/* ── Event Cards Grid ── */}
      <section className="py-14 px-4 sm:px-8 bg-[#1a1008]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {events.map((event, index) => (
            <div
              key={event.id}
              className="relative group overflow-hidden rounded-xl cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
              style={{ aspectRatio: '4/3' }}
              onClick={() => setDetailIndex(index)}
            >
              {/* Painting background */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${eventBackgrounds[index] || event.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-xl sm:text-2xl font-milanesa font-black text-[#FBF1CF] uppercase tracking-tight leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                  {event.title}
                </h3>
                {event.subtitle && (
                  <p className="text-sm font-bold text-[#FBF1CF]/80 uppercase tracking-wide mt-0.5 drop-shadow-md">
                    {event.subtitle}
                  </p>
                )}
                <button className="mt-3 px-5 py-1.5 bg-renaissance-gold text-renaissance-dark font-milanesa font-bold text-xs uppercase rounded tracking-widest hover:bg-[#FBF1CF] transition-all shadow-lg">
                  See more
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Detail Overlay ── */}
      {inDetail && detailEvent && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col overflow-hidden">

          {/* Mobile top back bar */}
          <div className="flex md:hidden items-center gap-3 px-4 py-3 bg-[#100c06] border-b border-renaissance-gold/20 shrink-0 z-30">
            <button
              onClick={() => setDetailIndex(null)}
              className="flex items-center gap-2 text-renaissance-gold font-bold uppercase tracking-widest text-sm"
            >
              <ChevronLeft className="w-5 h-5" /> Back to Events
            </button>
          </div>

          {/* Inner split */}
          <div className="flex flex-col md:flex-row flex-1 overflow-hidden">

            {/* LEFT: Full painting */}
            <div className="relative w-full md:w-1/2 h-[35vh] md:h-full shrink-0">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${detailBg})` }}
              />
              <div className="absolute inset-0 bg-black/30" />

              {/* Arrows on the painting */}
              <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/50 border border-renaissance-gold/50 flex items-center justify-center text-renaissance-gold hover:bg-renaissance-gold hover:text-renaissance-dark transition-all">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/50 border border-renaissance-gold/50 flex items-center justify-center text-renaissance-gold hover:bg-renaissance-gold hover:text-renaissance-dark transition-all">
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                {events.map((_, i) => (
                  <button key={i} onClick={() => setDetailIndex(i)}
                    className={`rounded-full transition-all duration-300 ${i === detailIndex ? 'w-5 h-1.5 bg-renaissance-gold' : 'w-1.5 h-1.5 bg-renaissance-gold/40'}`}
                  />
                ))}
              </div>
            </div>

            {/* RIGHT: Detail content */}
            <div className="flex-1 overflow-y-auto bg-[#100c06] relative">
              {/* Desktop close button */}
              <button
                onClick={() => setDetailIndex(null)}
                className="hidden md:flex absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-renaissance-dark/80 border border-renaissance-gold/40 items-center justify-center text-renaissance-gold hover:bg-renaissance-gold hover:text-renaissance-dark transition-all"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="p-5 sm:p-8 md:p-10 max-w-xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-wide text-[#FBF1CF] leading-tight">
                  {detailEvent.title}
                </h2>
                {detailEvent.subtitle && (
                  <p className="text-renaissance-gold font-bold uppercase tracking-[0.2em] text-sm mt-1 mb-4">
                    {detailEvent.subtitle}
                  </p>
                )}

                <div className="flex flex-wrap gap-4 mt-4 mb-6 pb-6 border-b border-renaissance-gold/20 text-[#FBF1CF]/60 text-xs uppercase tracking-widest">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {detailEvent.date}</span>
                  {detailEvent.time && <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {detailEvent.time}</span>}
                </div>

                <p className="text-[#FBF1CF]/80 leading-relaxed text-sm md:text-base font-semibold mb-8">
                  {detailEvent.description}
                </p>

                <button className="px-8 py-3 bg-renaissance-burgundy text-renaissance-gold border-2 border-renaissance-gold rounded-full font-bold uppercase tracking-widest hover:bg-renaissance-gold hover:text-renaissance-burgundy transition-all text-sm shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                  Register Now
                </button>

                <div className="flex items-center justify-between mt-8 pt-6 border-t border-renaissance-gold/15">
                  <button onClick={prev} className="flex items-center gap-2 px-4 py-2 border border-renaissance-gold/40 text-renaissance-gold text-xs rounded-full hover:bg-renaissance-gold hover:text-renaissance-dark transition-all">
                    <ChevronLeft className="w-3.5 h-3.5" /> Prev
                  </button>
                  <span className="text-[#FBF1CF]/30 text-xs tracking-widest uppercase">{detailIndex + 1} / {events.length}</span>
                  <button onClick={next} className="flex items-center gap-2 px-4 py-2 border border-renaissance-gold/40 text-renaissance-gold text-xs rounded-full hover:bg-renaissance-gold hover:text-renaissance-dark transition-all">
                    Next <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Events;
