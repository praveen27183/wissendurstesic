import { UtensilsCrossed, Hotel } from 'lucide-react';

const FoodAccommodation = () => {
  const listStyle = "flex items-start gap-3 mb-4 text-sm md:text-base leading-relaxed pl-2 relative";
  const dotStyle = "mt-2.5 w-1.5 h-1.5 bg-renaissance-gold rounded-full flex-shrink-0";

  return (
    <div className="min-h-screen font-body bg-white text-renaissance-dark">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&q=80&w=1920&h=1080')`, backgroundAttachment: 'fixed' }}
      >
        <div className="absolute inset-0 bg-renaissance-dark/65"></div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-title font-black text-white tracking-[0.05em] uppercase mb-8 leading-tight">
            FOOD AND ACCOMMODATION
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-2 bg-renaissance-burgundy text-renaissance-gold border border-renaissance-gold rounded-full font-title font-bold uppercase text-xs hover:bg-renaissance-gold hover:text-renaissance-burgundy transition-all">
              AVAIL FOOD
            </button>
            <button className="px-8 py-2 bg-renaissance-burgundy text-renaissance-gold border border-renaissance-gold rounded-full font-title font-bold uppercase text-xs hover:bg-renaissance-gold hover:text-renaissance-burgundy transition-all">
              AVAIL ACCOMMODATION
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto space-y-32">

          {/* Food Section */}
          <div className="relative p-1 border-4 border-renaissance-gold/20">
            <div className="bg-white p-10 md:p-16 relative">
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-5xl md:text-6xl font-title font-black tracking-tighter">FOOD</h2>
                <div className="flex gap-4 items-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Mani%27s_Dum_Biryani_logo.png/150px-Mani%27s_Dum_Biryani_logo.png" alt="Mani's Logo" className="h-10 opacity-70 grayscale" />
                  <div className="h-10 w-24 bg-gray-100 flex items-center justify-center font-bold text-gray-400 text-xs italic">ADB Logo</div>
                </div>
              </div>

              <div className="space-y-2 mb-12 italic">
                <div className={listStyle}>
                  <div className={dotStyle}></div>
                  Lunch will be made available on all 3 days within the college campus.
                </div>
                <div className={listStyle}>
                  <div className={dotStyle}></div>
                  Both vegetarian and non-vegetarian options will be available. (<a href="#" className="text-renaissance-gold font-bold underline">Click here</a> to view the menu)
                </div>
                <div className={listStyle}>
                  <div className={dotStyle}></div>
                  Timings : <span className="font-bold text-renaissance-burgundy">12 PM to 2 PM</span>
                </div>
              </div>

              <div className="grid md:grid-cols-[1fr_200px] gap-8 items-end">
                <div className="space-y-4 text-sm">
                  <p className={listStyle}>
                    <div className={dotStyle}></div>
                    Cost: <span className="text-renaissance-gold font-bold mx-2">Vegetarian:</span> Rs. <span className="font-black text-lg">240/-</span> per person per day
                  </p>
                  <p className={listStyle + " pl-10"}>
                    <span className="text-renaissance-gold font-bold mx-2">Non Vegetarian:</span> Rs. <span className="font-black text-lg">260/-</span> per person per day
                  </p>
                  <p className={listStyle + " mt-8 opacity-70"}>
                    <div className={dotStyle}></div>
                    On successful completion of payment and submission of google form, a food token can be collected on the day of the event.
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-title font-bold text-renaissance-gold border-b border-renaissance-gold pb-1 mb-2">STUDENT INCHARGES</p>
                  <p className="text-xs uppercase font-black">AADINARAYAN C : <a href="tel:6238381469" className="underline font-normal text-[10px]">6238381469</a></p>
                  <p className="text-xs uppercase font-black">NIKHIL B R : <a href="tel:7306544908" className="underline font-normal text-[10px]">7306544908</a></p>
                </div>
              </div>

              <div className="mt-12 text-center">
                <button className="px-10 py-3 bg-renaissance-burgundy text-renaissance-gold border-2 border-renaissance-gold rounded-full font-title font-bold uppercase tracking-widest hover:bg-renaissance-gold hover:text-renaissance-burgundy transition-all duration-300">
                  AVAIL FOOD
                </button>
              </div>
            </div>
          </div>

          {/* Accomodation Section */}
          <div className="bg-renaissance-cream p-12 md:p-16 border-l-[16px] border-renaissance-gold relative shadow-xl">
            <h2 className="text-5xl md:text-6xl font-title font-black tracking-tighter mb-12 text-renaissance-dark">ACCOMODATION</h2>

            <div className="space-y-8 italic">
              <div className={listStyle}>
                <div className={dotStyle}></div>
                Rooms will be provided on a first come first serve sharing basis in the ESIC hostel for stay.
              </div>
              <div className={listStyle}>
                <div className={dotStyle}></div>
                Cost: Rs. <span className="font-black text-2xl text-renaissance-burgundy ml-2">150</span> per day per person.
              </div>

              <div className="bg-white/40 p-6 rounded-sm border-l-2 border-renaissance-burgundy/20 mt-12">
                <p className="mb-4 text-sm leading-relaxed">For those who need access to the rooms and washrooms only in the morning to refresh before your event, please complete the form below.</p>
                <p className={listStyle}>
                  <div className={dotStyle}></div>
                  Cost: Rs. <span className="font-black text-2xl text-renaissance-burgundy ml-2">50</span> per person per day
                </p>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-renaissance-dark/10 grid md:grid-cols-[1fr_200px] gap-8 items-end">
              <div className="text-left font-title">
                <p className="font-bold text-renaissance-gold uppercase tracking-widest mb-4">STUDENT INCHARGES</p>
                <div className="flex flex-col gap-1 text-sm font-black">
                  <p>VISHAL V : <a href="tel:9098818496" className="font-normal text-xs underline">9098818496</a></p>
                  <p>ASHIKA P : <a href="tel:6383548591" className="font-normal text-xs underline">6383548591</a></p>
                </div>
              </div>
              <div className="text-right">
                <button className="px-10 py-3 bg-renaissance-burgundy text-renaissance-gold border-2 border-renaissance-gold rounded-full font-title font-bold uppercase tracking-widest hover:bg-renaissance-gold hover:text-renaissance-burgundy transition-all duration-300">
                  AVAIL ACCOMODATION
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
