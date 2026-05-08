import { ShieldCheck, BadgeCheck, Award, Clock, HardHat } from "lucide-react";

const items = [
    { icon: ShieldCheck, label: "Vakkundig" },
    { icon: BadgeCheck, label: "Vaste prijzen" },
    { icon: Award, label: "Ervaren team" },
    { icon: Clock, label: "Snelle start" },
    { icon: HardHat, label: "Verzekerd" },
];

export default function TrustStrip() {
    return (
        <section data-testid="trust-strip" className="border-y border-gray-200 bg-[#2C3E50] py-7">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
                <div className="flex flex-wrap items-center justify-center gap-x-8 md:gap-x-12 gap-y-3">
                    <div className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">
                        Waar u ons aan herkent
                    </div>
                    {items.map((it, i) => {
                        const Icon = it.icon;
                        return (
                            <div key={i} data-testid={`trust-${i}`} className="flex items-center gap-2 text-white/85 hover:text-[#B8860B] transition-colors">
                                <Icon size={16} className="text-[#B8860B]" />
                                <span className="text-sm font-bold">{it.label}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
