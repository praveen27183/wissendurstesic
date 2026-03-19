import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock, Calendar, X, CheckCircle2 } from 'lucide-react';
import GradientText from '../components/GradientText';
import Galaxy from '../components/Galaxy.jsx';
import HeroSection from '../components/herosection';

const debateEvents = [
    {
        id: 3,
        title: "Tamil Debate / பட்டிமன்றம்",
        subtitle: "அறிவரங்கம் 26'",
        date: "28.04.2026",
        image: "/asset/Debate_and_oratory_form/Tamil_debate_.jpg",
        description: "சிந்தனைகள் சந்திக்கும் விவாத மேடை — அமுத தமிழின் நயமும், மருத்துவ அறிவின் ஆழமும், விவாதத்தின் வலிமையும் இணையும் சிறப்பு விவாதப் போட்டி.",
        regLink: "https://docs.google.com/forms/d/e/1FAIpQLSc6GJAUA7xtT1dlwcoinplgsor_QgChyTNLrcm9X_dTZTSWNQ/viewform",
        sections: [
            {
                title: "போட்டி அமைப்பு",
                items: [
                    "முதல் சுற்று: அனைத்து அணிகளும் பங்கேற்கும். இச்சுற்றில் தேர்வு செய்யப்பட்ட அணிகள் மட்டுமே அடுத்த சுற்றுக்குத் தகுதி பெறுவர்.",
                    "இரண்டாம் சுற்று (இறுதிப் போட்டி): மதிப்பெண்களின் அடிப்படையில் இறுதி வெற்றியாளர்கள் அறிவிக்கப்படுவர்."
                ]
            },
            {
                title: "விதிமுறைகள்",
                items: [
                    "ஒவ்வொரு அணியிலும் நான்கு (4) பேச்சாளர்கள் இருக்க வேண்டும்.",
                    "ஒவ்வொரு பேச்சாளருக்கும் பேச 3–4 நிமிட காலவரையறை வழங்கப்படும்.",
                    "பிறகு, கேள்வி–பதில் (Rebuttal) சுற்று நடைபெறும். இதில் 2 நிமிட காலவரையறை வழங்கப்படும்.",
                    "போட்டியின் தலைப்பு, போட்டி நடைபெறும் தேதிக்கு 1–2 நாட்களுக்கு முன்பு அறிவிக்கப்படும்.",
                    "போட்டி முழுவதும் தமிழில் நடைபெறும்.",
                    "நடுவர்களின் தீர்ப்பே இறுதியானது.",
                    "மற்ற விவரங்கள் பின்னர் தெரிவிக்கப்படும்."
                ]
            },
            {
                title: "Incharges",
                items: [
                    "Sadhurthika N: +91 95669 00929",
                    "Sri Dharnish: +91 99626 54504"
                ]
            }
        ]
    },
    {
        id: 1,
        title: "Trials of Themis",
        subtitle: "Model United Nations | A Speakers Collective Initiative",
        date: "29.04.2026",
        image: "/asset/Debate_and_oratory_form/MUN_.jpg",
        description: "Enter a dynamic UNHRC committee where the digital world becomes both a tool and a threat. Delegates must address emerging digital threats such as online harassment, privacy violations, surveillance and data misuse. Balancing human rights with technological advancement, the committee aims to push for innovative, ethical and enforceable solutions to conquer the modern dilemma.",
        multiLinks: [
            { name: "Delegate Registration", url: "https://forms.gle/v9sFWX5ntxeGFtww8" },
            { name: "Chair/Candidate Registration", url: "https://forms.gle/rpWhUuw22fSvx3ya6" }
        ],
        sections: [
            {
                title: "Committee Info",
                items: [
                    "Committee: UNHRC",
                    "Agenda: Addressing Technology-facilitated Gender-based Violence and Cyber Crime"
                ]
            },
            {
                title: "General Instructions",
                items: [
                    "The conference will follow standard MUN format.",
                    "This is a single-day conference.",
                    "Participation is individual-based - team entries are not permitted.",
                    "Country allotments will be made based on preferences submitted during registration, however, allocation is subject to availability and cannot be guaranteed.",
                    "A detailed Background Guide will be shared with participants prior to the conference to aid preparation.",
                    "An Introductory MUN Webinar will be conducted one week before the conference to familiarize participants with procedures and expectations."
                ]
            },
            {
                title: "Incharges",
                items: [
                    "Jane Sarah John (78240 34859)",
                    "Pragnya Pradeepkumar (7305116987)"
                ]
            }
        ]
    },
    {
        id: 2,
        title: "The Sinclair Spectre",
        subtitle: "English Debate",
        date: "30.04.2026",
        image: "/asset/Debate_and_oratory_form/Debate_.jpg",
        description: "Argue your case under the spotlight in The Sinclair Spectre English Debate. A forum for logical reasoning, quick thinking, and impeccable oratory skills.",
        regLink: "https://forms.gle/cB5Sjn94XcK9C82P7",
        sections: [
            {
                title: "Judging Criteria",
                items: ["Judging will be based on clarity of arguments, analytical reasoning, persuasive delivery, rebuttal effectiveness, stage presence, and team coordination."]
            },
            {
                title: "General Instructions",
                items: [
                    "Each participating college may register one team of two members.",
                    "Cross-college teams are permitted.",
                    "Exceeding allotted time will lead to deduction of marks (Time-warning system will be followed).",
                    "Judges’ decision will be final.",
                    "Round-specific rules and regulations will be shared after registration."
                ]
            },
            {
                title: "Competition Format",
                items: [
                    "Preliminary Round: Opening Speech (2 min) | Rebuttal (1.5 min) | Conclusion (1 min) | Judge’s Questions. (Topics released 2 days prior; Top 4 teams qualify).",
                    "Semi-Final Round: Opening Speech (2 min) | Rebuttal (2 min) | Conclusion (1 min) | Judges’ Questions (2 min). (Topics on the spot; Top 2 teams qualify).",
                    "Final Round: Opening Speech (3 min) | Rebuttal (2 min) | Conclusion (1 min) | Judge’s Questions. (Topics on the spot)."
                ]
            },
            {
                title: "Incharges",
                items: [
                    "Kalanidhi M- +91 95000 78979",
                    "Janitha Prabhakaran- +91 9535218887"
                ]
            }
        ]
    },
    {
        id: 4,
        title: "Tamil Elocution / பேச்சுப்போட்டி",
        subtitle: "சொற்புனல் 26'",
        date: "30.04.2026",
        image: "/asset/Debate_and_oratory_form/Tamil_elocution_.jpg",
        description: "செந்தமிழும் மருத்துவமும் இணையும் விழா — மருத்துவ மாணவர்களின் பேச்சுத் திறன், கூர்த்தறிவு மற்றும் மேடை ஆளுமையை வெளிப்படுத்தும் சிறப்புச் சொற்பொழிவுப் போட்டி.",
        regLink: "https://docs.google.com/forms/d/e/1FAIpQLScqEwcPndWMKYFgwUe3praq-e0HahRO1c5hFWpF92MH0zZgMw/viewform",
        sections: [
            {
                title: "விதிமுறைகள்",
                items: [
                    "பங்கேற்பு: தனிநபர்.",
                    "ஒவ்வொரு போட்டியாளரும் பேசுவதற்கு 3–5 நிமிட காலவரையறை வழங்கப்படும்.",
                    "போட்டி முழுவதும் தமிழில் நடைபெறும்.",
                    "தலைப்பு முன்கூட்டியே அறிவிக்கப்படும்.",
                    "நேரக்கட்டுப்பாட்டைக் கடைப்பிடிக்க வேண்டும்.",
                    "நடுவர்களின் தீர்ப்பே இறுதியானது.",
                    "மற்ற விவரங்கள் பின்னர் தெரிவிக்கப்படும்."
                ]
            },
            {
                title: "Incharges",
                items: [
                    "Sadhurthika N: +91 95669 00929",
                    "Sri Dharnish: +91 99626 54504"
                ]
            }
        ]
    }
];

