import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Users, CreditCard, HelpCircle, ArrowRight } from "lucide-react";
import HeroSection from "../components/herosection";

const GROUP_REGISTER_LINK = "https://forms.gle/iiZ968xS8xvdM6st6";
const INDIVIDUAL_REGISTER_LINK = "https://forms.gle/2x74U3DQgzsWmzaz8";

const OfferCard = ({ title, items, link, type = "individual", price, originalPrice }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="relative group p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg hover:border-red-500/50 transition-all duration-500 h-full flex flex-col"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-red-800/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    <div className="relative z-10 flex flex-col h-full">
      <div className="flex flex-col gap-2 mb-8">
        <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
          {title}
        </h3>
        {price && (
          <div className="flex items-center gap-4 mt-2">
            <span className="text-3xl md:text-4xl font-black text-red-500">
              ₹{price}
            </span>
            {originalPrice && (
              <span className="text-lg text-gray-500 line-through italic font-normal">
                ₹{originalPrice}
              </span>
            )}
          </div>
        )}
      </div>

      <div className="flex-grow space-y-4 md:space-y-6 mb-8 md:mb-10">
        {items.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-1.5 md:gap-2">
            <div className="flex items-start gap-3 md:gap-4 text-white text-base md:text-xl font-medium">
              <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-red-500 shrink-0 mt-1" />
              <span className="leading-snug">{typeof item === 'string' ? item : item.text}</span>
            </div>
            {typeof item === 'object' && item.originalPrice && (
              <span className="ml-8 md:ml-10 text-lg md:text-xl text-gray-500 line-through italic font-normal">
                 {item.originalPrice}
              </span>
            )}
          </div>
        ))}
      </div>



      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-full py-4 md:py-5 px-6 md:px-8 rounded-2xl text-lg md:text-xl font-black bg-gradient-to-r from-red-600 to-red-800 text-white hover:shadow-[0_0_25px_rgba(220,38,38,0.5)] transition-all duration-300 transform hover:scale-[1.02]"
      >
        Register Now
        <ArrowRight className="ml-3 md:ml-4 w-5 h-5 md:w-6 md:h-6 text-white" />
      </a>
    </div>
  </motion.div>
);
// above is group offer card
const SectionHeader = ({ title, subtitle }) => (
  <div className="mb-16 text-center max-w-5xl mx-auto px-4">
    <h2 className="text-4xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500 uppercase tracking-tight mb-6">
      {title}
    </h2>
    <p className="text-xl md:text-3xl text-red-500 font-black tracking-wide leading-relaxed">
      {subtitle}
    </p>
  </div>
);


const RulesBox = ({ title, rules }) => (
  <div className="mt-16 p-6 md:p-14 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md">
    <div className="flex items-center gap-2 mb-8 text-2xl md:text-4xl font-black text-white justify-center md:justify-start">
      <h3>{title}</h3>
    </div>
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {rules.map((rule, idx) => (
        <li key={idx} className="flex items-start gap-5 text-gray-200 text-lg md:text-xl leading-relaxed">
          <div className="w-2.5 h-2.5 rounded-full bg-red-600 mt-2.5 shrink-0" />
          {rule}
        </li>
      ))}
    </ul>
  </div>
);

