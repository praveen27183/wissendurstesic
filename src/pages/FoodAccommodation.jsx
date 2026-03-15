import { useState, useEffect } from "react";
import { UtensilsCrossed, Hotel } from "lucide-react";
import HeroSection from "../components/herosection";
import Galaxy from "../components/Galaxy.jsx";

const FoodAccommodation = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  const listStyle =
    "flex items-start gap-4 text-sm md:text-base text-white/90 leading-relaxed";

  const dotStyle =
    "mt-2 w-2.5 h-2.5 bg-st-red rounded-full shadow-[0_0_10px_rgba(255,0,60,0.7)]";

  /* ================= INTRO ================= */

  if (showIntro) {
    return (
      <div
        className="fixed inset-0 z-[100] bg-black flex items-center justify-center p-4 cursor-pointer"
        onClick={() => setShowIntro(false)}
      >
        <style
          dangerouslySetInnerHTML={{
            __html: `
            .text-outline{
              color:transparent;
              -webkit-text-stroke:1px rgba(255,255,255,0.4);
            }
            .text-fill-anim{
              color:transparent;
              -webkit-text-stroke:1px rgba(255,255,255,0.6);
              background:linear-gradient(to right, white 50%, transparent 50%);
              background-size:200% 100%;
              background-position:100% 0;
              -webkit-background-clip:text;
              background-clip:text;
              animation:fillText 2.5s cubic-bezier(0.4,0,0.2,1) forwards;
            }
            .delay-1{animation-delay:0.5s;}
            .delay-2{animation-delay:0.8s;}

            @keyframes fillText{
              100%{background-position:0 0;}
            }
          `,
          }}
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&display=swap"
          rel="stylesheet"
        />

        <div
          className="text-center flex flex-col items-center"
          style={{ fontFamily: "Cinzel, serif" }}
        >
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold uppercase tracking-wide flex flex-col gap-2">
            <span className="text-outline">A PROMISE OF</span>
            <span className="text-fill-anim delay-1">COMFORT</span>
            <span className="text-outline mt-6">FROM WARM MEALS</span>
            <span className="text-fill-anim delay-2">TO SAFE STAY</span>
            <span className="text-outline mt-6">EVERY ARRANGEMENT</span>
            <span className="text-fill-anim delay-2">MADE FOR YOU</span>
          </h1>
        </div>

        <div className="absolute bottom-10 text-white/80 text-sm tracking-widest animate-pulse">
          Click anywhere to continue →
        </div>
      </div>
    );
  }

  /* ================= PAGE ================= */

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">

      {/* HERO */}
      <HeroSection
        title="FOOD & ACCOMMODATION"
        subtitle="A PROMISE OF COMFORT"
        description="Essential information about meals and stay arrangements during Wissendurst 2026."
        image="/asset/hero_sec_for_all/food_and_accomodation.png"
      />

      {/* Galaxy Background layer */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <Galaxy 
          starSpeed={0.2}
          density={1.2}
          hueShift={140}
          speed={0.8}
          transparent
        />
      </div>

      <section className="py-16 md:py-24 px-5 relative z-10">

        <div className="max-w-6xl mx-auto space-y-20">

          {/* ================= FOOD ================= */}

          <div className="bg-black/70 border border-st-red/30 rounded-3xl p-8 md:p-14 backdrop-blur-md shadow-xl">

            <div className="flex items-center gap-4 mb-10 border-b border-st-red/20 pb-6">

              <UtensilsCrossed className="text-st-red w-8 h-8 md:w-10 md:h-10" />

              <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-st-red to-white">
                FOOD
              </h2>

            </div>

            {/* FOOD INFO */}

            <div className="space-y-4 mb-12">

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
                Lunch Timing :
                <span className="text-st-red font-bold ml-2">
                  12:00 PM – 2:00 PM
                </span>
              </div>

            </div>

            {/* MENU GRID */}

            <div className="grid lg:grid-cols-2 gap-10">

              {/* VEG */}

              <div className="bg-black/60 border border-green-600/30 rounded-2xl p-5 sm:p-7 md:p-9 backdrop-blur-md hover:border-green-500 hover:shadow-[0_0_25px_rgba(34,197,94,0.25)] transition-all group">

                <div className="flex flex-col sm:flex-row justify-between sm:items-center items-start gap-4 mb-8 border-b border-green-600/20 pb-4">
                  <h3 className="text-xl sm:text-2xl font-black text-green-500 uppercase tracking-widest">
                    Vegetarian
                  </h3>
                  <div className="flex items-center gap-2 sm:gap-3 bg-[rgba(34,197,94,0.1)] px-4 sm:px-5 py-2 rounded-full border border-green-500/30 shadow-[0_0_15px_rgba(34,197,94,0.15)] group-hover:border-green-500/60 transition-all duration-500 shrink-0">
                    <span className="text-green-500 font-black text-lg sm:text-xl tracking-tight">₹250</span>
                    <span className="text-green-500/40 text-[9px] sm:text-[10px] uppercase tracking-widest font-black">/ day</span>
                  </div>
                </div>

                <div className="space-y-6">

                  <div>
                    <h4 className="text-xs text-white/50 uppercase tracking-widest mb-2">
                      Day 1
                    </h4>
                    <p>Kesari, Veg Dum Biryani, Gobi-65, Roti, Paneer Curry, Curd Rice</p>
                  </div>

                  <div>
                    <h4 className="text-xs text-white/50 uppercase tracking-widest mb-2">
                      Day 2
                    </h4>
                    <p>Gulab Jamun, Peas Pulao, Baby Corn 65, Parotta, Veg Curry</p>
                  </div>

                  <div>
                    <h4 className="text-xs text-white/50 uppercase tracking-widest mb-2">
                      Day 3
                    </h4>
                    <p>Pineapple Kesari, Veg Biryani, Veg Manchurian, Chapati</p>
                  </div>

                </div>

              </div>

              {/* NON VEG */}

              <div className="bg-black/60 border border-red-600/30 rounded-2xl p-5 sm:p-7 md:p-9 backdrop-blur-md hover:border-red-500 hover:shadow-[0_0_25px_rgba(255,0,60,0.25)] transition-all group">

                <div className="flex flex-col sm:flex-row justify-between sm:items-center items-start gap-4 mb-8 border-b border-red-600/20 pb-4">
                  <h3 className="text-xl sm:text-2xl font-black text-red-500 uppercase tracking-widest">
                    Non-Vegetarian
                  </h3>
                  <div className="flex items-center gap-2 sm:gap-3 bg-[rgba(255,0,60,0.1)] px-4 sm:px-5 py-2 rounded-full border border-st-red/30 shadow-[0_0_15px_rgba(255,0,60,0.15)] group-hover:border-st-red/60 transition-all duration-500 shrink-0">
                    <span className="text-st-red font-black text-lg sm:text-xl tracking-tight">₹260</span>
                    <span className="text-st-red/40 text-[9px] sm:text-[10px] uppercase tracking-widest font-black">/ day</span>
                  </div>
                </div>

                <div className="space-y-6">

                  <div>
                    <h4 className="text-xs text-white/50 uppercase tracking-widest mb-2">
                      Day 1
                    </h4>
                    <p>Chicken Masaledar Biryani, Raita, Salan</p>
                  </div>

                  <div>
                    <h4 className="text-xs text-white/50 uppercase tracking-widest mb-2">
                      Day 2
                    </h4>
                    <p>Chicken Achari Biryani, Raita, Salan</p>
                  </div>

                  <div>
                    <h4 className="text-xs text-white/50 uppercase tracking-widest mb-2">
                      Day 3
                    </h4>
                    <p>Chicken IPL Biryani, Raita, Salan</p>
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* ================= ACCOMMODATION ================= */}

          <div className="bg-black/70 border border-st-red/30 rounded-3xl p-8 md:p-14 backdrop-blur-md shadow-xl">

            <div className="flex items-center gap-4 mb-10 border-b border-st-red/20 pb-6">

              <Hotel className="text-st-red w-8 h-8" />

              <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-st-red">
                ACCOMMODATION
              </h2>

            </div>

            <div className="space-y-6 text-white/90 max-w-3xl">

              <p>
                Accommodation will{" "}
                <span className="text-st-red font-bold">NOT</span> be provided
                by ESIC Medical College.
              </p>

              <p>Participants must arrange their own stay.</p>

              <div className="bg-st-red/10 border-l-4 border-st-red p-5 rounded">
                Nearby hostels, PG accommodations, and hotels will be shared
                through WhatsApp after filling the assistance form.
              </div>

            </div>

            {/* CONTACT */}

            <div className="mt-12 flex flex-col md:flex-row gap-8 md:items-center md:justify-between">

              <div>

                <p className="text-xs uppercase tracking-widest text-st-red mb-4">
                  Accommodation Incharges
                </p>

                <div className="flex gap-6">

                  <a
                    href="tel:8281757052"
                    className="text-white hover:text-st-red transition"
                  >
                    AFLAHA T : 82817 57052
                  </a>

                  <a
                    href="tel:9489544801"
                    className="text-white hover:text-st-red transition"
                  >
                    ARAVIND C : 94895 44801
                  </a>

                </div>

              </div>

              <button className="px-8 py-4 border-2 border-st-red text-st-red font-bold uppercase text-sm tracking-widest rounded-full hover:bg-st-red hover:text-black transition-all">
                Request Assistance
              </button>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default FoodAccommodation;