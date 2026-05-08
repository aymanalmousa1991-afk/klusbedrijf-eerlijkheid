import { Award, ShieldCheck, BadgeCheck, FileBadge, Hammer, Building } from "lucide-react";

const certs = [
    { icon: ShieldCheck, title: "VCA**", subtitle: "Veiligheid Checklist Aannemers" },
    { icon: BadgeCheck, title: "BRL 0501", subtitle: "Stuc- en tegelwerk norm" },
    { icon: FileBadge, title: "Verzekerd", subtitle: "Beroepsaansprakelijkheid" },
    { icon: Award, title: "Ervaring", subtitle: "Jarenlange vakkennis" },
];

const partners = [
    "Particulieren",
    "Aannemers",
    "VVE's",
    "Projectontwikkelaars",
    "Woningcorporaties",
    "Interieurontwerpers",
    "Makelaars",
    "Bedrijven",
    "Horeca",
    "Overheid",
];

export default function Certifications() {
    const partnerList = [...partners, ...partners];
    return (
        <section id="certificeringen" data-testid="certifications-section" className="section-padding bg-white">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
                <div className="text-center max-w-3xl mx-auto section-title reveal">
                    <div className="inline-flex items-center gap-2 bg-[#B8860B]/10 text-[#B8860B] px-3 py-1 rounded-md text-xs font-bold tracking-wide uppercase mb-4 md:mb-5">
                        Certificeringen
                    </div>
                    <h2 className="text-[#2C3E50]">
                        Officieel <span className="text-[#B8860B]">erkend</span>.
                    </h2>
                    <p className="mt-4 text-[15px] md:text-[17px] text-[#2C3E50]/70 max-w-xl mx-auto">
                        Werken volgens de Nederlandse normen voor vakmanschap en veiligheid.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20 md:mb-24">
                    {certs.map((c, i) => {
                        const Icon = c.icon;
                        return (
                            <div
                                key={i}
                                data-testid={`cert-${i}`}
                                style={{ transitionDelay: `${i * 80}ms` }}
                                className="bg-[#F5F7FA] hover:bg-white border border-gray-200 rounded-2xl p-6 md:p-8 text-center hover:shadow-elevated transition-all reveal"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-[#2C3E50] text-[#B8860B] flex items-center justify-center mx-auto mb-4">
                                    <Icon size={24} strokeWidth={1.75} />
                                </div>
                                <div className="font-display text-xl md:text-2xl text-[#2C3E50] tracking-tight mb-1">
                                    {c.title}
                                </div>
                                <div className="text-xs md:text-sm text-[#2C3E50]/60">
                                    {c.subtitle}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Partners marquee */}
                <div className="reveal">
                    <div className="text-center mb-8">
                        <div className="text-xs font-bold uppercase tracking-wider text-[#2C3E50]/55">
                            Vertrouwd door opdrachtgevers in heel Nederland
                        </div>
                    </div>
                    <div className="relative overflow-hidden border-y border-gray-200 bg-[#F5F7FA] py-6">
                        <div className="flex gap-12 md:gap-16 whitespace-nowrap animate-marquee w-max items-center">
                            {partnerList.map((p, i) => (
                                <div key={i} className="font-display text-xl md:text-2xl uppercase text-[#2C3E50]/45 hover:text-[#2C3E50] tracking-tight">
                                    {p}
                                </div>
                            ))}
                        </div>
                        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#F5F7FA] to-transparent pointer-events-none" />
                        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#F5F7FA] to-transparent pointer-events-none" />
                    </div>
                </div>
            </div>
        </section>
    );
}
