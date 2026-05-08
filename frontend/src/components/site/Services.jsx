import { PaintBucket, Ruler, Home, Brush, Building2, Sparkles } from "lucide-react";

const services = [
    { icon: PaintBucket, title: "Stukadoor", desc: "Stucwerk, sierpleister, spachtelputz en stucco renovatie. Van nieuwbouw tot herstel — strak afgewerkt volgens uw wens." },
    { icon: Ruler, title: "Tegels", desc: "Tegelzetwerk voor badkamer, keuken, vloeren en wanden. Met zorg gelegd, waterpas en duurzaam." },
    { icon: Home, title: "Renovatie", desc: "Complete woningrenovatie: van keuken en badkamer tot volledige verdiepingen. Sfeer, kwaliteit en een heldere planning." },
    { icon: Brush, title: "Verf & Schilderwerk", desc: "Binnen- en buitenschilderwerk. Professionele afwerking, strakke lijnen en duurzame verf van topmerken." },
    { icon: Building2, title: "Uitbouw & Aanbouw", desc: "Woonkamer vergroten, dakopbouw of serre. Van vergunning tot oplevering — wij regelen alles." },
    { icon: Sparkles, title: "Onderhoud & Reparatie", desc: "Kleine en grote reparaties: lekkages, scheuren, vochtplekken. Ook voor spoedklussen staan wij snel klaar." },
];

export default function Services() {
        return (
        <section id="diensten" data-testid="services-section" className="section-padding bg-white">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
                <div className="max-w-3xl section-title reveal">
                    <div className="inline-flex items-center gap-2 bg-[#B8860B]/10 text-[#B8860B] px-3 py-1 rounded-md text-xs font-bold tracking-wide uppercase mb-4 md:mb-5">
                        Onze diensten
                    </div>
                    <h2 className="text-[#2C3E50]">
                        Alles voor uw <span className="text-[#B8860B]">huis & project</span>.
                    </h2>
                    <p className="mt-4 text-[15px] md:text-[17px] text-[#2C3E50]/65 leading-relaxed max-w-2xl">
                        Van een enkele reparatie tot een complete verbouwing — wij denken met u mee en leveren maatwerk. Eerlijk advies, vaste prijs, vakkundig uitgevoerd.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                    {services.map((s, i) => {
                        const Icon = s.icon;
                        return (
                            <div
                                key={i}
                                data-testid={`service-card-${i}`}
                                style={{ transitionDelay: `${i * 60}ms` }}
                                className="group bg-white border border-gray-200 hover:border-[#B8860B] rounded-xl p-7 transition-all hover:shadow-elevated reveal"
                            >
                                <div className="w-12 h-12 rounded-lg bg-[#B8860B]/10 text-[#B8860B] flex items-center justify-center mb-5 group-hover:bg-[#B8860B] group-hover:text-white transition-colors">
                                    <Icon size={22} strokeWidth={2} />
                                </div>
                                <h3 className="font-display text-xl md:text-2xl text-[#2C3E50] mb-2.5 leading-tight">
                                    {s.title}
                                </h3>
                                <p className="text-sm text-[#2C3E50]/65 leading-relaxed">
                                    {s.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
