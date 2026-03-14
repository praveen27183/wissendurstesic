import { useState, useEffect } from 'react';
import { UtensilsCrossed, Hotel } from "lucide-react";
import HeroSection from '../components/herosection';

const FoodAccommodation = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Automatically hide intro after 8 seconds
    const timer = setTimeout(() => setShowIntro(false), 8000);
    return () => clearTimeout(timer);
  }, []);
  const listStyle =
    "flex items-start gap-3 text-sm md:text-base leading-relaxed";
  const dotStyle =
    "mt-2 w-2 h-2 bg-renaissance-gold rounded-full flex-shrink-0";

  if (showIntro) {
    return (
      <div
        className="fixed inset-0 z-[100] bg-black flex items-center justify-center p-4 cursor-pointer"
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
            <span className="text-outline w-full block">A PROMISE OF</span>
            <span className="text-fill-anim delay-1 w-full block py-1">COMFORT.</span>
            <span className="text-outline w-full block mt-3 sm:mt-4 md:mt-5">FROM WARM MEALS</span>
            <span className="text-fill-anim delay-2 w-full block pb-1">TO SAFE STAY,</span>
            <span className="text-outline w-full block mt-3 sm:mt-4 md:mt-5">EVERY ARRANGEMENT</span>
            <span className="text-outline w-full block">MADE FOR</span>
            <span className="text-fill-anim delay-2 w-full block pb-1">YOU.</span>
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
    <div className="min-h-screen w-full bg-[#1b120c] text-[#FBF1CF] font-body overflow-x-hidden">

      {/* HERO */}
      <HeroSection 
        title="FOOD & ACCOMMODATION"
        subtitle="A PROMISE OF COMFORT"
        description="Essential information about meals and stay arrangements during Wissendurst 2026."
        image="/asset/hero_sec_for_all/food_and_accomodation.png"
      />

      {/* MAIN CONTENT */}
      <section
        className="py-16 md:py-24 px-5 relative"
      >
        <div className="absolute inset-0 bg-[#1b120c]/80 -z-10 bg-[url('https://www.transparenttextures.com/patterns/staged-paper.png')] mix-blend-overlay opacity-30"></div>
        <div className="max-w-6xl mx-auto space-y-20 relative z-10">

          {/* FOOD SECTION */}
          <div className="bg-[#140c07] border border-renaissance-gold/30 rounded-2xl shadow-xl p-6 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-renaissance-gold/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-10 border-b border-renaissance-gold/20 pb-6">
                <h2 className="text-3xl md:text-5xl font-milanesa font-black text-transparent bg-clip-text bg-gradient-to-r from-renaissance-gold to-[#FBF1CF]">
                  FOOD
                </h2>

                <UtensilsCrossed className="text-renaissance-gold w-8 h-8 md:w-10 md:h-10" />
              </div>

              {/* FOOD INFO */}
              <div className="space-y-4 mb-10">

                <div className={listStyle}>
                  <div className={dotStyle}></div>
                  Lunch will be available on all 3 days inside the college campus.
                </div>

                <div className={listStyle}>
                  <div className={dotStyle}></div>
                  Lunch is included only for the MUN event registration.
                </div>

                <div className={listStyle}>
                  <div className={dotStyle}></div>
                  Both vegetarian and non-vegetarian options are available.
                </div>

                <div className={listStyle}>
                  <div className={dotStyle}></div>
                  Lunch Timing :{" "}
                  <span className="text-renaissance-gold font-bold ml-2">
                    12:00 PM – 2:00 PM
                  </span>
                </div>
              </div>

              {/* Menu Grid */}
              <div className="grid lg:grid-cols-2 gap-8 mb-16">

                {/* Vegetarian Menu */}
                <div className="bg-[#1b120c]/80 border border-green-800/20 rounded-2xl p-6 md:p-8 shadow-lg hover:border-green-800/40 transition-colors backdrop-blur-sm relative overflow-hidden group">
                  <div className="absolute inset-0 bg-green-900/5 group-hover:bg-green-900/10 transition-colors"></div>
                  <div className="relative z-10">
                    <div className="flex justify-between items-center mb-8 border-b border-green-800/20 pb-4">
                      <h3 className="text-2xl font-black text-green-500 uppercase tracking-widest font-title">Vegetarian</h3>
                      <p className="bg-green-900/30 text-green-400 border border-green-800/30 font-black px-4 py-2 rounded-full text-lg shadow-sm">₹ 250 <span className="text-[10px] uppercase tracking-widest font-medium opacity-80">/day</span></p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-bold text-[#FBF1CF]/50 text-xs mb-2 tracking-[0.2em] uppercase">Day 1 Menu</h4>
                        <p className="font-bold text-[#FBF1CF]/90 text-[15px] leading-relaxed">Kesari, Veg Dum Biryani, Gobi-65, Roti, Paneer Curry, Curd Rice, Mango Pickle</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#FBF1CF]/50 text-xs mb-2 tracking-[0.2em] uppercase">Day 2 Menu</h4>
                        <p className="font-bold text-[#FBF1CF]/90 text-[15px] leading-relaxed">Gulab Jaamun, Peas Pulao, Baby Corn 65, Parotta, Veg Curry</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#FBF1CF]/50 text-xs mb-2 tracking-[0.2em] uppercase">Day 3 Menu</h4>
                        <p className="font-bold text-[#FBF1CF]/90 text-[15px] leading-relaxed">Pineapple Kesari, Veg Biryani, Veg Manchurian, Chapati, Gobi Curry, Curd Rice, Mango Pickle</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Non-Vegetarian Menu */}
                <div className="bg-[#1b120c]/80 border border-red-800/20 rounded-2xl p-6 md:p-8 shadow-lg hover:border-red-800/40 transition-colors backdrop-blur-sm relative overflow-hidden group">
                  <div className="absolute inset-0 bg-red-900/5 group-hover:bg-red-900/10 transition-colors"></div>
                  <div className="relative z-10">
                    <div className="flex justify-between items-center mb-8 border-b border-red-800/20 pb-4">
                      <h3 className="text-2xl font-black text-red-500 uppercase tracking-widest font-title">Non-Vegetarian</h3>
                      <p className="bg-red-900/30 text-red-400 border border-red-800/30 font-black px-4 py-2 rounded-full text-lg shadow-sm">₹ 260 <span className="text-[10px] uppercase tracking-widest font-medium opacity-80">/day</span></p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-bold text-[#FBF1CF]/50 text-xs mb-2 tracking-[0.2em] uppercase">Day 1 Menu</h4>
                        <p className="font-bold text-[#FBF1CF]/90 text-[15px] leading-relaxed">Chicken Masaledar Biryani, Raita, Salan</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#FBF1CF]/50 text-xs mb-2 tracking-[0.2em] uppercase">Day 2 Menu</h4>
                        <p className="font-bold text-[#FBF1CF]/90 text-[15px] leading-relaxed">Chicken Achari Biryani, Raita, Salan</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#FBF1CF]/50 text-xs mb-2 tracking-[0.2em] uppercase">Day 3 Menu</h4>
                        <p className="font-bold text-[#FBF1CF]/90 text-[15px] leading-relaxed">Chicken IPL Biryani, Raita, Salan</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Contacts & CTA */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-sm">
                <div>
                  <p className="text-xs font-title font-bold text-renaissance-gold uppercase tracking-[0.2em] mb-4">For any queries, contact:</p>
                  <div className="flex flex-col sm:flex-row gap-6">
                    <p className="font-black text-sm uppercase flex items-center gap-2">
                      ADARSH :
                      <a href="tel:8590765094" className="font-bold text-[#FBF1CF] hover:text-renaissance-gold transition-colors underline underline-offset-4 decoration-2 px-2 py-1 bg-white/5 rounded">85907 65094</a>
                    </p>
                    <p className="font-black text-sm uppercase flex items-center gap-2">
                      PRATYUSH :
                      <a href="tel:8903088587" className="font-bold text-[#FBF1CF] hover:text-renaissance-gold transition-colors underline underline-offset-4 decoration-2 px-2 py-1 bg-white/5 rounded">89030 88587</a>
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ACCOMMODATION TITLE AND INFO */}
          <div className="bg-[#140c07] border border-renaissance-gold/30 rounded-2xl p-6 md:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FBF1CF]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-10 border-b border-renaissance-gold/20 pb-6">
                <h2 className="text-3xl md:text-5xl font-milanesa font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FBF1CF] to-renaissance-gold">
                  ACCOMMODATION
                </h2>

                <Hotel className="text-renaissance-gold w-8 h-8" />
              </div>

              <div className="space-y-6 text-sm md:text-base text-[#FBF1CF]/90 max-w-3xl">

                <p>
                  Accommodation will <span className="text-renaissance-gold font-bold">
                    NOT
                  </span> be provided by ESIC Medical College for participants.
                </p>

                <p>
                  Participants are requested to arrange their own stay.
                </p>

                <div className="bg-renaissance-gold/10 border-l-4 border-renaissance-gold p-5 rounded">
                  Nearby hostels, PG accommodations, and hotels will be shared
                  through WhatsApp after filling the assistance form.
                </div>

              </div>

              {/* CONTACT AND ASSISTANCE CTA */}
              <div className="mt-12 pt-8 border-t border-renaissance-gold/10 flex flex-col md:flex-row gap-8 md:items-center md:justify-between relative z-10">

                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-widest text-renaissance-gold/80 font-bold border-b border-renaissance-gold/10 pb-2 inline-block">
                    Accommodation Incharges
                  </p>

                  <div className="flex flex-col sm:flex-row gap-6">
                    <p className="font-black text-sm uppercase flex items-center gap-2">
                      AFLAHA T :
                      <a href="tel:8281757052" className="text-renaissance-gold hover:text-white transition-colors bg-white/5 px-2 py-1 rounded">
                        82817 57052
                      </a>
                    </p>

                    <p className="font-black text-sm uppercase flex items-center gap-2">
                      ARAVIND C :
                      <a href="tel:9489544801" className="text-renaissance-gold hover:text-white transition-colors bg-white/5 px-2 py-1 rounded">
                        94895 44801
                      </a>
                    </p>
                  </div>
                </div>

                <button className="px-8 py-4 border-2 border-renaissance-gold bg-renaissance-gold/10 text-renaissance-gold font-black uppercase text-sm tracking-widest rounded-full hover:scale-105 hover:bg-renaissance-gold hover:text-black transition-all shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                  Request Assistance
                </button>

              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default FoodAccommodation;