import { Zap, ShieldCheck, TrendingUp, ArrowRight, Check, MessageCircle } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

const reasons = [
    { icon: MessageCircle, titleKey: "whyus.reason1_title", descKey: "whyus.reason1_desc" },
    { icon: ShieldCheck, titleKey: "whyus.reason2_title", descKey: "whyus.reason2_desc" },
    { icon: TrendingUp, titleKey: "whyus.reason3_title", descKey: "whyus.reason3_desc" },
];

const extrasKeys = [
    "whyus.extra1",
    "whyus.extra2",
    "whyus.extra3",
    "whyus.extra4",
    "whyus.extra5",
    "whyus.extra6",
];

export default function WhyUs() {
    const { t } = useTranslation();
    return (
        <section id="waarom" data-testid="whyus-section" className="section-padding bg-[#2C3E50] text-white overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#B8860B]/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#B8860B]/5 blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 relative">
                <div className="max-w-3xl section-title reveal">
                                        <div className="inline-flex items-center gap-2 bg-white/10 text-white px-3 py-1 rounded-md text-xs font-bold tracking-wide uppercase mb-4">
                        {t("whyus.badge")}
                    </div>
                    <h2 className="text-white">
                        {t("whyus.title")} <span className="text-[#B8860B]">{t("whyus.title_highlight")}</span>.
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
                                    {t(r.titleKey)}
                                </h3>
                                <p className="text-sm md:text-[15px] text-white/70 leading-relaxed">
                                    {t(r.descKey)}
                                </p>
                            </div>
                        );
                    })}
                </div>

                                {/* Combined extras + CTA */}
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center bg-white/5 border border-white/10 rounded-xl p-7 md:p-10 reveal">
                    <div className="lg:col-span-7">
                                                <h3 className="font-display text-xl md:text-2xl text-white leading-tight mb-5">
                            {t("whyus.extras_title")} <span className="text-[#B8860B]">{t("whyus.extras_highlight")}</span>
                        </h3>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                            {extrasKeys.map((key, i) => (
                                <div key={i} data-testid={`whyus-point-${i}`} className="flex items-start gap-2.5">
                                    <Check size={16} className="text-[#B8860B] mt-1 shrink-0" strokeWidth={3} />
                                    <span className="text-sm md:text-[15px] text-white/85 font-medium">{t(key)}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:col-span-5 lg:border-l lg:border-white/10 lg:pl-10">
                                                <h3 className="font-display text-xl md:text-2xl text-white leading-tight mb-3">
                            {t("whyus.cta_title")} <span className="text-[#B8860B]">{t("whyus.cta_highlight")}</span>
                        </h3>
                        <p className="text-sm text-white/60 mb-5">
                            {t("whyus.cta_desc")}
                        </p>
                        <a
                            href="#aanvragen"
                            data-testid="whyus-cta"
                            className="group inline-flex items-center gap-2 bg-[#B8860B] hover:bg-[#9A7209] text-white font-bold text-sm px-6 py-3 rounded-md transition-colors"
                        >
                            {t("whyus.cta_button")}
                            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
