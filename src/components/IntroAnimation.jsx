import { useState, useEffect } from "react";

const IntroAnimation = ({ onComplete }) => {
    const [stage, setStage] = useState(0);

    useEffect(() => {
        const timers = [
            setTimeout(() => setStage(1), 500),   // Dark scene starts
            setTimeout(() => setStage(2), 2000),  // Insane shaking and vibrating starts
            setTimeout(() => setStage(3), 4000),  // SHATTER! Pieces fly
            setTimeout(() => setStage(4), 8500),  // Fade out
            setTimeout(() => onComplete(), 10000), // Complete transition
        ];

        return () => timers.forEach(clearTimeout);
    }, [onComplete]);

    // Jagged crack paths for splitting the dice perfectly into 4 quadrants
    const crackPathTL = "polygon(0 0, 48% 0, 45% 25%, 50% 50%, 25% 55%, 0 48%)";
    const crackPathTR = "polygon(48% 0, 100% 0, 100% 52%, 75% 45%, 50% 50%, 45% 25%)";
    const crackPathBR = "polygon(50% 50%, 75% 45%, 100% 52%, 100% 100%, 52% 100%, 55% 75%)";
    const crackPathBL = "polygon(0 48%, 25% 55%, 50% 50%, 55% 75%, 52% 100%, 0 100%)";

    return (
        <div
            className={`fixed inset-0 bg-[#0a0000] flex items-center justify-center overflow-hidden z-[100]
      transition-opacity duration-1000 ${stage >= 4 ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        >
            {/* Background Image - Netflix Style Dark Theme */}
            <div className={`absolute inset-0 bg-[url('/starnger_thingsbg.jpeg')] bg-cover bg-center transition-all duration-[6000ms] ease-out ${stage >= 3 ? 'opacity-30 scale-105 blur-sm' : 'opacity-20 scale-100 blur-none'}`}></div>

            {/* Background Red Glow/Fog under the explosion */}
            <div className={`absolute inset-0 bg-red-900/50 blur-[120px] transition-opacity duration-[3000ms] ${stage >= 1 ? 'opacity-100' : 'opacity-0'}`}></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-40 mix-blend-overlay pointer-events-none"></div>

            {/* Persistent Red Screen Effect on Full Break */}
            <div className={`absolute inset-0 bg-red-800 mix-blend-color pointer-events-none transition-opacity duration-[3000ms] z-40 ${stage >= 3 ? 'opacity-80' : 'opacity-0'}`}></div>

            {/* Sudden Flash on Break */}
            <div className={`absolute inset-0 bg-red-500 mix-blend-screen pointer-events-none transition-opacity duration-[2000ms] z-50 ${stage === 3 ? 'opacity-40' : 'opacity-0'}`}></div>

            {/* Main Title - Revealed after dice breaks */}
<div className={`absolute z-20 flex flex-col items-center justify-center transition-all duration-[4000ms] ease-out
  ${stage >= 3 ? 'scale-100 opacity-100' : 'scale-75 opacity-0 pointer-events-none'}
`}>

  {/* Welcome text */}
  <h3
    className="text-[#ff3333] font-bold tracking-[0.25em] 
    text-lg sm:text-2xl md:text-4xl lg:text-5xl text-center"
    style={{
      fontFamily: "'Stranger', serif",
      textShadow: "0 0 20px #ff0000, 0 0 40px #cc0000"
    }}
  >
    Welcome to
  </h3>

  {/* Main title */}
  <h1
    className="text-[#ff3333] font-bold tracking-[0.15em] 
    text-5xl sm:text-7xl md:text-[9rem] lg:text-[12rem] text-center"
    style={{
      fontFamily: "'Stranger', serif",
      textShadow: "0 0 30px #ff0000, 0 0 60px #cc0000, 0 0 90px #aa0000"
    }}
  >
    WISSENDURST
  </h1>

  {/* Year */}
  <p
    className="text-red-400 font-bold tracking-[0.6em] mt-6 
    text-xl sm:text-4xl md:text-5xl"
    style={{ fontFamily: "'Stranger', serif" }}
  >
    2026
  </p>

</div>

            {/* Dice Container */}
            <div
                className={`absolute z-30 flex items-center justify-center transition-transform duration-[4000ms] ease-out ${stage === 3 ? 'scale-105' : 'scale-100'
                    } ${stage === 2 ? 'animate-[shake_0.1s_ease-in-out_infinite]' : ''}`}
            >
                {/* Intense glowing core expanding right before and during break */}
                <div
                    className={`absolute w-32 md:w-48 h-32 md:h-48 rounded-full transition-all duration-[2000ms] 
                    ${stage === 2 ? 'opacity-100 scale-110 bg-red-600 blur-[20px] animate-pulse' : (stage >= 3 ? 'opacity-0 scale-[3] bg-white blur-[60px]' : 'bg-transparent opacity-0')}
                    `}
                ></div>

                {/* Top-Left Piece */}
                <img
                    src="/wissennobg.png"
                    alt="dice-tl"
                    className={`w-48 md:w-72 absolute transition-all ${stage >= 3 ? '-translate-x-[40vw] md:-translate-x-[25vw] -translate-y-[30vh] md:-translate-y-[20vh] -rotate-[35deg] scale-125 opacity-0 duration-[5000ms] ease-out' : 'duration-0'}`}
                    style={{ clipPath: crackPathTL }}
                />

                {/* Top-Right Piece */}
                <img
                    src="/wissennobg.png"
                    alt="dice-tr"
                    className={`w-48 md:w-72 absolute transition-all ${stage >= 3 ? 'translate-x-[40vw] md:translate-x-[25vw] -translate-y-[30vh] md:-translate-y-[20vh] rotate-[35deg] scale-125 opacity-0 duration-[5000ms] ease-out' : 'duration-0'}`}
                    style={{ clipPath: crackPathTR }}
                />

                {/* Bottom-Left Piece */}
                <img
                    src="/wissennobg.png"
                    alt="dice-bl"
                    className={`w-48 md:w-72 absolute transition-all ${stage >= 3 ? '-translate-x-[40vw] md:-translate-x-[25vw] translate-y-[30vh] md:translate-y-[20vh] -rotate-[35deg] scale-125 opacity-0 duration-[5000ms] ease-out' : 'duration-0'}`}
                    style={{ clipPath: crackPathBL }}
                />

                {/* Bottom-Right Piece */}
                <img
                    src="/wissennobg.png"
                    alt="dice-br"
                    className={`w-48 md:w-72 relative transition-all ${stage >= 3 ? 'translate-x-[40vw] md:translate-x-[25vw] translate-y-[30vh] md:translate-y-[20vh] rotate-[35deg] scale-125 opacity-0 duration-[5000ms] ease-out' : 'duration-0'}`}
                    style={{ clipPath: crackPathBR }}
                />
            </div>

            <style jsx>{`
                @keyframes shake {
                    0% { transform: translate(1px, 1px) rotate(0deg); }
                    10% { transform: translate(-1px, -2px) rotate(-1deg); }
                    20% { transform: translate(-3px, 0px) rotate(1deg); }
                    30% { transform: translate(3px, 2px) rotate(0deg); }
                    40% { transform: translate(1px, -1px) rotate(1deg); }
                    50% { transform: translate(-1px, 2px) rotate(-1deg); }
                    60% { transform: translate(-3px, 1px) rotate(0deg); }
                    70% { transform: translate(3px, 1px) rotate(-1deg); }
                    80% { transform: translate(-1px, -1px) rotate(1deg); }
                    90% { transform: translate(1px, 2px) rotate(0deg); }
                    100% { transform: translate(1px, -2px) rotate(-1deg); }
                }
            `}</style>

        </div>
    );
};

export default IntroAnimation;