import { Target, Eye, TrendingUp, ShieldCheck, Clock, Zap, MapPin, Star } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

const values = [
    { icon: Target, titleKey: "about.value1_title", textKey: "about.value1_text" },
    { icon: Eye, titleKey: "about.value2_title", textKey: "about.value2_text" },
    { icon: TrendingUp, titleKey: "about.value3_title", textKey: "about.value3_text" },
];

const promises = [
    { icon: Zap, titleKey: "about.promise1_title", textKey: "about.promise1_text" },
    { icon: ShieldCheck, titleKey: "about.promise2_title", textKey: "about.promise2_text" },
    { icon: Clock, titleKey: "about.promise3_title", textKey: "about.promise3_text" },
    { icon: MapPin, titleKey: "about.promise4_title", textKey: "about.promise4_text" },
];

export default function About() {
    const { t } = useTranslation();
    return (
        <section id="over" data-testid="about-section" className="section-padding bg-white">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 section-padding">
                    <div className="lg:col-span-6 reveal">
                                                <div className="inline-flex items-center gap-2 bg-[#B8860B]/10 text-[#B8860B] px-3 py-1 rounded-md text-xs font-bold tracking-wide uppercase mb-4 md:mb-5">
                            {t("about.badge")}
                        </div>
                        <h2 className="text-[#2C3E50] mb-5">
                            {t("about.title1")} <span className="text-[#B8860B]">{t("about.title2")}</span>.
                        </h2>
                        <p className="text-[15px] md:text-[17px] text-[#2C3E50]/75 leading-relaxed mb-4">
                            {t("about.paragraph1")}
                        </p>
                        <p className="text-[15px] md:text-[17px] text-[#2C3E50]/75 leading-relaxed">
                            {t("about.paragraph2")}
                        </p>

                        <div className="grid sm:grid-cols-3 gap-5 mt-10">
                            {values.map((v, i) => {
                                const Icon = v.icon;
                                return (
                                    <div key={i} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                                        <div className="w-10 h-10 rounded-lg bg-[#B8860B]/10 text-[#B8860B] flex items-center justify-center mb-3">
                                            <Icon size={18} />
                                        </div>
                                                                                <div className="font-display text-base text-[#2C3E50] mb-1 leading-tight">{t(v.titleKey)}</div>
                                        <p className="text-sm text-[#2C3E50]/65 leading-relaxed">{t(v.textKey)}</p>
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
                                    {t("about.promise_badge")}
                                </div>
                                <h3 className="font-display text-2xl md:text-3xl text-white tracking-tight leading-tight mb-4">
                                    {t("about.promise_title1")} <br />
                                    <span className="text-[#B8860B]">{t("about.promise_title2")}</span>
                                </h3>
                                <p className="text-sm md:text-[15px] text-white/70 leading-relaxed mb-10">
                                    {t("about.promise_desc")}
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
                                                                                                        <div className="font-display text-sm text-white mb-0.5 tracking-tight">{t(p.titleKey)}</div>
                                                    <p className="text-xs text-white/65 leading-relaxed">{t(p.textKey)}</p>
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
