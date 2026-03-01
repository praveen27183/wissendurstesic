import { Tag, Users } from 'lucide-react';
import { offers } from '../data/dummyData';

const Offers = () => {
  const sectionStyle = "bg-white p-8 md:p-12 border-4 border-renaissance-gold/20 shadow-2xl relative mb-20";
  const ruleStyle = "flex items-start gap-3 mb-4 text-sm md:text-base leading-relaxed pl-2 relative italic";
  const dotStyle = "mt-2.5 w-1.5 h-1.5 bg-renaissance-gold rounded-full flex-shrink-0";

  return (
    <div className="min-h-screen font-body bg-renaissance-cream/30 text-renaissance-dark">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] flex items-center justify-center bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1318439872-pexels-photo-3184398.jpeg?auto=format&fit=crop&q=80&w=1920&h=1080')`, backgroundAttachment: 'fixed' }}
      >
        <div className="absolute inset-0 bg-renaissance-dark/60"></div>
        <h1 className="relative z-10 text-6xl md:text-8xl font-title font-black text-white tracking-widest uppercase mb-4 drop-shadow-2xl">
          SPECIAL OFFERS
        </h1>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-24">
        {/* Individual Combo Offers */}
        <section className={sectionStyle}>
          <h2 className="text-4xl font-title font-black text-center mb-16 uppercase tracking-tight border-b-2 border-renaissance-gold/30 pb-4">
            Combo Offers For Individuals
          </h2>

          <div className="space-y-4">
            {offers.individual.map((offer) => (
              <div key={offer.id} className="group p-6 bg-renaissance-cream/20 border border-renaissance-gold/10 hover:border-renaissance-gold transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <h4 className="text-lg font-title font-black text-renaissance-burgundy uppercase leading-none mb-2">
                      {offer.title}
                    </h4>
                    <p className="text-xs text-gray-500 italic uppercase font-bold tracking-widest">{offer.description}</p>
                  </div>
                  <div className="flex items-center gap-6 group-hover:scale-105 transition-transform">
                    <div className="text-right">
                      <p className="text-xs text-gray-400 line-through font-bold">₹{offer.originalPrice}</p>
                      <p className="text-3xl font-title font-black text-renaissance-dark tracking-tighter">₹{offer.discountedPrice}</p>
                    </div>
                    <Tag className="w-8 h-8 text-renaissance-gold" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Rules for Individual Combo */}
          <div className="mt-20 pt-12 border-t border-renaissance-gold/20">
            <h3 className="text-2xl font-title font-bold mb-8 uppercase tracking-widest text-renaissance-burgundy">Rules And Regulations:</h3>
            <div className="space-y-2">
              <div className={ruleStyle}>
                <div className={dotStyle}></div>
                Thinking of joining more than one workshop? We've got special combo offers just for you!
              </div>
              <div className={ruleStyle}>
                <div className={dotStyle}></div>
                This year, you can sign up for combo offers using a <span className="text-renaissance-gold font-bold">single, dedicated form</span> — just click the "Combo Registration" button on the offers page. No need to fill out multiple forms!
              </div>
              <div className={ruleStyle}>
                <div className={dotStyle}></div>
                Before you do anything, please make sure to contact <span className="text-renaissance-gold font-bold">RAM YOGESH at 9962939599</span>. It's important to check in with him first before proceeding with the form or payment.
              </div>
              <div className={ruleStyle}>
                <div className={dotStyle}></div>
                Payments must be made <span className="text-renaissance-gold font-bold">only using the QR code provided in the combo form</span>. Don't forget to upload a screenshot of your payment when filling out the form.
              </div>
              <div className={ruleStyle}>
                <div className={dotStyle}></div>
                Once you've registered using our combo offer, <span className="text-renaissance-burgundy font-black uppercase">the selection can't be changed or cancelled</span>, so double-check before submitting!
              </div>
            </div>
            <div className="mt-12 text-center">
              <button className="px-12 py-3 bg-renaissance-burgundy text-renaissance-gold border-2 border-renaissance-gold rounded-full font-title font-bold uppercase tracking-widest hover:bg-renaissance-gold hover:text-renaissance-burgundy transition-all duration-300 shadow-xl">
                COMBO REGISTRATION
              </button>
            </div>
          </div>
        </section>

        {/* Group Offers Section */}
        <section className="bg-renaissance-dark p-10 md:p-16 text-white relative shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <div className="absolute top-4 right-4 text-renaissance-gold opacity-10"><Users size={120} /></div>

          <h2 className="text-5xl font-title font-black mb-12 uppercase tracking-tighter text-renaissance-gold">Group Offers</h2>

          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            {/* Group of 3 */}
            <div>
              <h3 className="text-xl font-title font-bold text-renaissance-gold mb-6 border-b border-renaissance-gold/30 pb-2 flex items-center gap-2">
                <Users size={18} /> Group of 3 Offers:
              </h3>
              <div className="space-y-6">
                {offers.group3.map(o => (
                  <div key={o.id} className="border-l-2 border-renaissance-gold/50 pl-4 py-1">
                    <p className="font-title font-bold text-white uppercase tracking-tight">{o.title}</p>
                    <p className="text-xs text-gray-400 font-bold">
                      <span className="line-through">₹{o.originalPrice}</span> → <span className="text-renaissance-gold">₹{o.originalPrice}</span>
                      <span className="ml-2 font-normal italic opacity-60">({o.perPerson}/person)</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Group of 4 */}
            <div>
              <h3 className="text-xl font-title font-bold text-renaissance-gold mb-6 border-b border-renaissance-gold/30 pb-2 flex items-center gap-2">
                <Users size={18} /> Group of 4 Offers:
              </h3>
              <div className="space-y-6">
                {offers.group4.map(o => (
                  <div key={o.id} className="border-l-2 border-renaissance-gold/50 pl-4 py-1">
                    <p className="font-title font-bold text-white uppercase tracking-tight">{o.title}</p>
                    <p className="text-xs text-gray-400 font-bold">
                      <span className="line-through">₹{o.originalPrice}</span> → <span className="text-renaissance-gold">₹{o.originalPrice}</span>
                      <span className="ml-2 font-normal italic opacity-60">({o.perPerson}/person)</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Group Rules */}
          <div className="mt-20 pt-12 border-t border-white/10 italic">
            <h3 className="text-2xl font-title font-bold mb-8 uppercase tracking-widest text-renaissance-gold">Rules And Regulations:</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm text-gray-300">
                <div className="mt-1.5 w-1 h-1 bg-renaissance-gold flex-shrink-0"></div>
                Coming with friends? Great! We have special offers for <span className="text-white font-bold">groups of 3 and 4 participants</span>.
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-300">
                <div className="mt-1.5 w-1 h-1 bg-renaissance-gold flex-shrink-0"></div>
                Each group member will register individually by clicking the <span className="text-white font-bold underline">"Register Now"</span> button on the respective workshop pages.
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-300">
                <div className="mt-1.5 w-1 h-1 bg-renaissance-gold flex-shrink-0"></div>
                <span className="text-renaissance-gold font-black uppercase not-italic">Before starting</span> the registration process, one member of the group must contact <span className="text-white font-bold">RAM YOGESH at 9962939599</span>.
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-300">
                <div className="mt-1.5 w-1 h-1 bg-renaissance-gold flex-shrink-0"></div>
                After confirmation, a <span className="text-white font-bold underline">single bulk payment</span> should be made for the entire group.
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-300">
                <div className="mt-1.5 w-1 h-1 bg-renaissance-gold flex-shrink-0"></div>
                Once submitted, registrations <span className="text-renaissance-gold font-black uppercase not-italic underline">cannot be edited or canceled</span>.
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Offers;
