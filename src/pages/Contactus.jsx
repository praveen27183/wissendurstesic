import React from 'react';

// Organizing Committee Contact Information
const Contacts = [
    {
        role: "Academic Secretaries",
        names: [
            { name: "RISHALINI U", phone: "90429 52723" },
            { name: "VEDANT SOMA", phone: "63069 06398" }
        ]
    },
    {
        role: "Organising Secretaries",
        names: [
            { name: "FARHATHUL AFRAA", phone: "82484 37615" },
            { name: "JESWIN ANTONY", phone: "98471 76022" },
            { name: "NANDANA SREEKUMAR", phone: "90485 42822" }
        ]
    },
    {
        role: "Treasurer",
        names: [
            { name: "AHMED SHAMEER", phone: "96336 69164" }
        ]
    },
    {
        role: "Overall Registration Heads",
        names: [
            { name: "LEKHA", phone: "97897 03487" },
            { name: "SHALINI R", phone: "94442 62579" },
            { name: "KARTHIKEYAN", phone: "94895 32419" },
            { name: "MEIMOZHI PARI", phone: "63828 66554" }
        ]
    },
    {
        role: "Overall Workshop Heads",
        names: [
            { name: "SUNIL KUMAR CM", phone: "63810 83905" },
            { name: "SAINITHI B", phone: "88386 45832" },
            { name: "NEHA SUNIL", phone: "93604 87652" },
            { name: "SRI DHARNISH", phone: "99626 54504" },
            { name: "NIVETHA D", phone: "76038 72548" },
            { name: "ASHWIN KUMAR S", phone: "98406 31290" }
        ]
    },
    {
        role: "Overall Quiz Heads",
        names: [
            { name: "MANIKANDAN A", phone: "90434 93961" },
            { name: "JANE SARAH JOHN", phone: "78240 34859" },
            { name: "KALANIDHI M", phone: "95000 78979" }
        ]
    },
    {
        role: "Overall Heads of Presentations",
        names: [
            { name: "DIYA VINOD", phone: "87781 25205" },
            { name: "ESHITA SUDHAKAR", phone: "88380 29901" }
        ]
    }
];

const Contactus = () => {
    return (
        <div className="py-24 md:py-32 relative overflow-hidden bg-renaissance-dark/30 min-h-screen">
            {/* Background glow behind title */}
            <div className="absolute top-20 left-1/2 w-[600px] h-[150px] -translate-x-1/2 bg-renaissance-gold/10 blur-[120px] rounded-[100%] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 text-center mt-12 relative z-10">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-milanesa font-black mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#FBF1CF] via-renaissance-gold to-[#FBF1CF] uppercase tracking-wide drop-shadow-sm">
                    Contact Details
                </h1>

                <p className="text-sm md:text-base text-renaissance-gold font-bold mb-20 uppercase tracking-[0.3em] inline-block pb-2">
                    Organising Committee
                </p>

                {/* Committee Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 max-w-6xl mx-auto text-center md:text-left">
                    {Contacts.map((col, ci) => (
                        <div key={ci} className="flex flex-col gap-12">
                            <div className="flex flex-col pb-4">
                                <p className="text-sm border-b border-renaissance-gold/30 pb-2 inline-block md:w-full w-3/4 mx-auto md:mx-0 text-renaissance-gold uppercase tracking-[0.2em] font-bold mb-6">
                                    {col.role}
                                </p>
                                <div className="flex flex-col gap-6">
                                    {col.names.map((n, ni) => (
                                        <div key={ni}>
                                            <h4 className="text-lg sm:text-xl font-black uppercase text-[#FBF1CF] mb-1">
                                                {n.name}
                                            </h4>
                                            <div className="flex items-center justify-center md:justify-start gap-2">
                                                <span className="text-[#FBF1CF]/60 text-xs">Ph:</span>
                                                <a
                                                    href={`tel:+91${n.phone.replace(/\s+/g, '')}`}
                                                    className="text-sm font-medium text-renaissance-gold/90 hover:text-renaissance-gold transition-colors inline-block w-fit"
                                                >
                                                    +91 {n.phone}
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Contactus;
