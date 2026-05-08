import { Target, Eye, TrendingUp, ShieldCheck, Clock, Zap, MapPin, Star } from "lucide-react";

const values = [
    { icon: Target, title: "Missie", text: "Iedere klant een vakkundig resultaat leveren — eerlijk, transparant en binnen afgesproken tijd." },
    { icon: Eye, title: "Visie", text: "Het vertrouwdste klusbedrijf van Nederland worden. Waar kwaliteit en eerlijkheid centraal staan." },
    { icon: TrendingUp, title: "Aanpak", text: "Persoonlijk advies, vaste prijs vooraf en vakkundige uitvoering. Geen verrassingen, wel resultaat." },
];

const promises = [
    { icon: Zap, title: "Snelle reactie", text: "Binnen 24 uur een vrijblijvende offerte op maat." },
    { icon: ShieldCheck, title: "Volledig verzekerd", text: "Voor aansprakelijkheid en bedrijfsschade." },
    { icon: Clock, title: "Vaste prijzen", text: "Geen uurtarief. Wat afgesproken is, betaalt u." },
    { icon: MapPin, title: "Heel Nederland", text: "Wij komen overal. Reiskosten transparant vermeld." },
];

export default function About() {
    return (
        <section id="over" data-testid="about-section" className="section-padding bg-white">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 section-padding">
                    <div className="lg:col-span-6 reveal">
                        <div className="inline-flex items-center gap-2 bg-[#B8860B]/10 text-[#B8860B] px-3 py-1 rounded-md text-xs font-bold tracking-wide uppercase mb-4 md:mb-5">
                            Over ons
                        </div>
                        <h2 className="text-[#2C3E50] mb-5">
                            Van wens tot <span className="text-[#B8860B]">resultaat</span>.
                        </h2>
                        <p className="text-[15px] md:text-[17px] text-[#2C3E50]/75 leading-relaxed mb-4">
                            Klusbedrijf Eerlijkheid is gespecialiseerd in stukadoor, tegelwerk, renovatie, schilderwerk en uitbouw. Vanuit heel Nederland bedienen we particulieren en bedrijven met oog voor detail en eerlijk advies.
                        </p>
                        <p className="text-[15px] md:text-[17px] text-[#2C3E50]/75 leading-relaxed">
                            Een gedreven team dat staat voor korte lijnen, vaste prijzen en een vlekkeloze oplevering — van een kleine reparatie tot een complete verbouwing.
                        </p>

                        <div className="grid sm:grid-cols-3 gap-5 mt-10">
                            {values.map((v, i) => {
                                const Icon = v.icon;
                                return (
                                    <div key={i} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                                        <div className="w-10 h-10 rounded-lg bg-[#B8860B]/10 text-[#B8860B] flex items-center justify-center mb-3">
                                            <Icon size={18} />
                                        </div>
                                        <div className="font-display text-base text-[#2C3E50] mb-1 leading-tight">{v.title}</div>
                                        <p className="text-sm text-[#2C3E50]/65 leading-relaxed">{v.text}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right: dark promise card */}
                    <div className="lg:col-span-6 reveal reveal-delay-2">
                        <div className="bg-[#2C3E50] rounded-2xl p-8 md:p-10 relative overflow-hidden h-full">
                            <div className="absolute top-0 inset-x-0 h-1 bg-[#B8860B]" />
                            <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[#B8860B]/10 blur-3xl pointer-events-none" />

                            <div className="relative">
                                <div className="text-[#B8860B] font-mono text-xs tracking-wider uppercase mb-3 font-semibold">
                                    Onze belofte
                                </div>
                                <h3 className="font-display text-2xl md:text-3xl text-white tracking-tight leading-tight mb-4">
                                    Alles geregeld. <br />
                                    <span className="text-[#B8860B]">Volledig ontzorgd.</span>
                                </h3>
                                <p className="text-sm md:text-[15px] text-white/70 leading-relaxed mb-10">
                                    U krijgt één aanspreekpunt, een duidelijke offerte en vakkundige uitvoering — zonder verrassingen.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-5">
                                    {promises.map((p, i) => {
                                        const Icon = p.icon;
                                        return (
                                            <div key={i} className="flex items-start gap-3">
                                                <div className="w-10 h-10 rounded-lg bg-[#B8860B] text-white flex items-center justify-center shrink-0">
                                                    <Icon size={18} />
                                                </div>
                                                <div>
                                                    <div className="font-display text-sm text-white mb-0.5 tracking-tight">{p.title}</div>
                                                    <p className="text-xs text-white/65 leading-relaxed">{p.text}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
