import { ArrowRight, Phone, ShieldCheck, Star } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";
const HERO_IMG = '/assets/images/hero/hero-main.jpg';

const dienstenKeys = ["dienst.stukadoor", "dienst.tegels", "dienst.renovatie", "dienst.verf", "dienst.uitbouw"];

export default function Hero() {
    const { t } = useTranslation();
    return (
        <section
            id="top"
            data-testid="hero-section"
            className="relative pt-28 md:pt-36 pb-24 md:pb-28 overflow-hidden bg-white"
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                {/* Left content */}
                <div className="lg:col-span-7 animate-fade-in">
                    <div className="inline-flex items-center gap-2 bg-[#B22222]/10 text-[#B22222] px-3 py-1.5 rounded-md mb-5">
                        <ShieldCheck size={13} />
                        <span className="text-[11px] font-bold tracking-wide uppercase">
                            {t("hero.badge")}
                        </span>
                    </div>

                    <h1 className="font-display text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.04] tracking-tight text-[#2C3E50]">
                        {t("hero.title1")} <br />
                        <span className="text-gradient">{t("hero.title2")}</span>
                    </h1>

                    <p className="mt-5 max-w-xl text-[15px] md:text-[17px] text-[#2C3E50]/70 leading-relaxed">
                        {t("hero.subtitle")}
                    </p>

                    {/* Diensten subtiel — scrollbaar op mobiel */}
                    <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1.5">
                        <span className="text-xs font-medium text-[#2C3E50]/50 tracking-wide">{t("hero.diensten")}</span>
                        <div className="flex flex-wrap gap-1.5">
                            {dienstenKeys.map((key, i) => (
                                <span key={i} className="text-xs font-medium text-[#2C3E50]/60 bg-[#2C3E50]/5 px-2.5 py-1 rounded-full whitespace-nowrap">
                                    {t(key)}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-7 flex flex-col sm:flex-row gap-3">
                        <a
                            href="#aanvragen"
                            data-testid="hero-primary-cta"
                            className="group inline-flex items-center justify-center gap-2 bg-[#B22222] hover:bg-[#8B0000] text-white font-bold text-sm md:text-base px-7 py-3.5 rounded-md shadow-[0_8px_24px_-8px_rgba(178,34,34,0.45)] transition-all btn-glow"
                        >
                            {t("hero.cta")}
                            <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="tel:0643690981"
                            data-testid="hero-secondary-cta"
                            className="inline-flex items-center justify-center gap-2 border-2 border-[#2C3E50] hover:bg-[#2C3E50] hover:text-white text-[#2C3E50] font-bold text-sm md:text-base px-7 py-3.5 rounded-md transition-colors"
                        >
                            <Phone size={15} />
                            {t("hero.bel")}
                        </a>
                    </div>

                    {/* Trust row — beter gestapeld op mobiel */}
                    <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2.5">
                        <div className="flex items-center gap-1.5 min-w-0">
                            <div className="flex shrink-0">
                                {[0,1,2,3,4].map(i => (
                                    <Star key={i} size={11} className="text-[#FFD700] fill-[#FFD700]" />
                                ))}
                            </div>
                            <span className="text-xs text-[#2C3E50]/70 font-medium whitespace-nowrap">{t("hero.tevreden")}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                            <span className="text-xs text-[#2C3E50]/60 whitespace-nowrap">{t("hero.vaste_prijzen")}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B] shrink-0" />
                            <span className="text-xs text-[#2C3E50]/60 whitespace-nowrap">{t("hero.heel_nederland")}</span>
                        </div>
                    </div>
                </div>

                {/* Right photo card */}
                <div className="lg:col-span-5">
                    <div className="relative">
                        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-elevated bg-[#2C3E50] img-zoom">
                            <img src={HERO_IMG} alt="Vakman in werkkleding aan het verbouwen van een woonkamer" width="600" height="750" className="w-full h-full object-cover" loading="eager" onError={(e) => { e.currentTarget.style.opacity = '0.3'; }} />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
                            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#B22222] via-[#C9960C] to-[#B22222]" />
                            <div className="absolute bottom-5 left-5 right-5">
                                <div className="bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2.5 inline-flex items-center gap-2.5 shadow-soft">
                                    <span className="w-2 h-2 rounded-full bg-[#B8860B] animate-pulse" />
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#2C3E50]">
                                        {t("hero.door_heel")}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -bottom-4 -right-3 md:-right-4 bg-[#2C3E50] text-white border-2 border-[#B8860B] rounded-xl p-3.5 shadow-elevated">
                            <div className="text-[9px] uppercase tracking-wider text-white/55 mb-0.5 font-mono">{t("hero.reactietijd")}</div>
                            <div className="font-display text-2xl text-[#B8860B] leading-none">&lt; 24<span className="text-sm text-white/70 font-bold">u</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}