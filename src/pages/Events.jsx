import { useState } from 'react';
import { events } from '../data/dummyData';

// Placeholder paintings using high quality classic art links similar to the screenshot
const eventBackgrounds = [
  'https://images.unsplash.com/photo-1577083552792-a0d461cb1dd6?auto=format&fit=crop&q=80&w=800', // School of Athens equivalent
  'https://images.unsplash.com/photo-1577083552792-a0d461cb1dd6?auto=format&fit=crop&q=80&w=800', // Systemic quiz
  'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=800', // Mosaic/Mural
  'https://images.unsplash.com/photo-1580136608260-4eb11f4b24fe?auto=format&fit=crop&q=80&w=800', // Dali/Surrealist style
  'https://images.unsplash.com/photo-1578301978018-3005759f48f7?auto=format&fit=crop&q=80&w=800', // Old doctor/alchemist
  'https://images.unsplash.com/photo-1579783900862-c0f05e083ef3?auto=format&fit=crop&q=80&w=800', // Painter/writer style
  'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800', // Vintage photo/camera
];

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="min-h-screen font-body bg-white text-renaissance-dark">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&q=80&w=1920&h=1080')`,
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-7xl md:text-8xl font-milanesa font-black text-[#FBF1CF] tracking-[0.1em] uppercase mb-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
            EVENTS
          </h1>
          <p className="text-sm md:text-base font-body text-gray-200 mb-8 max-w-xl mx-auto leading-relaxed">
            Explore 7 engaging events across three days, designed for a modern academic conference experience.
          </p>
          <button className="px-10 py-3 bg-renaissance-burgundy text-renaissance-gold border-2 border-renaissance-gold rounded-full font-milanesa font-bold uppercase tracking-widest hover:bg-renaissance-gold hover:text-renaissance-burgundy transition-all duration-500 shadow-xl">
            OUR SCHEDULE
          </button>
        </div>
      </section>

      {/* Quick Select Nav Bar Filter */}
      <div className="sticky top-20 z-40 py-4 px-4 flex justify-center backdrop-blur-md bg-renaissance-dark border-y border-gray-200 shadow-md">
        <div className="flex items-center gap-4">
          <label className="text-renaissance-gold font-milanesa font-bold uppercase tracking-widest hidden sm:block">
            Quick Select Event:
          </label>
          <div className="relative">
            <select
              className="appearance-none bg-white border-2 border-renaissance-dark/30 text-renaissance-dark font-body py-2 pl-4 pr-10 rounded-md outline-none cursor-pointer focus:ring-1 focus:ring-renaissance-dark min-w-[300px]"
              onChange={(e) => {
                const ev = events.find(ev => ev.id.toString() === e.target.value);
                if (ev) setSelectedEvent(ev);
                e.target.value = "";
              }}
              defaultValue=""
            >
              <option value="" disabled className="bg-[#FBF1CF]">-- Select an Event --</option>
              {events.map((event) => (
                <option key={event.id} value={event.id} className="bg-[#FBF1CF] font-medium">
                  {event.title} {event.subtitle ? `- ${event.subtitle}` : ''}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-renaissance-dark/50">
              ▼
            </div>
          </div>
        </div>
      </div>

      {/* Events Grid Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {events.map((event, index) => (
            <div
              key={event.id}
              className="relative group h-80 overflow-hidden rounded-3xl bg-renaissance-dark shadow-2xl transition-transform duration-500 hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedEvent(event)}
            >
              {/* Event Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-70"
                style={{ backgroundImage: `url(${eventBackgrounds[index % eventBackgrounds.length] || event.image})` }}
              ></div>

              {/* Tinted Overlay to match screenshot depth */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500"></div>

              {/* Content Box */}
              <div className="absolute inset-0 flex flex-col justify-center text-center px-6 items-center">
                <h3 className="text-3xl md:text-3xl font-milanesa font-black text-[#FBF1CF] uppercase tracking-tighter leading-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
                  {event.title}
                </h3>
                {event.subtitle && (
                  <p className="text-xl md:text-2xl font-body font-bold text-[#FBF1CF] uppercase drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] mt-1 mb-4">
                    {event.subtitle}
                  </p>
                )}
                <button className="px-6 py-2 mt-2 bg-renaissance-burgundy text-renaissance-gold font-body font-bold text-base rounded-full border border-renaissance-gold hover:bg-renaissance-gold hover:text-renaissance-burgundy hover:scale-105 transition-all shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
                  See more
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-renaissance-dark/95 backdrop-blur-lg transition-all duration-300"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="bg-white text-renaissance-dark max-w-2xl w-full rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(212,175,55,0.2)]"
            onClick={e => e.stopPropagation()}
          >
            <div
              className="h-72 bg-cover bg-center relative"
              style={{ backgroundImage: `url(${selectedEvent.image})` }}
            >
              <div className="absolute inset-0 bg-renaissance-dark/20 backdrop-blur-[1px]"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
            </div>
            <div className="p-10 relative">
              <h2 className="text-4xl font-milanesa font-black uppercase mb-2 leading-tight">
                {selectedEvent.title}
              </h2>
              {selectedEvent.subtitle && (
                <p className="text-renaissance-gold font-bold text-sm uppercase tracking-widest mb-6">
                  {selectedEvent.subtitle}
                </p>
              )}
              <p className="text-gray-600 font-body leading-relaxed mb-8 italic">
                {selectedEvent.description}
              </p>

              <div className="flex justify-between items-center pt-8 border-t border-gray-100">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                  June 12 | 13 | 14, 2025
                </div>
                <button
                  className="px-8 py-2 bg-renaissance-burgundy text-renaissance-gold font-milanesa font-bold uppercase text-xs rounded-full hover:bg-renaissance-gold hover:text-renaissance-burgundy transition-all"
                  onClick={() => setSelectedEvent(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