const Offers = () => {
  const [showIntro, setShowIntro] = useState(true);

  const comboOffers = [
    { title: "General Surgery + Ortho", price: "2500", originalPrice: "3000", items: ["Full access to General Surgery workshop", "Orthopaedics hands-on session"] },
    { title: "General Surgery + Patho", price: "2000", originalPrice: "2400", items: ["Full access to General Surgery", "Advanced Pathology session"] },
    { title: "OBG + Paediatrics", price: "1500", originalPrice: "2000", items: ["Comprehensive OBG workshop", "Paediatrics clinical cases"] },
    { title: "ENT + Ophthalmology", price: "2000", originalPrice: "2900", items: ["ENT surgical techniques", "Ophthalmology diagnostics"] },
    { title: "Microbiology + General Medicine", price: "1200", originalPrice: "1600", items: ["Full access to Microbiology workshop", "General Medicine clinical cases"] },
    { title: "Psychiatry + FM Crime Scene", price: "1100", originalPrice: "1600", items: ["Full access to Psychiatry workshop", "FM Crime Scene session"] },
    { title: "Psychiatry + Microbiology", price: "700", originalPrice: "1200", items: ["Full access to Psychiatry workshop", "Advanced Microbiology session"] },
  ];



  const groupOffers = [
    {
      title: "Orthopaedics",
      items: [
        { text: "Group of 3: ₹3000 (₹1000/head)", originalPrice: "₹3900" },
        { text: "Group of 4: ₹3600 (₹900/head)", originalPrice: "₹5200" }
      ],
      link: GROUP_REGISTER_LINK
    },

    {
      title: "Pathology",
      items: [
        { text: "Group of 3: ₹1500 (₹500/head)", originalPrice: "₹2100" }, 
        { text: "Group of 4: ₹1800 (₹450/head)", originalPrice: "₹2800" } 
      ],
      link: GROUP_REGISTER_LINK
    },

    {
      title: "Ophthalmology",
      items: [
        { text: "Group of 3: ₹3000 (₹1000/head)", originalPrice: "₹4350" }, 
        { text: "Group of 4: ₹3400 (₹850/head)", originalPrice: "₹5800" } 
      ],
      link: GROUP_REGISTER_LINK
    },

    {
      title: "Microbiology",
      items: [
        { text: "Group of 3: ₹1000 (₹333/head)", originalPrice: "₹1800" }, 
        { text: "Group of 4: ₹1200 (₹300/head)", originalPrice: "₹2400" } 
      ],
      link: GROUP_REGISTER_LINK
    },

    {
      title: "FM Crime Scene",
      items: [
        { text: "Group of 3: ₹2400 (₹800/head)", originalPrice: "₹3000" },
        { text: "Group of 4: ₹3000 (₹750/head)", originalPrice: "₹4000" }
      ],
      link: GROUP_REGISTER_LINK
    },

    {
      title: "Psychiatry",
      items: [
        { text: "Group of 3: ₹1200 (₹400/head)", originalPrice: "₹1800" },
        { text: "Group of 4: ₹1400 (₹350/head)", originalPrice: "₹2400" }
      ],
      link: GROUP_REGISTER_LINK
    },

    {
      title: "ENT",
      items: [
        { text: "Group of 3: ₹3600 (₹1200/head)", originalPrice: "₹4350" }, 
        { text: "Group of 4: ₹4400 (₹1100/head)", originalPrice: "₹5800" } 
      ],
      link: GROUP_REGISTER_LINK
    },

    {
      title: "Paediatrics",
      items: [
        { text: "Group of 3: ₹2400 (₹800/head)", originalPrice: "₹2700" }, 
        { text: "Group of 4: ₹2800 (₹700/head)", originalPrice: "₹3600" } 
      ],
      link: GROUP_REGISTER_LINK
    },

    {
      title: "OBG",
      items: [
        { text: "Group of 3: ₹3000 (₹1000/head)", originalPrice: "₹3300" }, 
        { text: "Group of 4: ₹3600 (₹900/head)", originalPrice: "₹4400" } 
      ],
      link: GROUP_REGISTER_LINK
    },

    {
      title: "General Medicine",
      items: [
        { text: "Group of 3: ₹2700 (₹900/head)", originalPrice: "₹3000" }, 
        { text: "Group of 4: ₹3200 (₹800/head)", originalPrice: "₹4000" }
      ],
      link: GROUP_REGISTER_LINK
    }
  ];


  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-red-500/30">
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(10px)", scale: 1.1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center p-4 cursor-pointer overflow-hidden"
            onClick={() => setShowIntro(false)}
          >
            <style dangerouslySetInnerHTML={{
              __html: `
                .text-outline {
                  color: transparent;
                  -webkit-text-stroke: 1px rgba(255,255,255,0.3);
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
                @keyframes fillText { 100% { background-position: 0 0; } }
              `}} />
            <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700&display=swap" rel="stylesheet" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0, 0, 0, 0.15)_0%,transparent_70%)]" />

            <div
              className="relative text-center w-full max-w-7xl mx-auto flex flex-col items-center justify-center px-6"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              <h1 className="flex flex-col items-center text-center font-bold uppercase leading-tight tracking-tight space-y-2 sm:space-y-4">

  <span className="text-outline 
    text-[1.8rem] xs:text-[1.8rem] sm:text-5xl md:text-6xl lg:text-8xl">
    BIG PLANS
  </span>

  <span className="text-fill-anim 
    text-[1.8rem] xs:text-[1.8rem] sm:text-5xl md:text-6xl lg:text-8xl"
    style={{ animationDelay: "0.2s" }}>
    JUST GOT BETTER
  </span>

  <span className="text-outline 
    text-[1.8rem] xs:text-[1.8rem] sm:text-4xl md:text-5xl lg:text-7xl">
    SOMETHING EXCITING
  </span>

  <span className="text-fill-anim 
    text-[1.8rem] xs:text-[1.8rem] sm:text-4xl md:text-5xl lg:text-7xl"
    style={{ animationDelay: "0.4s" }}>
    IS WAITING FOR YOU
  </span>

</h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="mt-12 w-full"
              >
                <p className="text-white/60 text-base sm:text-2xl tracking-[0.2em] font-sans uppercase animate-pulse px-4 font-black">
                  Click anywhere to continue ———→
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`${showIntro ? 'hidden' : 'block'}`}>
        <HeroSection
          
          title="OFFERS"
          subtitle="SPECIAL DISCOUNTS FOR WORKSHOP"
          description="Grab exclusive combo and group offers now!"
          image=" /asset/mainbg/starnger_thingsbg.jpeg"
        />

        <div className="max-w-6xl mx-auto px-6  pb-20">
          {/* COMBO OFFERS */}
          <SectionHeader
            title="Combo Offers for Individuals"
            subtitle="Unlock massive savings by pairing your favorite workshops."
          />
          <div className="flex justify-center -mt-8 mb-12">
            <span className="px-4 py-1.5 bg-red-500/10 border border-red-500/20 rounded-full text-[11px] font-bold text-red-400 uppercase tracking-[0.2em]">
              Individual Combos
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {comboOffers.map((offer, idx) => (
              <div key={idx} className={offer.title === "General Surgery + Ortho" ? "md:col-span-2" : ""}>
                <OfferCard
                  {...offer}
                  link={INDIVIDUAL_REGISTER_LINK}
                  type="individual"
                />
              </div>
            ))}
          </div>

          <RulesBox
            title="Combo Rules & Regulations"
            rules={[
              "Sign up for combo offers using a single, dedicated form - no need for multiple submissions.",
              "Contact AHMED SHAMEER (9633669164) first to check seat availability.",
              "Payments must be made only via the QR code provided in the combo form.",
              "Upload a clear screenshot of your payment to the registration form.",
              "Combo selections are final and cannot be modified or canceled after submission.",
              "Ensure all personal details match your institution identity."
            ]}
          />

          <div className="my-24 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* GROUP OFFERS */}
          <SectionHeader
            title="Group Offers"
            subtitle="Great things happen in teams. Join with friends and pay less."
          />
          <div className="flex justify-center -mt-8 mb-12">
            <span className="px-4 py-1.5 bg-red-500/10 border border-red-500/20 rounded-full text-[11px] font-bold text-red-400 uppercase tracking-[0.2em]">
              Team Discounts
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {groupOffers.map((offer, idx) => (
              <div key={idx} className={offer.title === "Orthopaedics" ? "md:col-span-3" : ""}>
                <OfferCard
                  {...offer}
                  type="group"
                />
              </div>
            ))}
          </div>

          <RulesBox
            title="Group Rules & Regulations"
            rules={[
              "Special offers are available for groups of 3 and 4 participants.",
              "One group member must contact AHMED SHAMEER (9633669164) before starting.",
              "A single bulk payment should be made for the entire group after confirmation.",
              "The same payment screenshot must be uploaded by every member of the group.",
              "Incorrect or incomplete group registrations will not be considered for the offer."
            ]}
          />

          <div className="mt-20 md:mt-32 text-center pb-20 md:pb-32">
            <a
              href={GROUP_REGISTER_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-10 py-5 md:px-24 md:py-10 rounded-full text-2xl md:text-4xl font-black bg-gradient-to-r from-red-600 to-red-800 text-white hover:shadow-[0_0_50px_rgba(220,38,38,0.7)] transition-all duration-300 transform hover:scale-105"
            >
              Start Group Registration
              <ArrowRight className="ml-4 md:ml-6 w-8 h-8 md:w-12 md:h-12 text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;


