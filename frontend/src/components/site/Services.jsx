import { PaintBucket, Ruler, Home, Brush, Building2, Sparkles } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

const services = [
    { icon: PaintBucket, titleKey: "services.stukadoor_title", descKey: "services.stukadoor_desc" },
    { icon: Ruler, titleKey: "services.tegels_title", descKey: "services.tegels_desc" },
    { icon: Home, titleKey: "services.renovatie_title", descKey: "services.renovatie_desc" },
    { icon: Brush, titleKey: "services.verf_title", descKey: "services.verf_desc" },
    { icon: Building2, titleKey: "services.uitbouw_title", descKey: "services.uitbouw_desc" },
    { icon: Sparkles, titleKey: "services.onderhoud_title", descKey: "services.onderhoud_desc" },
];

export default function Services() {
    const { t } = useTranslation();
        return (
        <section id="diensten" data-testid="services-section" className="section-padding bg-white">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
                <div className="max-w-3xl section-title reveal">
                    <div className="inline-flex items-center gap-2 bg-[#B8860B]/10 text-[#B8860B] px-3 py-1 rounded-md text-xs font-bold tracking-wide uppercase mb-4 md:mb-5">
                        {t("services.badge")}
                    </div>
                    <h2 className="text-[#2C3E50]">
                        {t("services.title")} <span className="text-[#B8860B]">{t("services.title_highlight")}</span>.
                    </h2>
                    <p className="mt-4 text-[15px] md:text-[17px] text-[#2C3E50]/65 leading-relaxed max-w-2xl">
                        {t("services.subtitle")}
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
                                    {t(s.titleKey)}
                                </h3>
                                <p className="text-sm text-[#2C3E50]/65 leading-relaxed">
                                    {t(s.descKey)}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