const Debateandoratory = () => {
    const [showIntro, setShowIntro] = useState(true);
    const [detailIndex, setDetailIndex] = useState(null);

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
                        <span className="text-outline w-full block">A FORCE OF</span>
                        <span className="text-fill-anim delay-1 w-full block py-1">WORDS.</span>
                        <span className="text-outline w-full block mt-3 sm:mt-4 md:mt-5">FROM QUIET THOUGHTS</span>
                        <span className="text-fill-anim delay-2 w-full block pb-1">TO POWERFUL VOICES,</span>
                        <span className="text-outline w-full block mt-3 sm:mt-4 md:mt-5">EVERY DISCUSSION</span>
                        <span className="text-outline w-full block">BECOMES A</span>
                        <span className="text-fill-anim delay-2 w-full block pb-1">MOVEMENT.</span>
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

    const inDetail = detailIndex !== null;
    const detailEvent = inDetail ? debateEvents[detailIndex] : null;
    const detailBg = inDetail ? detailEvent.image : null;

    const prev = () => setDetailIndex(i => (i - 1 + debateEvents.length) % debateEvents.length);
    const next = () => setDetailIndex(i => (i + 1) % debateEvents.length);

    return (
        <div className="min-h-screen font-body bg-[#050505] text-[#ffffff] animate-[fadeIn_1s_ease-out] overflow-x-hidden">

            {/* ── Hero ── */}
            <section className="relative min-h-[45vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
                <img
                    src="/asset/hero_sec_for_all/debate_and_oratory_forum.png"
                    alt="Debate & Oratory Hero"
                    className="absolute inset-0 w-full h-full object-cover"
                    fetchpriority="high"
                    decoding="sync"
                />
                <div className="absolute inset-0 bg-black/65 backdrop-blur-[1px]" />
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <GradientText
                        colors={['#ffffff', '#ff003c', '#ffffff']}
                        animationSpeed={6}
                        className="text-4xl sm:text-6xl md:text-7xl font-milanesa font-black tracking-[0.1em] uppercase mb-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]"
                    >
                        DEBATE & ORATORY
                    </GradientText>
                    <p className="text-sm md:text-lg text-gray-300/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                        A battleground arrayed with words instead of weapons. Prove your intellect, hone your rhetoric, and command the audience in our premier communication and diplomacy events.
                    </p>
                </div>
            </section>

            {/* Galaxy Background layer */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
                <Galaxy 
                    starSpeed={0.2}
                    density={1.2}
                    hueShift={220}
                    transparent
                />
            </div>

            {/* ── Event Cards Grid ── */}
            <section className="py-16 px-4 sm:px-8 bg-[#050505]">

                {/* Section Header */}
                <div className="flex items-center justify-center max-w-7xl mx-auto mb-10">
                    <div className="h-[1px] bg-[#ff003c]/50 flex-1 max-w-[150px] mr-4"></div>
                    <h2 className="text-[#ff003c] font-bold tracking-[0.2em] font-title uppercase text-sm md:text-base">Speaker's Collective</h2>
                    <div className="h-[1px] bg-[#ff003c]/50 flex-1 max-w-[150px] ml-4"></div>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 justify-items-center">
                    {debateEvents.map((event, index) => (
                        <div
                            key={event.id}
                            className="group flex flex-col bg-[rgba(10,10,15,0.85)] border border-st-red/20 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,0,60,0.15)] transition-all duration-300 w-full max-w-xl"
                            onClick={() => setDetailIndex(index)}
                        >
                            <div className="relative w-full aspect-video overflow-hidden">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                    decoding="async"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,15,0.85)] to-transparent"></div>
                                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-st-red/30">
                                    <span className="text-white text-lg font-bold uppercase tracking-wider font-title flex items-center gap-2">
                                        {event.date}
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-col p-6 flex-1 bg-[#050505] border-t border-st-red/20">
                                <span className="text-[#ff003c] text-[10px] md:text-xs font-black tracking-widest uppercase mb-2 block font-title">
                                    {event.subtitle}
                                </span>
                                <h3 className="text-white text-xl md:text-2xl font-black uppercase leading-tight mb-4 group-hover:text-[#ffffff] transition-colors font-milanesa">
                                    {event.title}
                                </h3>

                                <div className="mt-auto pt-4 flex items-end justify-end border-t border-white/5 text-[#9fa0b8] text-[10px] md:text-xs uppercase tracking-widest font-title font-bold">
                                    <span className="text-st-red/50 flex items-center gap-1 group-hover:text-st-red transition-colors">Details <ChevronRight className="w-3 h-3" /></span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Detail Overlay ── */}
            {inDetail && detailEvent && (
                <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col overflow-hidden">

                    {/* Mobile top back bar */}
                    <div className="flex md:hidden items-center justify-between px-4 py-3 bg-[#0f0f14] border-b border-st-red/20 shrink-0 z-30">
                        <button
                            onClick={() => setDetailIndex(null)}
                            className="flex items-center gap-1 text-st-red font-bold uppercase tracking-widest text-xs"
                        >
                            <ChevronLeft className="w-5 h-5" /> Back
                        </button>
                        <div className="flex items-center gap-3">
                            <button onClick={prev} className="flex items-center justify-center w-8 h-8 rounded-full border border-st-red/40 text-st-red hover:bg-st-red hover:text-black transition-all">
                                <ChevronLeft className="w-4 h-4 -ml-0.5" />
                            </button>
                            <span className="text-gray-300/50 text-xs font-title">{detailIndex + 1} / {debateEvents.length}</span>
                            <button onClick={next} className="flex items-center justify-center w-8 h-8 rounded-full border border-st-red/40 text-st-red hover:bg-st-red hover:text-black transition-all">
                                <ChevronRight className="w-4 h-4 -mr-0.5" />
                            </button>
                        </div>
                    </div>

                    {/* Inner split */}
                    <div className="flex flex-col md:flex-row flex-1 overflow-hidden">

                        {/* LEFT: Full painting & Controls */}
                        <div className="relative w-full md:w-2/5 h-[30vh] md:h-full shrink-0 border-r border-st-red/20">
                            <img
                                src={detailBg}
                                alt=""
                                className="absolute inset-0 w-full h-full object-cover"
                                loading="lazy"
                                decoding="async"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black via-black/40 to-transparent" />

                            {/* Desktop Details & Controls */}
                            <div className="hidden md:flex absolute inset-0 flex-col justify-end p-10 pb-20">
                                <span className="text-st-red text-xs font-black tracking-[0.3em] uppercase mb-4 block">{detailEvent.subtitle}</span>
                                <h2 className="text-4xl lg:text-5xl font-milanesa font-black uppercase text-[#ffffff] leading-tight drop-shadow-xl mb-8">
                                    {detailEvent.title}
                                </h2>

                                <div className="flex gap-4">
                                    <button onClick={prev} className="w-12 h-12 rounded-full bg-black/50 border border-st-red/30 flex items-center justify-center text-st-red hover:bg-st-red hover:text-black transition-all group backdrop-blur-sm">
                                        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                                    </button>
                                    <button onClick={next} className="w-12 h-12 rounded-full bg-black/50 border border-st-red/30 flex items-center justify-center text-st-red hover:bg-st-red hover:text-black transition-all group backdrop-blur-sm">
                                        <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Detail content & Extensive Sections */}
                        <div className="flex-1 overflow-y-auto bg-[#050505] relative">
                            {/* Desktop close button */}
                            <button
                                onClick={() => setDetailIndex(null)}
                                className="hidden md:flex fixed top-8 right-8 z-30 w-12 h-12 rounded-full bg-[#050505]/80 border border-st-red/40 items-center justify-center text-st-red hover:bg-st-red hover:text-black transition-all shadow-[0_0_15px_rgba(255,0,60,0.2)]"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="p-6 sm:p-8 md:p-12 lg:p-16 max-w-4xl mx-auto">
                                <div className="md:hidden mb-6 border-b border-st-red/20 pb-6">
                                    <h2 className="text-3xl font-milanesa font-black uppercase tracking-wide text-[#ffffff] leading-tight mb-2">
                                        {detailEvent.title}
                                    </h2>
                                    <p className="text-st-red font-bold font-title uppercase tracking-[0.1em] text-xs">
                                        {detailEvent.subtitle}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-4 mb-8 text-st-red text-sm font-bold tracking-widest uppercase bg-st-red/10 inline-flex px-5 py-2.5 rounded-full border border-st-red/30 shadow-md">
                                    <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {detailEvent.date}</span>
                                </div>

                                <p className="text-gray-300/90 leading-relaxed text-base md:text-lg font-light mb-12 italic border-l-4 border-st-red pl-6 py-2 bg-gradient-to-r from-white/5 to-transparent">
                                    {detailEvent.description}
                                </p>

                                {/* Info Sections Stack */}
                                <div className="space-y-8">
                                    {detailEvent.sections.map((section, idx) => (
                                        <div key={idx} className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 md:p-8">
                                            <h4 className="text-lg font-bold text-st-red uppercase tracking-[0.15em] mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                                                {section.title}
                                            </h4>
                                            <ul className="space-y-4">
                                                {section.items.map((item, itemIdx) => (
                                                    <li key={itemIdx} className="flex gap-4 items-start text-sm md:text-base text-[#ffffff]/80 leading-relaxed">
                                                        <CheckCircle2 className="w-5 h-5 text-st-red/50 shrink-0 mt-0.5" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 mb-6">
                                    {detailEvent.multiLinks ? (
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {detailEvent.multiLinks.map((link, lIdx) => (
                                                <a 
                                                    key={lIdx}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="w-full"
                                                >
                                                    <button className="w-full px-6 py-4 bg-st-red text-black rounded-xl font-title font-black uppercase tracking-widest hover:scale-[1.02] hover:bg-white transition-all shadow-lg flex items-center justify-center gap-3 text-xs">
                                                        {link.name}
                                                    </button>
                                                </a>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="flex justify-center">
                                            <a 
                                                href={detailEvent.regLink}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <button className="px-10 py-4 bg-st-red text-white rounded-full font-title font-black uppercase tracking-widest hover:scale-105 hover:bg-white transition-all shadow-[0_0_30px_rgba(255,0,60,0.3)] flex items-center gap-3">
                                                    Register link
                                                </button>
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Debateandoratory;
