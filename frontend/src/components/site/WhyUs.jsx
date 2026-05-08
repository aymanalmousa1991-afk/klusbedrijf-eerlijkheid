import { Zap, ShieldCheck, TrendingUp, ArrowRight, Check, MessageCircle } from "lucide-react";

const reasons = [
    { icon: MessageCircle, title: "Eerlijk advies", desc: "Geen onnodige kosten. Wij adviseren wat nodig is — niet meer, niet minder. U weet vooraf exact waar u aan toe bent." },
    { icon: ShieldCheck, title: "Vaste prijzen", desc: "Geen verrassingen achteraf. U ontvangt een duidelijke offerte met vaste prijs, ongeacht hoe lang de klus duurt." },
    { icon: TrendingUp, title: "Vakkundig & Ervaren", desc: "Jarenlange ervaring in stukadoor, tegelwerk, renovatie, verf en uitbouw. Altijd netjes en volgens de laatste normen." },
];

const extras = [
    "Vaste prijs vooraf — nooit bijbetalen",
    "Werkzaam door heel Nederland",
    "Eigen materiaal en gereedschap",
    "Vaste contactpersoon per project",
    "Volledig verzekerd",
    "Schone oplevering gegarandeerd",
];

export default function WhyUs() {
    return (
        <section id="waarom" data-testid="whyus-section" className="section-padding bg-[#2C3E50] text-white overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#B8860B]/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#B8860B]/5 blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 relative">
                <div className="max-w-3xl section-title reveal">
                    <div className="inline-flex items-center gap-2 bg-white/10 text-white px-3 py-1 rounded-md text-xs font-bold tracking-wide uppercase mb-4">
                        Waarom Klusbedrijf Eerlijkheid
                    </div>
                    <h2 className="text-white">
                        Drie redenen om voor <span className="text-[#B8860B]">ons</span> te kiezen.
                    </h2>
                </div>

                {/* 3 main reasons */}
                <div className="grid lg:grid-cols-3 gap-5 mb-12">
                    {reasons.map((r, i) => {
                        const Icon = r.icon;
                        return (
                            <div
                                key={i}
                                data-testid={`whyus-reason-${i}`}
                                style={{ transitionDelay: `${i * 80}ms` }}
                                className="bg-white/5 border border-white/10 rounded-xl p-7 md:p-8 reveal"
                            >
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-12 h-12 rounded-lg bg-[#B8860B] text-white flex items-center justify-center">
                                        <Icon size={22} />
                                    </div>
                                    <span className="font-mono text-xs text-white/40">/ 0{i + 1}</span>
                                </div>
                                <h3 className="font-display text-xl md:text-2xl mb-3 leading-tight">
                                    {r.title}
                                </h3>
                                <p className="text-sm md:text-[15px] text-white/70 leading-relaxed">
                                    {r.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Combined extras + CTA */}
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center bg-white/5 border border-white/10 rounded-xl p-7 md:p-10 reveal">
                    <div className="lg:col-span-7 grid sm:grid-cols-2 gap-x-6 gap-y-3">
                        {extras.map((p, i) => (
                            <div key={i} data-testid={`whyus-point-${i}`} className="flex items-start gap-2.5">
                                <Check size={16} className="text-[#B8860B] mt-1 shrink-0" strokeWidth={3} />
                                <span className="text-sm md:text-[15px] text-white/85 font-medium">{p}</span>
                            </div>
                        ))}
                    </div>
                    <div className="lg:col-span-5 lg:border-l lg:border-white/10 lg:pl-10">
                        <h3 className="font-display text-xl md:text-2xl text-white leading-tight mb-3">
                            Klaar om te <span className="text-[#B8860B]">starten?</span>
                        </h3>
                        <p className="text-sm text-white/60 mb-5">
                            Vraag een vrijblijvende offerte aan — binnen 24 uur reactie.
                        </p>
                        <a
                            href="#aanvragen"
                            data-testid="whyus-cta"
                            className="group inline-flex items-center gap-2 bg-[#B8860B] hover:bg-[#9A7209] text-white font-bold text-sm px-6 py-3 rounded-md transition-colors"
                        >
                            Offerte aanvragen
                            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
